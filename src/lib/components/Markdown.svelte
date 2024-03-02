<script lang="ts">

    import { afterUpdate } from "svelte";
    import { marked } from "$lib/marked";

    export let src: string | undefined = undefined;
    export let content: string = "";

    let inputDiv: HTMLDivElement;
    let mdDiv: HTMLDivElement;

    if (src != undefined) {

        fetch(src).then(res => {
            if (res.ok) return res.text();
        }).then (res => {
            content = res + "";
        });

    }

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

    // Alert Formatting https://github.com/bent10/marked-extensions/tree/main/packages/alert
    :global(.markdown-alert) {
        padding: 4px 0 4px 2em; // 2em ~ 4 characters wide
        border-left: var(--padding-small) solid var(--color-alert);
    }

    :global(.markdown-alert-title) {
        color: var(--color-alert);
        text-transform: uppercase;
        font-style: italic;
        font-weight: bolder;
    }

    :global(.markdown-alert-title svg) {
        fill: var(--color-alert);
        padding-right: var(--padding-small);
    }

    // Alert Colors
    :global(.markdown-alert-note) {
        --color-alert: var(--color-ocean);
    }

    :global(.markdown-alert-tip) {
        --color-alert: var(--color-jalapeno);
    }

    :global(.markdown-alert-important) {
        --color-alert: var(--color-eggplant);
    }

    :global(.markdown-alert-warning) {
        --color-alert: var(--color-sunflower);
    }

    :global(.markdown-alert-caution) {
        --color-alert: var(--color-cinnabar);
    }

</style>

<div bind:this={inputDiv} class="md-input">
    <slot>{content}</slot>
</div>

<div bind:this={mdDiv}></div>
