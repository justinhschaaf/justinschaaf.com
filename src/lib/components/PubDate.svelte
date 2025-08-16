<script lang="ts">
    import { run } from 'svelte/legacy';


    

    

    
    interface Props {
        /** Timestamp for when this post was created, in Unix Epoch seconds */
        created: number;
        /** Timestamp for when this post was last updated, in Unix Epoch seconds */
        updated?: number;
        /** Whether to include the word "Published" before listing the dates */
        includePublishedText?: boolean;
    }

    let { created, updated = -1, includePublishedText = true }: Props = $props();

    let createDate: Date = $state();
    let upDate: Date | undefined = $state();

    run(() => {
        createDate = new Date(created * 1000);
        upDate = (updated > -1) 
            ? new Date(updated * 1000)
            : undefined;
    });

</script>

<!--
    @component
    Formats and displays the time a given piece of content was created, and
    includes when it was updated, if specified. The word "Published" at the
    start can be disabled with the **includedPublishedText** option.

    **Example**
    ```tsx
    <PubDate created={1469119560} updated={1708844400}/>
    ```
-->
<em>
    
    {#if includePublishedText}
        Published
    {/if}

    {createDate.toDateString()}

    {#if upDate != undefined}
        <b>// Updated {upDate.toDateString()}</b>
    {/if}

</em>
