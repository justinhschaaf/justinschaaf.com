<script lang="ts">

    export let name: string;
    export let entries: {};

</script>

<style lang="scss">

    .entries {

        padding: 8px;

        display: flex;
        flex-direction: column;

        * {
            padding: 8px 0 8px 0;
        }

        .entry {
            transition: 200ms ease-in;
            text-decoration: none;
        }

        .entry:hover {
            text-decoration: underline;
        }

    }

</style>

<div class="entries">

    <h2 class="header">{name}</h2>

    {#each Object.keys(entries) as key}

        {#if !entries[key].hidden}

            <a class="entry" target="_blank" href={entries[key].url} title={entries[key].desc}>{entries[key].name}</a>

        {/if}

    {/each}

</div>
