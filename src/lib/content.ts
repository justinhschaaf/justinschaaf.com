export class ContentLoader {

    public static async load(src: string): Promise<Content> {
        
        let r = await fetch(src);
        let c: Content = await r.json() as Content;

        return c;

    }

    public static selectSplash(splashes: any[]): string {

        let splash: string = "";

        // am I the only person that finds Java's null more useful than this?
        while (splash == "" && splashes.length > 0) {

            let index = Math.floor(Math.random() * splashes.length);
            let selection = splashes[index];

            if (typeof selection == typeof "string") splash = selection;
            // I love Java because I don't have to do crap like this to check if a variable is of a certain interface >=(
            else if ("name" in selection) {

                let special: Splash = selection as Splash;
                let valid = true;

                // Check prerequisites
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

    // TS7053 solution https://stackoverflow.com/a/56833507
    public static castEntries(rawEntries: {[index: string]: any}): {} {

        let entries: {[index: string]: any} = {};

        // Convert entries to actual entries
        Object.keys(rawEntries).forEach((category) => {

            Object.keys(rawEntries[category]).forEach((key) => {

                if (entries[category] == undefined) entries[category] = {};

                // Convert it to an entry and add it to the new object
                let e: Entry = rawEntries[category][key] as Entry;
                entries[category][key] = e;

            });

        });

        return entries;

    }

}

export interface Content {
    
    splashes: any[];
    entries: {};

}

export interface Splash {

    name: string;
    prerequisites?: {
        month?: number;
        day?: number;
        hour?: number;
    }

}

export interface Entry {

    name: string;
    url: string;
    hidden?: boolean;

    // Social Icons
    featured?: boolean;
    icon?: string;

    // Projects
    desc?: string;

}
