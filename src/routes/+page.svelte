
<script lang="ts">

    import type { PageData } from "./$types";
    import { ContentLoader } from '$lib/content';

    import Banner from "$lib/components/Banner.svelte";
    import Typed from "$lib/components/Typed.svelte";

    // This variable has to be named data, apparently because it's a property
    // https://kit.svelte.dev/docs/load#page-data
    export let data: PageData;

</script>

<style lang="scss">

    .title {

        width: 50vw;
        min-width: 240px;
        max-width: 512px;
        height: 100vh;
        margin: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;

        .logo-holder {

            height: 50%;

            display: flex;
            flex-direction: column;

            .logo {
                margin: auto auto 16px auto;
                max-width: 360px;
            }

        }

        .splash {

            width: 100%;
            margin: 8px auto auto auto;

            text-align: center;
            color: #ffff55;
            font-size: 1.5em;

        }

    }

</style>

<Banner background="assets/images/home_banner.webp">

    <div class="title">

        <!-- logo-holder is needed so the logo doesn't shift for multiline splashes -->
        <div class="logo-holder">
            <img class="logo" src="assets/logos/js-fullname-light.svg" alt="Justin Schaaf">
        </div>
        
        <!-- TODO this renders text when html is passed to it -->
        <span class="splash"><Typed>{ContentLoader.selectSplash(data.splashes)}</Typed></span>

    </div>

</Banner>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
