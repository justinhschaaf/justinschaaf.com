<script lang="ts">

    import { onMount, afterUpdate } from "svelte";
    import { marked } from "$lib/marked";

    export let src: string | undefined = undefined;
    export let content: string = "";

    let inputDiv: HTMLDivElement;
    let mdDiv: HTMLDivElement;

    onMount(() => {

        if (src != undefined) {

            fetch(src).then(res => {
                if (res.ok) return res.text();
            }).then (res => {
                content = res + "";
            });

        }

    });

    // If we try to render the Markdown in onMount after fetching from src, it
    // won't update because fetch takes a bit. Once fetch comes back with the
    // data, the assignment runs an update and therefore this
    afterUpdate(() => {
        mdDiv.innerHTML = marked.parse(inputDiv.innerText).toString();
    });

</script>

<style lang="scss">

    .md-input {
        display: none;
    }

</style>

<div bind:this={inputDiv} class="md-input">
    <slot>{content}</slot>
</div>

<div bind:this={mdDiv}></div>
