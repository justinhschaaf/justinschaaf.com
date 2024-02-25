import type { GrayMatterFile } from 'gray-matter';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import * as content from '$lib/content';

export const load: PageServerLoad = async ({ fetch, params }) => {

    let post: GrayMatterFile<any> = await content.fetchBlogPost(fetch, "/" + params.slug);

    // Make sure we got to a valid post. We look for the mandatory title here 
    // instead of throwing an actual error from the content fetcher if we didn't
    // get the content because it's 4:15 am and I don't feel like rewriting the
    // content fetcher to include proper error handling
    // 15 minutes later: nevermind...
    /*if (!("title" in post.data)) {
        error(404);
    }*/

    // Make sure users can't access disabled posts
    if ("disabled" in post.data && post.data.disabled) {
        error(403);
    }

    return {
        post: {
            data: post.data,
            content: post.content
        }
    };

};
