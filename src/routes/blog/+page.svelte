<script lang="ts">

    import { page } from "$app/stores";
    import type { GrayMatterFile } from "gray-matter";

    import PubDate from "$lib/components/PubDate.svelte";
    
    // Sort posts newest first
    let posts: GrayMatterFile<any>[] = $page.data.posts;
    posts.sort((a, b) => {
        return b.data.created - a.data.created;
    });
    
</script>

<style lang="scss">

    .post {

        display: flex;
        flex-direction: column;

        min-height: 240px;
        width: 100%;
        padding: var(--padding-large) 0;

    }

</style>

<svelte:head>

    <title>Blog // justinschaaf.com</title>
    <meta name="description" 
        property="og:description"
        content="The latest ramblings, opinions, and updates from Justin Schaaf's blog—featuring life, technology, and more.">

    <meta property="og:type" content="website">

</svelte:head>

{#each posts as post}

    {@const created = post.data.created}
    {@const updated = ("updated" in post.data) ? post.data.updated : -1}

    <!-- Make sure this post is allowed to exist -->
    {#if !post.data.hidden && !post.data.disabled}

        <div class="post">

            <!-- 
                I initially planned to have an image on the right side of each post, 
                but I like how it looks without it better 
            -->

            <PubDate {created} {updated} includePublishedText={false}/>

            <h1>{post.data.title}</h1>

            <!-- This used to be a Markdown renderer, but that's unnecessary nowadays -->
            <p>{post.data.desc}</p>

            <a href={"blog".concat(post.data.slug)}>
                {$page.data.postLinkPrompts[Math.floor(Math.random() * $page.data.postLinkPrompts.length)]}
            </a>

        </div>

    {/if}

{/each}
