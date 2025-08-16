<script lang="ts">

    // The only thing I miss from Angular is the router
    // https://github.com/justinhschaaf/yamltobot.com/blob/master/src/app/app.component.html#L17-L39
    
    // I'll be honest the routerLinkActive behavior wasn't too hard to replicate
    // just inconvenient that I had to implement it myself at all

    import { page } from "$app/stores";

    // So we don't have to declare it every time, but can if we want to
    
    interface Props {
        /** 
     * The current route used for whicht tab is active. 
     * Uses the current path by default. 
     */
        currentRoute?: string;
    }

    let { currentRoute = $page.url.pathname }: Props = $props();

    // The order is inverted as to how it appears to the website to improve
    // style, see comment below
    let routes = $state([
        {
            name: "Blog",
            url: "/blog",
            active: false
        },
        {
            name: "Home",
            url: "/",
            active: false
        }
    ]);

    for (let i = 0; i < routes.length; i++) {

        if (currentRoute.startsWith(routes[i].url)) {
            routes[i].active = true;
            break;
        }

    }

</script>

<style lang="scss">

    .tabs {

        // Overlay the banner
        transform: translateY(-96px);
        margin: 0 0 -96px 0;
        height: 96px;

        // Stack the tabs right to left since the tab shadows overlaying left
        // to right is much nicer
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: flex-end;
        overflow: hidden;

        .tab {

            height: calc(var(--padding-large) - 6px);
            width: 30%;
            max-width: 240px;
            padding: var(--padding-small);

            color: var(--color-fg);
            background-color: var(--color-bg-accent-dark);
            text-decoration: none;
            box-shadow: var(--shadow);
            transition: var(--transition);

            display: flex;
            z-index: -1;

            h2 {
                margin: auto;
                text-align: center;
            }

        }

        .tab:hover {
            box-shadow: var(--shadow-hover);
            height: var(--padding-large);
        }

        .active {
            background-color: var(--color-bg);
            height: var(--padding-large);
            z-index: 1;
        }

        .active:hover {
            height: calc(var(--padding-large) + 4px);
        }

    }

    // https://developer.mozilla.org/en-US/docs/Web/CSS/::before
    .tabs:before {

        // Necessary to show up
        content: "";

        // Comically large but it's fine since we're clipped
        position: absolute;
        width: 500vw;
        height: 20vh;
        transform: translateX(50vw);

        // Make sure we appear above bg tabs but below current tab
        z-index: 0;

        // Use inset box shadow instead of putting a shadow on the main content
        box-shadow: inset var(--shadow);

        // Ignore hover
        // https://techstacker.com/css-remove-hover-pointer-events-none/#pointer-events-to-the-rescue
        pointer-events: none;

    }

</style>

<!--
    @component
    A tab-style navigation bar, with the active route being represented as a tab
    in the front and others cascading behind it.
    
    **Example**
    ```tsx
    <Nav/>
    ```
-->
<nav class="tabs">

    {#each routes as route}

        <a class="tab" class:active={route.active} href="{route.url}">
            <h2>{route.name}</h2>
        </a>
        
    {/each}

</nav>
