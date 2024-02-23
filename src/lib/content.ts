export async function fetchProject(fetcher: Function, src: string, key: string) {

    let projects = await fetchProjects(fetcher, src);
    let project = projects[key];

    let contentPromise = await fetcher(project.desc); 
    project.desc_content = await contentPromise.text();

    return project;

}

export async function fetchProjects(fetcher: Function, src: string): Promise<{[index: string]: Project}> {
    return castObjects(await fetchJson(fetcher, src));
}

export async function fetchSocials(fetcher: Function, src: string): Promise<{[index: string]: SocialIcon}> {
    return castObjects(await fetchJson(fetcher, src));
}

export async function fetchSplash(fetcher: Function, src: string): Promise<string> {

    let json = await fetchJson(fetcher, src);
    let splashes: [] = json["splashes"];

    let splash: string = "";

    // am I the only person that finds Java's null more useful than a blank string?
    while (splash == "" && splashes.length > 0) {

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

    return splash;

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
