import type { LayoutServerLoad } from './$types';
import { env } from "$env/dynamic/public";
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
    console.log(env);
    return {
        socials: await content.fetchSocials(fetch),
        repo: ("PUBLIC_GITHUB_REPOSITORY" in env) 
            ? env.PUBLIC_GITHUB_REPOSITORY 
            : "justinhschaaf/justinschaaf.com",
        ref: ("PUBLIC_GITHUB_REF_NAME" in env) 
            ? env.PUBLIC_GITHUB_REF_NAME 
            : "main",
        sha: ("PUBLIC_GITHUB_SHA" in env)
            ? env.PUBLIC_GITHUB_SHA
            : "8675309"
    };
};
