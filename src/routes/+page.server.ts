import type { PageServerLoad } from './$types';
import { ContentLoader } from '$lib/content';

export const load: PageServerLoad = async ({ params }) => {
    return await ContentLoader.load("https://content.justinschaaf.com/common/config/website.json");
};
