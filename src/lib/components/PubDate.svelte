<script lang="ts">

    export let created: number;
    export let updated: number = -1;
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

<em>
    
    {#if includePublishedText}
        Published
    {/if}

    {createDate.toDateString()}

    {#if upDate != undefined}
        <b>// Updated {upDate.toDateString()}</b>
    {/if}

</em>
