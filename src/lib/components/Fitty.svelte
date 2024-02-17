<!--
    https://medium.com/ellacard/automatic-text-resizing-in-javascript-html-947669bbddb6
    https://css-tricks.com/fitting-text-to-a-container/
    https://github.com/rikschennink/fitty
-->

<script lang="ts">

    import { afterUpdate } from "svelte";
    import fitty from "fitty";

    let fittyDiv: HTMLDivElement;

    afterUpdate(() => {
        fitty(fittyDiv, { 
            minSize: 1, 
            multiLine: false 
        });
    });

</script>

<div bind:this={ fittyDiv }>
    <slot></slot>
</div>
