<script lang="ts">

    import { page } from "$app/stores";

    import TwoPane from "$lib/layouts/TwoPane.svelte"
    import Section from "$lib/layouts/Section.svelte";

    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
    import Markdown from "$lib/components/Markdown.svelte";
    import Title from "$lib/components/Title.svelte";

</script>

<style lang="scss">

    .content {

        min-height: 100vh;

        .tagline {
            opacity: 0;
            position: absolute;
            transform: translateY(-32px);
            animation: fadeTagline 1.25s ease-out 1.25s 1 forwards;
            color: var(--color-fjord);
        }

        @keyframes fadeTagline {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

    }

</style>

<svelte:head>

    <title>{$page.data.project.title} // justinschaaf.com</title>
    <meta name="description" property="og:description" content={$page.data.project.tagline}>

    <meta property="og:type" content="website">
    <meta property="og:title" content={$page.data.project.title}>
    <meta property="og:image" content={$page.data.project.art.img}>

</svelte:head>

<TwoPane background={$page.data.project.art.cover}
    backgroundAlt={"A showcase of ".concat($page.data.project.title, "'s best features.")}>

    <div class="content">

        <Section>

            <Breadcrumbs/>

            <Title text={$page.data.project.title}/>

            <em class="tagline">{$page.data.project.tagline}</em>

            <br>
    
            <Markdown>{$page.data.project.desc_content}</Markdown>
    
        </Section>

    </div>

</TwoPane>
