import sveltePreprocess from "svelte-preprocess";

module.exports = {
    preprocess: sveltePreprocess({
        scss: {
            includePaths: ["src"]
        },
        postcss: {
            plugins: [
                require("autoprefixer")
            ]
        }
    })
};
