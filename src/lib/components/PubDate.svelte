<script lang="ts">

    /** Timestamp for when this post was created, in Unix Epoch seconds */
    export let created: number;

    /** Timestamp for when this post was last updated, in Unix Epoch seconds */
    export let updated: number = -1;

    /** Whether to include the word "Published" before listing the dates */
    export let includePublishedText: boolean = true;

    let createDate: Date;
    let upDate: Date | undefined;

    $: {
        createDate = new Date(created * 1000);
        upDate = (updated > -1) 
            ? new Date(updated * 1000)
            : undefined;
    }

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
