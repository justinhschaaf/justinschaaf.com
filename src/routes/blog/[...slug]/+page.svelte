<script lang="ts">

    import { page } from "$app/stores";
    import Markdown from "$lib/components/Markdown.svelte";
    import PubDate from "$lib/components/PubDate.svelte";

    let created: number = $page.data.post.data.created;
    let updated: number = ("updated" in $page.data.post.data) ? $page.data.post.data.updated : -1;
    
</script>

<Markdown>{$page.data.post.content}</Markdown>

<br><hr>

<PubDate {created} {updated}/>
