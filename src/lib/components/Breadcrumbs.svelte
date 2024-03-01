<script lang="ts">

    import { page } from "$app/stores";

    export let pathname: string = $page.url.pathname;
    
    let routes: string[][] = [];

    let lastStr = pathname;
    let i;

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

<span class="breadcrumbs">

    <a href="/">
        <img class="icon" src="/assets/icons/home.svg" alt="Home">
    </a>

    {#each routes as route}

        <span class="slash">/ </span>

        <a href="{route[1] + "/" + route[0]}">{route[0]}</a>
        
    {/each}

</span>
