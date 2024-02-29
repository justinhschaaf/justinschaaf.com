import { redirect, type RequestHandler } from "@sveltejs/kit";

// ALL = default feed
export const fallback: RequestHandler = () => {
    return redirect(308, "/rss/all");
};
