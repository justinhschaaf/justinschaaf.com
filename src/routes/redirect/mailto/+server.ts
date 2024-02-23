import { redirect, type RequestHandler } from "@sveltejs/kit";

// Hide email link
// https://www.ionos.co.uk/digitalguide/e-mail/e-mail-security/protecting-your-e-mail-address-how-to-do-it/
// https://stackoverflow.com/a/57821457
export const fallback: RequestHandler = () => {
    // https://kit.svelte.dev/docs/modules#sveltejs-kit-redirect
    // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_redirection
    return redirect(307, "mailto:justin@justinschaaf.com");
};
