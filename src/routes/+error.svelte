<script lang="ts">

    //import { dev } from "$app/environment";
    //import { page } from "$app/stores";
    //import Section from "$lib/layouts/Section.svelte";

    import Banner from "$lib/layouts/Banner.svelte";
    import Title from "$lib/components/Title.svelte";

</script>

<style lang="scss">

    .bannerbox {

        min-width: 240px;
        max-width: 720px;
        height: 100vh;

        color: var(--color-light);

        margin: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;

        .titlebox {

            height: 50%;
            padding: 0 var(--padding-large);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            * {
                margin: 0;
            }

        }

        button {
            margin: 8px auto auto auto;
            color: var(--color-dark);
            background-color: var(--color-light);
        }

        button:hover {
            color: var(--color-light);
            background-color: var(--color-dark);
        }

    }

</style>

<Banner background="/assets/images/404_banner.webp" backgroundPosition="top" tinted>

    <div class="bannerbox">

        <div class="titlebox">
            <Title>Sorry, all we found here was a barren desert...</Title>
        </div>

        <a href="/"><button>Go home?</button></a>

    </div>

</Banner>

<!-- Stack Traces are no longer added to errors https://kit.svelte.dev/docs/errors#unexpected-errors -->

<!--{#if dev}

    <Section>
        <h1>{$page.status}</h1>
        <pre>{$page.error?.message}</pre>
    </Section>

{/if}-->
