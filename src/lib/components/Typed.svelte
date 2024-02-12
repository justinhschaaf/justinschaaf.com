<script lang="ts">

    // Imports
    import { onMount } from "svelte";
    import Typed  from "typed.js";

    export let overrides: object = {};

    // Typed Settings
    let options: object = {
        stringsElement: ".typed-input",
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        showCursor: true,
        cursorChar: "|",
        loop: false,
        ...overrides // https://stackoverflow.com/a/171256
    };

    onMount(() => {
        let typed: Typed = new Typed(".typed", options);
    });

</script>


<style lang="scss">

    // Fixes the full text momentarily flashing 
    // on the screen before being processed
    .typed-input {
        display: none;
    }

</style>

<div class="typed-input">
    <span><slot></slot></span>
</div>

<span class="typed"></span>
