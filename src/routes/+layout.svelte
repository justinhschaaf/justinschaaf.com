<script lang="ts">

    import { page } from "$app/stores";
    import { darkTheme } from "$lib/theme"
    import Footer from "$lib/components/Footer.svelte";

    // Determine the cannonical url by removing query params and using https
    let canonicalUrl: string;
    $: canonicalUrl = "https://".concat($page.url.host, $page.url.pathname)
    
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
        --padding-small: 8px;

        // Dark theme colors
        --color-darkish: #151515;
        --color-dark: #111111;
        --color-darker: #0C0C0C;
        --color-dark-filter: invert(0%) sepia(23%) saturate(6326%) hue-rotate(13deg) brightness(92%) contrast(87%);

        // Light theme colors
        --color-light: #ffffff;
        --color-light-filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(76deg) brightness(103%) contrast(100%);

        // justinschaaf.com colors
        --color-fjord: #80aabd;
        --color-lucky: #777777;
        --color-splash: #ffff55;

        // colors.justinschaaf.com, used for alerts
        --color-ocean: #336699;
        --color-jalapeno: #669933;
        --color-eggplant: #993399;
        --color-sunflower: #ff9933;
        --color-cinnabar: #bb2233;

        --shadow: 0 0px 8px 0px rgba(0, 0, 0, 0.4);
        --shadow-hover: 0 2px 16px 1px rgba(0, 0, 0, 0.4);
        --shadow-text: 0 0px 4px var(--color-dark);
        --transition: .2s ease-in-out;

        --font-head: 'Major Mono Display', 'Courier New', monospace;
        --font-body: 'IBM Plex Mono', 'Courier New', monospace;

        font-family: var(--font-body);
        font-size: 17px; // juuuuuuuust right

    }

    :global(.light) {

        --color-fg: var(--color-dark);
        --color-fg-filter: var(--color-dark-filter);
        --color-bg: var(--color-light);
        --color-bg-accent-dark: var(--color-light);

        color: var(--color-fg);
        background-color: var(--color-bg);

    }

    :global(.dark) {

        --color-fg: var(--color-light);
        --color-fg-filter: var(--color-light-filter);
        --color-bg: var(--color-dark);
        --color-bg-accent-dark: var(--color-darker);

        color: var(--color-fg);
        background-color: var(--color-bg);

    }

    :global(h1, h2, h3, h4, h5, h6) {
        font-family: var(--font-head) !important;
    }

    :global(a) {
        color: var(--color-fjord);
        text-decoration: none;
    }

    :global(a:hover) {
        text-decoration: underline;
    }

    // Image formatting is fucked if we don't do this
    :global(img) {
        width: 100%;
    }

    // Recolor inline SVGs
    // was specifically for marked-alert, now a little redundant but whatever
    :global(svg) {
        fill: var(--color-fg);
    }

    :global(button) {

        padding: 16px;
        min-width: 160px;

        text-transform: uppercase;
        font-size: 1em;
        font-family: var(--font-body);

        color: var(--color-light);
        background-color: var(--color-fjord);
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

<!-- Global head options -->
<svelte:head>

    <link rel="canonical" href={canonicalUrl}>

    <!-- OpenGraph data https://ogp.me/ -->
    <meta property="og:url" content={canonicalUrl}>
    <meta property="og:site_name" content="Justin Schaaf // justinschaaf.com">

</svelte:head>

<!-- Add theme classes to everything -->
<div class:dark={$darkTheme} class:light={!$darkTheme}>

    <main>
        <slot></slot>
    </main>
    
    <Footer socials={$page.data.socials} 
        repo={$page.data.repo} 
        ref={$page.data.ref} 
        sha={$page.data.sha}/>

</div>

