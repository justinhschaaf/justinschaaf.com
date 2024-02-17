<script lang="ts">

    import type { PageData } from "./$types";
    import { ContentLoader } from '$lib/content';

    import AsciiStack from "$lib/components/AsciiStack.svelte";
    import Banner from "$lib/components/Banner.svelte";
    import Nav from "$lib/components/Nav.svelte";
    import Section from "$lib/components/Section.svelte";
    import Title from "$lib/components/Title.svelte";
    import Typed from "$lib/components/Typed.svelte";

    // This variable has to be named data, apparently because it's a property
    // https://kit.svelte.dev/docs/load#page-data
    // TODO move to layout? everything needs it...
    export let data: PageData;

</script>

<style lang="scss">

    .titlebox {

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

    .projects {

        width: 100vw;
        display: grid;

        // https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
        grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));

        .project {
            
            width: 100%;
            color: var(--color-light);

            font-size: 2em;
            text-align: center;
            transition: var(--transition);

        }

        .project:hover {
            color: var(--color-dark);
        }

    }

</style>

<Banner background="assets/images/home_banner.webp">

    <div class="titlebox">

        <!-- logo-holder is needed so the logo doesn't shift for multiline splashes -->
        <div class="logo-holder">
            <img class="logo" src="assets/logos/js-fullname-light.svg" alt="Justin Schaaf">
        </div>
        
        <!-- @html makes sure the HTML applies instead of showing in plaintext -->
        <span class="splash">
            <Typed>{@html ContentLoader.selectSplash(data.splashes)}</Typed>
        </span>

    </div>

</Banner>

<Nav></Nav>

<Section anchor="about">

    <Title>Hello, and welcome...</Title>

    <p>
        This website has been around since 2011; my mom and I first set it up to
        support  a family friend who runs a web design agency. It's taken on 
        various forms throughout the years, starting off on website builders
        whose styles were a reflection of the times until I eventually figured
        out how to make a (half) decent website from scratch.
    </p>

    <p>
        Enough about the website, how about me? If you made it here, you already
        know my name. As for what I do with my life, I've got a laundry list of
        interests, including game design, graphic design, software engineering,
        IT, video production, photography, cooking, baking, eating, history,
        governance, golf, metals, metal, jazz, lofi, electronica, urban
        planning, interior design, architecture, writing, anime and manga, <!-- especially BL ( ͡° ͜ʖ ͡°) -->
        nuclear annihilation, and satire (not in that order).
    </p>

    <p>
        As you might be able to tell from that list, I might be a little quirky,
        so please sit back, grab a snack, and enjoy the show.
    </p>

</Section>

<Section anchor="projects" padding={ false }>

    <Title>Projects</Title>

</Section>

<section class="projects">

    <div class="project">

        <AsciiStack ascii="/assets/images/projects_llamasteeds_light.html" image="/assets/images/projects_llamasteeds.png">
            <h1>Llama Steeds</h1>
        </AsciiStack>

    </div>

    <div class="project">

        <AsciiStack ascii="/assets/images/projects_llamasteeds_light.html" image="/assets/images/projects_llamasteeds.png">
            <h1>Llama Steeds</h1>
        </AsciiStack>

    </div>

    <div class="project">

        <AsciiStack ascii="/assets/images/projects_llamasteeds_light.html" image="/assets/images/projects_llamasteeds.png">
            <h1>Llama Steeds</h1>
        </AsciiStack>

    </div>

    <div class="project">

        <AsciiStack ascii="/assets/images/projects_llamasteeds_light.html" image="/assets/images/projects_llamasteeds.png">
            <h1>Llama Steeds</h1>
        </AsciiStack>

    </div>

</section>
