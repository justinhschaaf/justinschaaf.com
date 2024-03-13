// https://stackoverflow.com/a/53786892
// https://stackoverflow.com/questions/38482035/invalid-module-name-in-augmentation-error-while-using-map-option-for-rxjs
declare module 'highlightjs-svelte' {

    import type { HLJSApi, Language } from "highlight.js";

    export function hljsDefineSvelte(hljs: HLJSApi): Language;

}
// both above and below don't work to actually give highlightjs-svelte types.
// why? because of course not! why the fuck would ANYTHING javascript/typescript
// work as the stackoverflow comments and error tooltips say it should?
//declare module 'highlightjs-svelte'; 
