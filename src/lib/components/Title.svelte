<script lang="ts">

    import Typed from "$lib/components/Typed.svelte";

    let titleTypedOverride: object = { showCursor: false };

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

    <Typed overrides={ titleTypedOverride }>

        <h1 class="title">
            <slot></slot>
        </h1>
        
    </Typed>

</div>
