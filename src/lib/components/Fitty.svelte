<!-- @migration-task Error while migrating Svelte code: Can't migrate code with afterUpdate. Please migrate by hand. -->
<!--
    https://medium.com/ellacard/automatic-text-resizing-in-javascript-html-947669bbddb6
    https://css-tricks.com/fitting-text-to-a-container/
    https://github.com/rikschennink/fitty
-->

<script lang="ts">

    import fitty from "fitty";

    interface Props {
        /** The minimum possible font size, in px */
        minSize: number;

        /** The maximum possible font size, in px */
        maxSize: number;

        /**
         * Whether to let lines wrap if the minimum size has been reached and the
         * line doesn't fit
         */
        multiLine: boolean;

        children?: import('svelte').Snippet;
    }

    let {minSize = 16, maxSize = 512, multiLine = true, children}: Props = $props();

    let fittyDiv: HTMLDivElement;

    $effect(() => {
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
    {@render children?.()}
</div>
