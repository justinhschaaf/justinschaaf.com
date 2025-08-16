<script lang="ts">

    import Typed from "$lib/components/Typed.svelte";

    
    interface Props {
        /** The text to display */
        text: string;
    }

    let { text }: Props = $props();

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

<!--
    @component
    Represents a large line of text with is typed on-screen upon being shown
    (using the Typed component internally). Useful for major section headers.

    **Example**
    ```tsx
    <Title text="Hello, and welcome"/>
    ```
-->
<div class="title-wrap">

    <h1 class="title">
        <Typed {text}/>
    </h1>

</div>
