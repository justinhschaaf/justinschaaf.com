<script lang="ts">

    export let anchor: string = "";
    export let padding: boolean = true;

</script>

<style lang="scss">

    section {

        // WAI suggests line should be ~80 characters long. 800 is it on desktop
        // As an example these two lines are 80 characters long including indent
        
        // https://www.w3.org/WAI/tutorials/page-structure/styling/#line-length
        min-width: 320px;
        max-width: 800px;
        margin: auto;

    }

    .padded {
        padding: var(--padding-large);
    }

</style>

<section id={ anchor } class:padded={ padding }>
    <slot></slot>
</section>
