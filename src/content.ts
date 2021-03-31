import fetch from "node-fetch";

export class ContentLoader {

    public static async load(src: string): Promise<Content> {
        
        var r = await fetch(src);
        var c: Content = await r.json() as Content;
        
        return c;

    }

    public static selectSplash(splashes: any[]): string {

        var splash: string = undefined;

        while (splash == undefined && splashes.length > 0) {

            var index = Math.floor(Math.random() * splashes.length);
            var selection = splashes[index];

            if (typeof selection == typeof "string") splash = selection;
            // I love Java because I don't have to do crap like this to check if a variable is of a certain interface >=(
            else if ("name" in selection) {

                var special: Splash = selection as Splash;
                var valid = true;

                // Check prerequisites
                if (special.prerequisites != undefined) {

                    if (special.prerequisites.month > 0) {
                        if (new Date().getMonth() != special.prerequisites.month) valid = false;
                    }

                    if (special.prerequisites.day > 0) {
                        if (new Date().getDate() != special.prerequisites.month) valid = false;
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

    public static castEntries(rawEntries: {}): {} {

        var entries: {} = {};

        // Convert entries to actual entries
        Object.keys(rawEntries).forEach((category) => {

            Object.keys(rawEntries[category]).forEach((key) => {

                if (entries[category] == undefined) entries[category] = {};

                // Convert it to an entry and add it to the new object
                var e: Entry = rawEntries[category][key] as Entry;
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
