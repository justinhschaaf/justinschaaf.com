<script lang="ts">

    import Banner from "$lib/layouts/Banner.svelte";
    import Section from "$lib/layouts/Section.svelte";

    import Nav from "$lib/components/Nav.svelte";
    import Title from "$lib/components/Title.svelte";

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
            margin: auto;
        }

    }

</style>

<Banner background="/assets/images/blog_banner.webp" backgroundPosition="bottom" tinted>

    <div class="bannerbox">

        <div class="titlebox">
            <Title>Ramblings</Title>
        </div>

    </div>

</Banner>

<Nav></Nav>

<Section>
    Hi :3
</Section>
