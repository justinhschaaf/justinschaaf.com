<script lang="ts">
    // TODO https://kit.svelte.dev/docs/types#public-types-page
    // The only thing I miss from Angular is the router
    // https://github.com/justinhschaaf/yamltobot.com/blob/master/src/app/app.component.html#L17-L39
</script>

<style lang="scss">

    .tabs {

        // Overlay the banner
        transform: translateY(-96px);
        padding: 0 var(--padding-large);
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

            height: 42px;
            width: 30%;
            max-width: 240px;
            padding: 8px;

            color: var(--color-dark);
            background-color: #eeeeee;
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
            height: 48px;
        }

        .active {
            background-color: #ffffff;
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

<!-- The order is deliberately inverted, see note above -->
<nav class="tabs">

    <div class="tab"><h2>Tools</h2></div>

    <div class="tab"><h2>Blog</h2></div>

    <a class="tab active" href="/">
        <h2>Home</h2>
    </a>

</nav>
