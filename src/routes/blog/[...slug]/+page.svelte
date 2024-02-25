<script lang="ts">

    import { page } from "$app/stores";
    import Markdown from "$lib/components/Markdown.svelte";
    
    /*
    Post Front-Matter Options:

    title: string - The formatted title of the post.
    desc?: string - A brief introduction to the post. A hook to get your
        attention. Used as a preview when listing all posts and for SEO.
    created: number - The timestamp the post was first uploaded (roughly), in
        Unix epoch seconds.
    updated?: number - The last time the post was updated (roughly), in Unix
        epoch seconds.
    cover?: string - A link to the cover image for this post. Also to be used in
        webpage previews
    hidden?: boolean - If true, this blog post will still be accessible, but
        won't be listed on the blogs page
    disabled?: boolean - If true, this blog post will be inaccessible, returning
        error 403
    */
    
</script>

<Markdown>{$page.data.post.content}</Markdown>

<!-- TODO add create and update date -->
