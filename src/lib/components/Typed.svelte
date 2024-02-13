<script lang="ts">

    // Imports
    import { onMount } from "svelte";
    import Typed  from "typed.js";

    export let overrides: object = {};

    let id: string = "typed" + Math.trunc(Math.random() * 100000);

    // Typed Settings
    let options: object = {
        stringsElement: "#typed-input-" + id,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        showCursor: true,
        cursorChar: "_",
        loop: false,
        ...overrides // https://stackoverflow.com/a/171256
    };

    onMount(() => {
        let typed: Typed = new Typed("#typed-" + id, options);
    });

</script>


<style lang="scss">

    // Fixes the full text momentarily flashing 
    // on the screen before being processed
    .typed-input {
        opacity: 0;
    }

    // Customize the cursor to be more terminal-like
    // https://github.com/mattboldt/typed.js/blob/7f3b24705d6cce4df6537bc3e94539c4a70f85b3/src/initializer.js#L171-L188
    :global(.typed-cursor--blink) {
        animation: typedjsBlink 1.4s infinite !important;
        -webkit-animation: typedjsBlink 1.4s infinite !important;
    }

    @keyframes typedjsBlink {
        0% { opacity: 1; }
        49% { opacity: 1; }
        50% { opacity: 0.0; }
        99% { opacity: 0.0; }
    }

    @-webkit-keyframes typedjsBlink {
        0% { opacity: 1; }
        49% { opacity: 1; }
        50% { opacity: 0.0; }
        99% { opacity: 0.0; }
        100% { opacity: 1; }
    }

</style>

<div class="typed-input" id="typed-input-{id}">
    <span><slot></slot></span>
</div>

<span id="typed-{id}"></span>
