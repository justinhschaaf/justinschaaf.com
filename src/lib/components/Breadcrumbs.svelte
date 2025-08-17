<script lang="ts">

    import { page } from "$app/state";

    
    interface Props {
        /** The path to display. Defaults to the current one */
        pathname?: string;
    }

    let { pathname = page.url.pathname }: Props = $props();
    
    // A matrix mapping a segment in a path to the parts before it
    // e.g. ["llama-steeds", "/projects"]
    let routes: string[][] = [];

    let lastStr = pathname;
    let i;

    // Disects the path by splitting it at the last forward slash
    while (true) {

        i = lastStr.lastIndexOf("/");
        if (i < 0) break;

        let current = lastStr.substring(i + 1, lastStr.length);
        lastStr = lastStr.substring(0, i);

        // add to start of routes
        routes.unshift([current, lastStr])

    }

</script>

<style lang="scss">

    .breadcrumbs {

        .icon {

            padding-right: .5em;
            height: 1.5em;
            width: auto;

            // https://coduber.com/in-css-aling-images-and-text-in-same-line/
            float: left;

            // Necessary to recolor non-inline SVGs https://stackoverflow.com/a/53336754
            filter: var(--color-fg-filter);

        }

        // Leading spaces are trimmed in HTML so we can't put it there
        .slash::before {
            content: " ";
        }

    }

</style>

<!--
    @component
    A basic breadcrumbs element, showing the user where they are on the website
    by having each part of the path as a clickable link to return to.

    **Example**
    ```tsx
    <Breadcrumbs pathname={"/foo/bar/bat"}/>
    ```
-->
<span class="breadcrumbs">

    <a href="/" data-sveltekit-reload>
        <img class="icon" src="/assets/icons/home.svg" alt="Home">
    </a>

    {#each routes as route}

        <span class="slash">/ </span>

        <a href="{route[1] + "/" + route[0]}">{route[0]}</a>
        
    {/each}

</span>
