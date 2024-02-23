import type { LayoutServerLoad } from './$types';
import * as content from '$lib/content';

/* 
    TypeScript is a stupid fucking programming language
    https://medium.com/front-end-weekly/typescript-error-ts7031-makes-me-go-huh-c81cf76c829b

    This spits out TS7031 and has no proposed solutions in VS Code despite the
    website compiling just fine. The solution that VS Code couldn't figure out?
    This is supposed to be LayoutServerLoad, not PageServerLoad. The error
    message it was giving me was irrelevant to the actual problem. Thanks alot.
*/
export const load: LayoutServerLoad = async ({ fetch }) => {
    return {
        socials: await content.fetchSocials(fetch, "/assets/data/socials.json")
    };
};
