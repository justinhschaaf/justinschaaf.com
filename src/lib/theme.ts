import { browser } from "$app/environment";
import { persisted } from "svelte-persisted-store";

// Sources:
// https://github.com/sveltejs/site-kit/blob/master/packages/site-kit/src/lib/stores/theme.js
// https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
// https://www.npmjs.com/package/svelte-persisted-store

/** 
 * Holds whether dark theme should be enabled. If this is false, light theme is 
 * used instead. Backed by a persistent store so if the user leaves, the same
 * theme is applied when they return.
 */
export const darkTheme = persisted('darkTheme', browser
    ? window.matchMedia("(prefers-color-scheme: dark)").matches 
        ? true
        : false
    : false);
