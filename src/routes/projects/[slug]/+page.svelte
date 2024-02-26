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
            color: var(--color-accent);
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

<TwoPane background={$page.data.project.art.cover}>

    <div class="content">

        <Section>

            <Breadcrumbs></Breadcrumbs>

            <Title text={$page.data.project.title}/>

            <em class="tagline">{$page.data.project.tagline}</em>

            <br>
    
            <Markdown>{$page.data.project.desc_content}</Markdown>
    
        </Section>

    </div>

</TwoPane>
