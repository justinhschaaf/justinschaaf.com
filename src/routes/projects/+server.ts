import { redirect, type RequestHandler } from "@sveltejs/kit";

// We don't have a dedicated projects page, go home
export const fallback: RequestHandler = () => {
    // https://kit.svelte.dev/docs/modules#sveltejs-kit-redirect
    // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_redirection
    return redirect(308, "/#projects");
};
