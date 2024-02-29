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

{#if $page.data.post.data.hidden}

    <em class="hidden-text">
        Note: this post is hidden and difficult to reach. You're special though, so you can still read it.
    </em>

    <hr><br>

{/if}

<Markdown>{$page.data.post.content}</Markdown>

<br><hr>

<PubDate {created} {updated}/>
