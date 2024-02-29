<script lang="ts">

    import type { PageData } from "./$types";
    import { darkTheme } from "$lib/theme"
    import Footer from "$lib/components/Footer.svelte";

    export let data: PageData;
    
</script>

<style lang="scss">

    /*
    * Reference: https://github.com/sveltejs/sapper/issues/562#issuecomment-463542668
    * 
    * So apparently removes styles it considers "unnecessary" and does not 
    * recognize the nested header tags in this component's subcomponents with 
    * no way I know of to disable it. :global() forces these styles to be 
    * applied globally, but it's still stupid I have to include such a tag 
    * instead of these styles being applied to all children elements. It's also
    * stupid that I can't just wrap all the styles in a :global() {}-like tag 
    * with SCSS, but at least it's better than having to import a SCSS file 
    * into every single component.
    *
    * ^
    * |
    * 
    * The above comment was written before SvelteKit was a thing, 
    * but it still applies and I don't feel like rewriting it...
    */

    :global(:root) {

        --padding-large: 48px;

        --color-dark: #111111;
        --color-light: #ffffff;
        --color-accent: #80aabd;
        --color-grey: #777777;

        --shadow: 0 0px 8px 0px rgba(0, 0, 0, 0.4);
        --shadow-hover: 0 2px 16px 1px rgba(0, 0, 0, 0.4);
        --transition: .2s ease-in-out;

        --font-head: 'Major Mono Display', 'Courier New', monospace;
        --font-body: 'IBM Plex Mono', 'Courier New', monospace;

        font-family: var(--font-body);
        font-size: 17px; // juuuuuuuust right
        color: var(--color-dark);

    }

    :global(h1, h2, h3, h4, h5, h6) {
        font-family: var(--font-head) !important;
    }

    :global(a) {
        color: var(--color-accent);
    }

    :global(img) {
        width: 100%;
    }

    :global(button) {

        padding: 16px;
        min-width: 160px;

        text-transform: uppercase;
        font-size: 1em;
        font-family: var(--font-body);

        color: var(--color-light);
        background-color: var(--color-accent);
        border: none;

        transition: var(--transition);
        box-shadow: var(--shadow);

    }

    :global(button:hover) {

        cursor: pointer;
        transform: translateY(-2px);

        color: var(--color-dark);
        background-color: var(--color-light);
        box-shadow: var(--shadow-hover);

    }

    :global(p) {
        text-align: justify;
    }

    main {
        // Make sure there's nothing under the footer
        min-height: 100vh;
    }

</style>

<div class:dark={$darkTheme} class:light={!$darkTheme}>

    <main>
        <slot></slot>
    </main>
    
    <Footer socials={data.socials}></Footer>

</div>

