<script lang="ts">

    import { page } from "$app/stores";

    import Banner from "$lib/layouts/Banner.svelte";
    import Section from "$lib/layouts/Section.svelte";

    import Nav from "$lib/components/Nav.svelte";
    import Title from "$lib/components/Title.svelte";

    let background: string;
    let title: string;
    let post = undefined;

    // All of this needs to be reactive because the layout usually doesn't
    // update when the page changes
    $: {

        post = $page.data.post;
        background = "/assets/images/blog_banner.webp";
        title = "Ramblings";
    
        // Set the post title and cover
        if (post != undefined) {

            title = post.data.title;

            if ("cover" in post.data) {
                background = post.data.cover;
            }

        }

    }

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

<Nav></Nav>

<Section>
    <slot></slot>
</Section>
