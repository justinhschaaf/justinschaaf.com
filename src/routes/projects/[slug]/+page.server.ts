import type { PageServerLoad } from './$types';
import * as content from '$lib/content';
import { error } from '@sveltejs/kit';

// Yes, we have to use Svelte's fetch or it complains
// https://kit.svelte.dev/docs/load#making-fetch-requests
export const load: PageServerLoad = async ({ fetch, params }) => {

    let project = await content.fetchProject(fetch, params.slug);

    // Make sure disabled projects are inaccessible
    if (project.disabled) {
        error(404);
    }

    return {
        project: project
    };

};
