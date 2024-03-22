<script lang="ts">

    import { page } from "$app/stores";
    import Markdown from "$lib/components/Markdown.svelte";
    import PubDate from "$lib/components/PubDate.svelte";

    // Determine the created and updated dates here
    let created: number = $page.data.post.data.created;
    let updated: number = ("updated" in $page.data.post.data) ? $page.data.post.data.updated : -1;
    
</script>

<!-- ***METADATAHHHH!!!!!*** -->
<svelte:head>

    <title>{$page.data.post.data.title} // justinschaaf.com</title>
    <meta name="description" content={$page.data.post.data.desc}>

    <meta property="og:type" content="article">
    <meta property="og:description" content={$page.data.post.data.desc}>
    <meta property="article:published_time" content={new Date(created * 1000).toISOString()}>

    {#if updated > -1}
        <meta property="article:modified_time" content={new Date(updated * 1000).toISOString()}>
    {/if}

</svelte:head>

<Markdown>
    
    <!-- Warnings if you're looking at a hidden or disabled post -->
    {#if $page.data.post.data.hidden}

    {"> [!IMPORTANT]\n"}
    {"> This post is hidden and difficult to reach. You're special though, so you can still read it.\n\n"}

    {/if}

    {#if $page.data.post.data.disabled}

    {"> [!CAUTION]\n"}
    {"> This post has been disabled. How the fuck did you get here?\n\n"}

    {/if}

    <!-- Actual post content -->
    {$page.data.post.content}

</Markdown>

<br><hr>

<PubDate {created} {updated}/>
