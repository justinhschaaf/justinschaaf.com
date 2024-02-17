<script lang="ts" context="module">

    // marked.js -- it's not the best, but it actually fucking works
    // I tried 2 different parsers before this that didn't even import
    import { Marked } from "marked";
    import markedAlert from "marked-alert";
    import markedFootnote from "marked-footnote";
    import { markedHighlight } from "marked-highlight";

    // Helpers
    import hljs from "highlight.js";

    const marked: Marked = new Marked(
        markedAlert(), 
        markedFootnote(), 
        markedHighlight({
            // Taken from https://github.com/markedjs/marked-highlight?tab=readme-ov-file#usage
            langPrefix: 'hljs language-',
            highlight(code, lang, info) {
                const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, { language }).value;
            }
        })
    );

</script>

<script lang="ts">

    import { onMount, afterUpdate } from "svelte";

    export let src: string = "";
    export let content: string = "";

    let inputDiv: HTMLDivElement;
    let mdDiv: HTMLDivElement;

    onMount(() => {

        if (src != null) {

            fetch(src).then(res => {
                console.log("a");
                if (res.ok) return res.text();
            }).then (res => {
                console.log("b");
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

<div bind:this={ inputDiv } class="md-input">
    <slot>{ content }</slot>
</div>

<div bind:this={ mdDiv }></div>
