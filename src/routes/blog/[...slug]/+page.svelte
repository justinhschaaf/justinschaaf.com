<script lang="ts">

    import { page } from "$app/stores";
    import Markdown from "$lib/components/Markdown.svelte";
    import PubDate from "$lib/components/PubDate.svelte";

    let created: number = $page.data.post.data.created;
    let updated: number = ("updated" in $page.data.post.data) ? $page.data.post.data.updated : -1;
    
</script>

<style lang="scss">

    .hidden-text {
        color: var(--color-grey);
    }

</style>

<svelte:head>

    <title>{$page.data.post.data.title} // justinschaaf.com</title>
    <meta name="description" property="og:description" content={$page.data.post.data.desc}>

    <meta property="og:type" content="article">
    <meta property="article:published_time" content={new Date(created * 1000).toISOString()}>

    {#if updated > -1}
        <meta property="article:modified_time" content={new Date(updated * 1000).toISOString()}>
    {/if}

</svelte:head>

{#if $page.data.post.data.hidden}

    <em class="hidden-text">
        Note: this post is hidden and difficult to reach. You're special though, so you can still read it.
    </em>

    <hr><br>

{/if}

<Markdown>{$page.data.post.content}</Markdown>

<br><hr>

<PubDate {created} {updated}/>
