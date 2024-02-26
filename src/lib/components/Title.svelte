<script lang="ts">

    import Typed from "$lib/components/Typed.svelte";

    export let text: string;

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
        margin: 0;

        // https://developer.mozilla.org/en-US/docs/Web/CSS/clamp
        font-size: clamp(2em, 5vw, 3em);
        
    }
    
</style>

<div class="title-wrap">

    <h1 class="title">
        <Typed {text}/>
    </h1>

</div>
