<script lang="ts">

    import { page } from "$app/stores";
    import type { GrayMatterFile } from "gray-matter";

    import Markdown from "$lib/components/Markdown.svelte";
    import PubDate from "$lib/components/PubDate.svelte";
    
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

{#each posts as post}

    {@const created = post.data.created}
    {@const updated = ("updated" in post.data) ? post.data.updated : -1}

    <div class="post">

        <!-- 
            I initially planned to have an image on the right side of each post, 
            but I like how it looks without it better 
        -->

        <PubDate {created} {updated} includePublishedText={false}/>

        <h1>{post.data.title}</h1>

        <Markdown>{post.data.desc}</Markdown>

        <a href={"blog".concat(post.data.slug)}>
            {$page.data.postLinkPrompts[Math.floor(Math.random() * $page.data.postLinkPrompts.length)]}
        </a>

    </div>

{/each}
