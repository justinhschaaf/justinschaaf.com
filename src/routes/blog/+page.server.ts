import type { PageServerLoad } from './$types';
import * as content from '$lib/content';

export const load: PageServerLoad = async ({ fetch }) => {

    let postJson = await content.fetchBlogCfg(fetch);
    let posts = await content.fetchBlogPosts(fetch, postJson);
    let postPojos = [];

    // If we don't convert the GrayMatterFiles into POJOs SvelteKit gets really pissed
    for (let i in posts) {
        postPojos.push({
            data: posts[i].data,
            content: posts[i].content
        });
    }

    return {
        // Gotta list them all
        posts: postPojos,
        postLinkPrompts: postJson["postLinkPrompts"]
    }

};
