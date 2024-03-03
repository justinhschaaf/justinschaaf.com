import { error } from "@sveltejs/kit";
import matter, { type GrayMatterFile } from "gray-matter";

/*
 Where my stash is hidden
 */

/** Blog data will be fetched relative to this location. */
export const blogstore: string = "/assets/text/blog";

/** Where to find the list of blog posts, relative to the blog url and blogstore. */
export const blogcfg: string = "/assets/data/blog.json";

/** Where to find project definitions. */
export const projectscfg: string = "/assets/data/projects.json";

/** Where to find what social icons we list. */
export const socialcfg: string = "/assets/data/socials.json";

/** Where to find the splashes for the home hero image. */
export const splashescfg: string = "/assets/data/splashes.json";

/* 
 How to access my stash
 */

/**
 * Fetches the the list of blog posts from {@link blogcfg}. The JSON object 
 * should have only one key, "posts", mapped to a string list of blog post slugs
 * 
 * @param fetcher The fetch function as provided by the Svelte PageLoad handler
 * @returns Promises a JSON object containing "posts" mapped to a string list of
 *      post slugs
 */
export function fetchBlogCfg(fetcher: Function): Promise<any> {
    return fetchJson(fetcher, blogcfg);
}

/**
 * Fetches all blog posts as defined by the given postJson or in
 * {@link fetchBlogCfg}
 * 
 * @param fetcher The fetch function as provided by the Svelte PageLoad handler
 * @param postJson A JSON object containing blog post config. Fetches it if not 
 *      provided
 * @returns Promises a list of blog posts
 */
export async function fetchBlogPosts(fetcher: Function, postJson?: any | undefined): Promise<matter.GrayMatterFile<any>[]> {

    if (postJson == undefined) {
        postJson = await fetchBlogCfg(fetcher);
    }

    let posts: string[] = postJson["posts"];
    let postPromises: Promise<GrayMatterFile<any>>[] = [];

    // This is written like this for speed. Since we need to fetch each post
    // file to get the metadata in it, might as well get all of them at once
    for (let i in posts) {
        postPromises.push(fetchBlogPost(fetcher, posts[i]));
    }

    // Wait for all posts to be fetched
    let fetchedResults = await Promise.allSettled(postPromises);
    let fetchedPosts: GrayMatterFile<any>[] = [];

    // If we were provided a post, add it to the list of posts
    fetchedResults.forEach((res) => {
        if (res.status == 'fulfilled') {
            fetchedPosts.push(res.value);
        }
    });

    return fetchedPosts;

}

/**
 * Fetches a blog post's Markdown file and interprets the Front Matter data.
 * Also automatically adds some options if they're undefined.
 * 
 * Since GrayMatter data has any type, the expected options are as follows:
 * 
 * title: string - The formatted title of the post.
 * desc?: string - A brief introduction to the post. A hook to get your 
 *      attention. Used as a preview when listing all posts and for SEO. Added
 *      automatically if not defined.
 * created: number - The timestamp the post was first uploaded (roughly), in 
 *      Unix epoch seconds.
 * updated?: number - The last time the post was updated (roughly), in Unix 
 *      epoch seconds.
 * cover?: string - A link to the cover image for this post. Also to be used in 
 *      webpage previews.
 * hidden?: boolean - If true, this blog post will still be accessible, but 
 *      won't be listed on the blogs page. Added automatically as `false` if not
 *      defined.
 * disabled?: boolean - If true, this blog post will be inaccessible, returning 
 *      error 403. Added automatically as `false` if not defined.
 * slug: string - The slug as defined in the blog cfg file. This is added 
 *      automatically.
 * 
 * @param fetcher The fetch function as provided by the Svelte PageLoad handler
 * @param postSlug The slug of the post to fetch, not the full path
 * @returns Promises the post as a GrayMatterFile
 */
export function fetchBlogPost(fetcher: Function, postSlug: string): Promise<GrayMatterFile<any>> {
    return fetchMarkdown(fetcher, blogstore.concat(postSlug, ".md")).then((res) => {

        res.data.slug = postSlug;

        // Add the desc as the first paragraph of body text if not defined
        if (!("desc" in res.data)) {

            let desc = res.content;
            let end = desc.indexOf("\n\n");

            // Cut off from the end of the first paragraph
            if (end > -1) {
                desc = desc.substring(0, end);
            }

            res.data.desc = desc;

        }

        // Set hidden to false if not defined
        if (!("hidden" in res.data)) {
            res.data.hidden = false;
        }

        // Set disabled to false if not defined
        if (!("disabled" in res.data)) {
            res.data.disabled = false;
        }

        return res;
        
    });
}

/**
 * Fetches data for a single project. This uses {@link fetchProjects}
 * internally, so if you need more than one project it's better to use that for
 * performance.
 * 
 * @param fetcher The fetch function as provided by the Svelte PageLoad handler
 * @param key The key of the project whose data to fetch
 * @returns Promises data for the single specified project
 */
export async function fetchProject(fetcher: Function, key: string): Promise<Project> {

    let projects = await fetchProjects(fetcher);
    let project = projects[key];

    let md = await fetchMarkdown(fetcher, project.desc); 
    project.desc_content = md.content;

    return project;

}

/**
 * Fetches all project data from {@link projectscfg} and casts each entry to
 * a {@link Project}.
 * 
 * @param fetcher The fetch function as provided by the Svelte PageLoad handler
 * @returns Promises a mapping of project keys to Project objects
 */
export async function fetchProjects(fetcher: Function): Promise<{[index: string]: Project}> {
    return castObjects(await fetchJson(fetcher, projectscfg));
}

/**
 * Fetches all defined social icons from {@link socialcfg} and casts each entry 
 * to a {@link SocialIcon}.
 * 
 * @param fetcher The fetch function as provided by the Svelte PageLoad handler
 * @returns Promises a mapping of social keys to SocialIcon objects
 */
export async function fetchSocials(fetcher: Function): Promise<{[index: string]: SocialIcon}> {
    return castObjects(await fetchJson(fetcher, socialcfg));
}

/**
 * Fetches all possible splashes from {@link splashescfg}, finds a valid splash
 * at random, and returns it.
 * 
 * @param fetcher The fetch function as provided by the Svelt PageLoad handler
 * @returns Promises a single splash as a list, to be used with the Typed 
 *      component's "strings" parameter
 */
export async function fetchSplash(fetcher: Function): Promise<string[]> {

    let json = await fetchJson(fetcher, splashescfg);
    let splashes: [] = json["splashes"];

    // WHY is undefined a type?
    let splash: string[] | undefined;

    while (splash == undefined && splashes.length > 0) {

        let index = Math.floor(Math.random() * splashes.length);
        let selection: any = splashes[index];

        if (typeof selection == typeof "string") {
            splash = [selection];
            // https://stackoverflow.com/a/26633883
        } else if (selection.constructor === Array) {
            splash = selection;
            // I love Java because I don't have to do crap like this to check if a variable is of a certain interface
        } else if ("value" in selection) {

            let special: Splash = selection as Splash;

            // Skip disabled
            if (special.disabled) continue;

            // Check prerequisites
            let valid = true;
            if (special.prerequisites != undefined) {

                if (special.prerequisites.month != undefined && special.prerequisites.month > 0) {
                    if (new Date().getMonth() != special.prerequisites.month) valid = false;
                }

                if (special.prerequisites.day != undefined && special.prerequisites.day > 0) {
                    if (new Date().getDate() != special.prerequisites.month) valid = false;
                }

                if (special.prerequisites.hour != undefined && special.prerequisites.hour > 0) {
                    if (new Date().getHours() != special.prerequisites.hour) valid = false;
                }

            }

            if (valid) {

                if (special.value.constructor === Array) {
                    splash = special.value;
                } else {
                    splash = [special.value as string];
                }

            }

        }

        splashes.splice(index, 1);

    }

    return (splash != undefined) ? splash : [];

}

/**
 * Fetches a Markdown file, interprets any front matter data, and returns the
 * result. If the Markdown file is not found, throws a 404 error.
 * 
 * @param fetcher The fetch function as provided by Svelte's PageLoad handler
 * @param src The string URL of the Markdown file to fetch
 * @returns Promises a GrayMatterFile from the Markdown file data
 */
export async function fetchMarkdown(fetcher: Function, src: string): Promise<GrayMatterFile<any>> {

    let rawPromise = await fetcher(src);

    // It's necessary to manually throw an error here or else the markdown 
    // component just displays the website html as text
    if (!rawPromise.ok) {
        error(rawPromise.status);
    }

    return matter(await rawPromise.text());

}

/**
 * Fetches JSON data from the given src link.
 * 
 * @param fetcher The fetch function as provided by Svelte's PageLoad handler
 * @param src The string URL of the JSON data to fetch
 * @returns Promises the interpreted JSON data
 */
export async function fetchJson(fetcher: Function, src: string): Promise<any> {
    
    let r = await fetcher(src);
    return await r.json();

}

/**
 * Takes an object which maps string keys to values and casts each value to the
 * desired interface type T.
 * 
 * @param raw The raw data to cast
 * @returns The casted data
 */
export function castObjects<T>(raw: {[index: string]: any}): {[index: string]: T} {

    let out: {[index: string]: T} = {};

    Object.keys(raw).forEach((key) => {

        let p: T = raw[key] as T;
        out[key] = p;

    });

    return out;

}

/** Represents a SocialIcon as displayed in the footer */
export interface SocialIcon {

    /** The name of the social service this icon represents */
    name: string;

    /** The string URL clicking this icon should take you to */
    url: string;

    /** The string URL where the icon itself can be found */
    icon: string;

    /** Whether this icon is disabled and should not be shown */
    disabled?: boolean;

}

/** Represents a Splash object entry */
export interface Splash {

    /** 
     * The splash text itself as either a string or array to be interpreted by 
     * the Typed component 
     */
    value: string[] | string;

    /** Whether this splash is disabled and shouldn't be used */
    disabled?: boolean;

    /** 
     * The prerequisites for this splash to be displayed, all of which must be 
     * fulfilled to pass 
     */
    prerequisites?: {

        /** Passes if the month we're in matches the given 1-12 value */
        month?: number;

        /** Passes if the current day of the month matches the given value */
        day?: number;

        /** Passes if the current hour matches the given 24hr value */
        hour?: number;

    }

}

/** Represents a Project displayed on the Home page and having its own page */
export interface Project {

    /** 
     * The name of this project as displayed on the Home page. Can be multiline 
     */
    name: string;

    /** 
     * The name of this project as a single line. Used on dedicated Project 
     * pages and in metadata 
     */
    title: string;

    /** 
     * A witty tagline for the project, used on dedicated Project pages and as
     * metadata descriptions
     */
    tagline: string;

    /** 
     * A string URL pointing to a Markdown file containing a detailed 
     * description of this project 
     */
    desc: string;

    /** The raw Markdown data fetched from {@link desc}. Added automatically. */
    desc_content?: string;
    disabled?: boolean;

    /** The assets used to showcase this project */
    art: {

        /** String URL to the project's logo, 1:1 aspect ratio */
        img: string;

        /** 
         * String URL to an HTML file with an Ascii representation of the 
         * project's logo, as used on a dark background. As of writing, this is 
         * generated with jp2a and is 32 lines tall.
         */
        ascii_dark: string;

        /** 
         * String URL to an HTML file with an Ascii representation of the 
         * project's logo, as used on a liht background. As of writing, this is 
         * generated with jp2a and is 32 lines tall.
         */
        ascii_light: string;

        /** String URL to the cover image as displayed on the project page */
        cover: string;

    }

}
