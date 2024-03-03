<script lang="ts">

    import { page } from "$app/stores";
    import { darkTheme } from "$lib/theme"

    import Banner from "$lib/layouts/Banner.svelte";
    import Section from "$lib/layouts/Section.svelte";

    import AsciiStack from "$lib/components/AsciiStack.svelte";
    import Fitty from "$lib/components/Fitty.svelte";
    import Nav from "$lib/components/Nav.svelte";
    import Title from "$lib/components/Title.svelte";
    import Typed from "$lib/components/Typed.svelte";

    let projectKeys: string[] = Object.keys($page.data.projects);

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
            color: var(--color-splash);
            font-size: 1.5em;

        }

    }

    .projects {

        width: 100vw;
        display: grid;

        // https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
        grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));

        .project {
            
            width: 100%;
            color: var(--color-light);

            font-size: 2em;
            text-align: center;
            transition: var(--transition);

        }

        .project:hover {
            color: var(--color-fg);
        }

    }

</style>

<svelte:head>

    <title>The Homepage of Justin Schaaf // justinschaaf.com</title>
    <meta name="description" property="og:description" content="A wonderful idiot raised by the internet. Online since 2011.">
    <!-- yes, the description and og:description can be the same meta tag https://stackoverflow.com/a/6204025 -->

    <meta property="og:type" content="website">
    <meta property="og:title" content="The Homepage of Justin Schaaf">
    <meta property="og:image" content="/assets/images/home_banner.webp">

</svelte:head>

<Banner background="/assets/images/home_banner.webp" backgroundPosition="top">

    <div class="titlebox">

        <!-- logo-holder is needed so the logo doesn't shift for multiline splashes -->
        <div class="logo-holder">
            <img class="logo" src="/assets/logos/js-fullname-light.svg" alt="Justin Schaaf">
        </div>
        
        <em class="splash">
            <Typed strings={$page.data.splash}/>
        </em>

    </div>

</Banner>

<Nav/>

<Section anchor="about">

    <Title text="Hello, and welcome"/>

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

<Section anchor="projects" padding={false}>

    <Title text="Projects"/>

</Section>

<section class="projects">

    {#each projectKeys as key}

        {@const project = $page.data.projects[key]}
        {@const ascii = $darkTheme ? project.art.ascii_dark : project.art.ascii_light}

        {#if !project.disabled}

            <a class="project" href="/projects/{key}" target="_self">
                <AsciiStack ascii={ascii} image={project.art.img}>
                    <Fitty minSize={24} maxSize={40}><h1>{@html project.name }</h1></Fitty>
                </AsciiStack>
            </a>

        {/if}

    {/each}

</section>
