<script lang="ts">

    import { afterUpdate } from "svelte";
    import Typed  from "typed.js";

    export let overrides: object = {};
    export let text: string; // of all the shit that's reactive in Svelte, <slot> isn't one of them...

    let typedElement: HTMLSpanElement;
    let typed: Typed | undefined = undefined;
    let options: object;

    afterUpdate(() => {
        
        if (typed != undefined) typed.destroy();

        // Typed Settings
        options = {
            strings: [text],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            showCursor: true,
            cursorChar: "_",
            loop: false,
            ...overrides // https://stackoverflow.com/a/171256
        };

        typed = new Typed(typedElement, options);

    });
    
    // TODO only start upon being seen

</script>

<style lang="scss">

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

<span bind:this={typedElement} class="typed"></span>
