<script lang="ts">

    export let anchor: string = "";

</script>

<style lang="scss">

    section {

        padding: var(--padding-large);
        margin: auto;

        // WAI suggests line should be ~80 characters long. 800 is it on desktop
        // As an example these two lines are 80 characters long including indent
        
        // https://www.w3.org/WAI/tutorials/page-structure/styling/#line-length
        min-width: 320px;
        max-width: 800px;

    }

</style>

<section id={ anchor }>
    <slot></slot>
</section>
