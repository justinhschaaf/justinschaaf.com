import type { GrayMatterFile } from 'gray-matter';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import * as content from '$lib/content';

export const load: PageServerLoad = async ({ fetch, params }) => {

    let post: GrayMatterFile<any> = await content.fetchBlogPost(fetch, "/" + params.slug);

    // Make sure users can't access disabled posts
    if (post.data.disabled) {
        error(403);
    }

    return {
        post: {
            data: post.data,
            content: post.content
        }
    };

};
