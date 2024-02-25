import type { PageServerLoad } from './$types';
import * as content from '$lib/content';

// Yes, we have to use Svelte's fetch or it complains
// https://kit.svelte.dev/docs/load#making-fetch-requests
export const load: PageServerLoad = async ({ fetch }) => {
    return {
        projects: await content.fetchProjects(fetch),
        splash: await content.fetchSplash(fetch)
    };
};
