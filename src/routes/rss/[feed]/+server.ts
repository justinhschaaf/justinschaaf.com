import { error, type RequestHandler } from "@sveltejs/kit";
import { Feed, type Item } from "feed";

import * as content from "$lib/content";

export const fallback: RequestHandler = async ({ fetch, params, url }) => {

    let now: Date = new Date();
    const maxAge: number = 90; // Anything older than 90 days won't show

    // URL params
    let feedParam: string | undefined = params.feed;
    let atomFeed: boolean = url.searchParams.has("atom", "true");
    let jsonFeed: boolean = url.searchParams.has("json", "true");

    // Feed data
    let feed: Feed;
    let items: Item[] = [];
    let addBlogPosts: boolean = false;
    let universalOptions: any = {
        copyright: "(C) 2011-".concat(now.getFullYear() + "", " Justin Schaaf. All Rights Reserved.")
    };

    // Determine which feed we want
    if (feedParam?.toUpperCase() == "ALL") {

        feed = new Feed({
            title: "justinschaaf.com // All",
            description: "All content from justinschaaf.com",
            id: url.origin,
            link: url.origin,
            ...universalOptions
        });

        addBlogPosts = true;

    } else if (feedParam?.toUpperCase() == "BLOG") {

        let link: string = url.origin.concat("/blog");

        feed = new Feed({
            title: "justinschaaf.com // Blog",
            description: "Blog posts from justinschaaf.com",
            id: link,
            link: link,
            ...universalOptions
        });

        addBlogPosts = true;

    } else {
        error(404);
    }

    // Add items
    if (addBlogPosts) {

        let posts = await content.fetchBlogPosts(fetch);

        for (let i in posts) {

            let post = posts[i].data;

            // Don't add hidden or disabled posts to feed
            if (post.hidden || post.disabled) continue;

            items.push({
                title: post.title,
                link: url.origin.concat("/blog", post.slug),
                date: new Date(post.created * 1000),
                description: post.desc,
                id: post.slug
            });

        }

    }

    // Sort items newest first
    items.sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
    });

    // Make sure we have at least one item and no more that are older than 90 days
    let limit: number = now.getTime() - (maxAge * 86400000);
    for (let i = 1; i < items.length; i++) {

        if (items[i].date.getTime() < limit) {
            items = items.slice(0, i);
            break;
        }

    }

    // Add items to the feed
    feed.items = items;

    // JSON feed
    if (jsonFeed) {

        let jsonResOptions = {
            headers: { "Content-Type": "application/json" }
        };

        // Using SvelteKit's json response breaks formatting
        return new Response(feed.json1(), jsonResOptions);

    }

    // XML response options
    let xmlResOptions = {
        headers: { "Content-Type": "application/xml" }
    };

    // Atom feed
    if (atomFeed) {
        return new Response(feed.atom1(), xmlResOptions);
    }

    // Default: RSS feed
    return new Response(feed.rss2(), xmlResOptions);

};
