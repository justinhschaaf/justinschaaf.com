<script lang="ts">

    import Typed from "$lib/components/Typed.svelte";

</script>

<style lang="scss">

    // Adding the title-wrap and fucking with the 
    // margins (and height) prevents content shift

    .title-wrap {
        min-height: 4em;
        margin: 40px 0;
    }

    .title {
        text-align: left;
        font-size: 3em;
        margin: 0;
    }
    
</style>

<div class="title-wrap">

    <h1 class="title">
        <Typed>
            <slot></slot>
        </Typed>
    </h1>

</div>
