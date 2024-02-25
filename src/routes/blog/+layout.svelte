<script lang="ts">

    import { page } from "$app/stores";

    import Banner from "$lib/layouts/Banner.svelte";
    import Section from "$lib/layouts/Section.svelte";

    import Nav from "$lib/components/Nav.svelte";
    import Title from "$lib/components/Title.svelte";

    let background: string = "/assets/images/blog_banner.webp";
    let title: string = "Ramblings";
    let post = $page.data.post;
    
    // Set the post title and cover
    if (post != undefined) {

        title = post.data.title;

        if ("cover" in post.data) {
            background = post.data.cover;
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

<Banner background={background} backgroundPosition="bottom" tinted>

    <div class="bannerbox">

        <div class="titlebox">
            <Title>{title}</Title>
        </div>

    </div>

</Banner>

<Nav></Nav>

<Section>
    <slot></slot>
</Section>
