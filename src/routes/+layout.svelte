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

    :global(*) {
        font-family: "IBM Plex Mono", 'Segoe UI Emoji', monospace;
    }

    :global(h1, h2, h3, h4, h5, h6) {
        font-family: 'Major Mono Display', 'Segoe UI Emoji', monospace;
    }

    :global(a) {
        color: #80aabd;
    }

    :global(img) {
        width: 100%;
    }

    :global(button) {

        text-transform: uppercase;
        font-size: 1em;
        padding: 16px;
        min-width: 160px;

        color: #ffffff;
        background-color: #80aabd;
        border: none;

        transition: .25s ease-out;
        box-shadow: 0 0px 8px rgba(0, 0, 0, 0.8);

    }

    :global(button:hover) {

        cursor: pointer;
        transform: translateY(-2pt);

        color: #000000;
        background-color: #ffffff;
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.8);

    }

</style>

<main>
    <slot></slot>
</main>
