<!--
    https://medium.com/ellacard/automatic-text-resizing-in-javascript-html-947669bbddb6
    https://css-tricks.com/fitting-text-to-a-container/
    https://github.com/rikschennink/fitty
-->

<script lang="ts">

    import { afterUpdate } from "svelte";
    import fitty from "fitty";

    /** The minimum possible font size, in px */
    export let minSize: number = 16;

    /** The maximum possible font size, in px */
    export let maxSize: number = 512;

    /** 
     * Whether to let lines wrap if the minimum size has been reached and the 
     * line doesn't fit 
     */
    export let multiLine: boolean = true;

    let fittyDiv: HTMLDivElement;

    afterUpdate(() => {
        fitty(fittyDiv, { 
            minSize: minSize, 
            maxSize: maxSize,
            multiLine: multiLine 
        });
    });

</script>

<!--
    @component
    Automatically resizes the text of the given slot content so one line fits
    the width of the container.

    **Example**
    ```tsx
    <Fitty minSize={24} maxSize={40}><h1>Llama Steeds</h1></Fitty>
    ```
-->
<div bind:this={fittyDiv}>
    <slot></slot>
</div>
