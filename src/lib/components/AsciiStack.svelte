<script lang="ts">

    import { afterUpdate } from "svelte";

    import Fitty from "./Fitty.svelte";

    /** String URL to the HTML for the ASCII image */
    export let ascii: string;

    /** String URL to the non-ASCII image */
    export let image: string;

    let ansi: string;

    afterUpdate(() => {

        fetch(ascii).then(res => {
            if (res.ok) return res.text();
        }).then (res => {
            ansi = res + "";
        });

    });

</script>

<style lang="scss">

    // https://stackoverflow.com/questions/2027657/overlapping-elements-in-css
    // do absolute on actual content
    // put image as background-image

    .ascii-sandwich {

        position: relative;
        background-size: cover;
        background-position: center;

        .stack-ansi {

            //position: absolute; // no work with fitty
            z-index: -1;
            opacity: 0;
            transition: var(--transition);

        }

        .stack-content {

            position: absolute;
            top: var(--padding-large);
            left: var(--padding-large);

            width: calc(100% - var(--padding-large) * 2);
            height: calc(100% - var(--padding-large) * 2);

            display: flex;
            flex-direction: column;
            justify-content: center;

        }

    }

    .ascii-sandwich:hover {

        .stack-ansi {
            opacity: 1;
            background-color: var(--color-bg);
        }

    }

    .ascii-sandwich:before {

        content: "";

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        
    }

</style>

<!--
    @component
    An image layered on top of an ASCII representation of itself, hiding the
    image and showing the ASCII on hover. You have to provide this element a
    width or it gets really unhappy.

    Contains a slot used for inner content, which has a padding equal to the
    --padding-large CSS variable

    **Example HTML**
    ```tsx
    <a class="project" href="/projects/llama-steeds" target="_self">
        <AsciiStack ascii="/assets/images/projects_llamasteeds_dark.html" 
            image="/assets/images/projects_llamasteeds.webp">
            <h1>Llama Steeds</h1>
        </AsciiStack>
    </a>
    ```

    **Example CSS**
    ```scss
    .project {
        width: 25vw;
        font-size: 2em;
        text-align: center;
    }
    ```
-->
<div class="ascii-sandwich" style="background-image: url({image});">

    <div class="stack-ansi">
        <Fitty minSize={1} multiLine={false}>{@html ansi}</Fitty>
    </div>

    <div class="stack-content">

        <div class="stack-content-inner">

            <slot></slot>
            
        </div>

    </div>

</div>
