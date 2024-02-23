<script lang="ts">

    import type { PageData } from "./$types";

    import TwoPane from "$lib/layouts/TwoPane.svelte"
    import Section from "$lib/layouts/Section.svelte";

    import Markdown from "$lib/components/Markdown.svelte";
    import Title from "$lib/components/Title.svelte";

    export let data: PageData;

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

<TwoPane background={data.project.art.cover}>

    <div class="content">

        <Section>

            <!-- TODO breadcrumbs -->

            <span>Home / bread / crumbs</span>

            <Title>{data.project.title}</Title>

            <em class="tagline">{data.project.tagline}</em>

            <br>
    
            <Markdown>{data.project.desc_content}</Markdown>
    
        </Section>

    </div>

</TwoPane>
