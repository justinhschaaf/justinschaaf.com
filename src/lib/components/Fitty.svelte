<!--
    https://medium.com/ellacard/automatic-text-resizing-in-javascript-html-947669bbddb6
    https://css-tricks.com/fitting-text-to-a-container/
    https://github.com/rikschennink/fitty
-->

<script lang="ts">

    import { afterUpdate } from "svelte";
    import fitty from "fitty";

    export let minSize: number = 16;
    export let maxSize: number = 512;
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

<div bind:this={fittyDiv}>
    <slot></slot>
</div>
