import { error } from "@sveltejs/kit";
import matter, { type GrayMatterFile } from "gray-matter";

// Where my stash is hidden
export const blogstore: string = "/assets/text/blog";
export const blogcfg: string = "/assets/data/blog.json";
export const projectscfg: string = "/assets/data/projects.json";
export const socialcfg: string = "/assets/data/socials.json";
export const splashescfg: string = "/assets/data/splashes.json";

export async function fetchBlogPosts(fetcher: Function) {

    let postsRes = await fetchJson(fetcher, blogcfg);

    let posts: string[] = postsRes["posts"];
    let postPromises: Promise<GrayMatterFile<any>>[] = [];

    // This is written like this for speed. Since we need to fetch each post
    // file to get the metadata in it, might as well get all of them at once
    for (let i in posts) {
        postPromises.push(fetchBlogPost(fetcher, posts[i]));
    }

    let fetchedResults = await Promise.allSettled(postPromises);
    let fetchedPosts: GrayMatterFile<any>[] = [];

    fetchedResults.forEach((res) => {
        if (res.status == 'fulfilled') {
            fetchedPosts.push(res.value);
        }
    });

    return fetchedPosts;

}

export function fetchBlogPost(fetcher: Function, postSlug: string) {
    return fetchMarkdown(fetcher, blogstore.concat(postSlug, ".md"));
}

export async function fetchProject(fetcher: Function, key: string) {

    let projects = await fetchProjects(fetcher);
    let project = projects[key];

    let md = await fetchMarkdown(fetcher, project.desc); 
    project.desc_content = md.content;

    return project;

}

export async function fetchProjects(fetcher: Function): Promise<{[index: string]: Project}> {
    return castObjects(await fetchJson(fetcher, projectscfg));
}

export async function fetchSocials(fetcher: Function): Promise<{[index: string]: SocialIcon}> {
    return castObjects(await fetchJson(fetcher, socialcfg));
}

export async function fetchSplash(fetcher: Function): Promise<string> {

    let json = await fetchJson(fetcher, splashescfg);
    let splashes: [] = json["splashes"];

    // WHY is undefined a type?
    let splash: string | undefined;

    while (splash == undefined && splashes.length > 0) {

        let index = Math.floor(Math.random() * splashes.length);
        let selection = splashes[index];

        if (typeof selection == typeof "string") splash = selection;
        // I love Java because I don't have to do crap like this to check if a variable is of a certain interface >=(
        else if ("name" in selection) {

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
                splash = special.name;
            }

        }

        splashes.splice(index, 1);

    }

    return (splash != undefined) ? splash : "";

}

export async function fetchMarkdown(fetcher: Function, src: string): Promise<GrayMatterFile<any>> {

    let rawPromise = await fetcher(src);

    // It's necessary to manually throw an error here or else the markdown 
    // component just displays the website html as text
    if (!rawPromise.ok) {
        error(rawPromise.status);
    }

    return matter(await rawPromise.text());

}

export async function fetchJson(fetcher: Function, src: string): Promise<any> {
    
    let r = await fetcher(src);
    return await r.json();

}

export function castObjects<T>(raw: {[index: string]: any}): {[index: string]: T} {

    let out: {[index: string]: T} = {};

    Object.keys(raw).forEach((key) => {

        let p: T = raw[key] as T;
        out[key] = p;

    });

    return out;

}

export interface SocialIcon {

    name: string;
    url: string;
    icon: string;
    disabled?: boolean;

}

export interface Splash {

    name: string;
    disabled?: boolean;
    prerequisites?: {
        month?: number;
        day?: number;
        hour?: number;
    }

}

export interface Project {

    name: string;
    title: string;
    tagline: string;
    desc: string;
    desc_content?: string;
    disabled?: boolean;

    art: {
        img: string;
        ascii_dark: string;
        ascii_light: string;
        cover: string;
    }

}
