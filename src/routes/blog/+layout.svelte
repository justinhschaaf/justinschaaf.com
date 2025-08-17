<script lang="ts">
    import { page } from "$app/state";

    import Banner from "$lib/layouts/Banner.svelte";
    import Section from "$lib/layouts/Section.svelte";

    import Nav from "$lib/components/Nav.svelte";
    import Title from "$lib/components/Title.svelte";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();

    // The banner and nav to use. We're using a layout for this to avoid
    // repeating the same components and styles since banner and nav would be
    // on all blog pages
    let background: string = $state();
    let title: string = $state();
    let post = $state(undefined);

    // All of this needs to be reactive because the layout usually doesn't
    // update when the page changes
    $effect.pre(() => {

        post = page.data.post;
        background = "/assets/images/blog_banner.webp";
        title = "Ramblings";
    
        // If we have a post, use its title and cover
        if (post != undefined) {

            title = post.data.title;

            if ("cover" in post.data) {
                background = post.data.cover;
            }

        }

    });

</script>

<style lang="scss">

    .bannerbox {

        min-width: 240px;
        max-width: 720px;
        height: 50vh;

        color: var(--color-light);

        margin: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;

        .titlebox {
            padding: var(--padding-large);
            margin: auto;
        }

    }

</style>

<svelte:head>

    <meta property="og:title" content={title}>
    <meta property="og:image" content={background}>

</svelte:head>

<Banner {background} backgroundPosition="bottom" tinted>

    <div class="bannerbox">

        <div class="titlebox">
            <Title text={title}/>
        </div>

    </div>

</Banner>

<Nav/>

<Section>
    {@render children?.()}
</Section>
