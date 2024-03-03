<script lang="ts">

    import { afterUpdate } from "svelte";
    import Typed  from "typed.js";

    /** Overrides on the default typed.js configuration */
    export let overrides: object = {};

    /** A single line of text to be displayed */
    export let text: string = ""; // of all the shit that's reactive in Svelte, <slot> isn't one of them...

    /** An array of strings to be shown, one after another. */
    export let strings: string[] = [text];

    let oldText = text;

    let typedElement: HTMLSpanElement;
    let typed: Typed | undefined = undefined;
    let options: object;
    let observer: IntersectionObserver;

    afterUpdate(() => {

        // check if the text input was changed and update [strings] accordingly
        // oldText gets set at creation, not every update, so that's why this works
        // we don't care if strings is updated because that works as intended
        if (oldText != text) {
            strings = [text];
            oldText = text;
        }
        
        if (typed != undefined) typed.destroy();
        if (observer != undefined) observer.disconnect();
        if (strings.length == 0) return; // having an empty array throws errors

        // Typed Settings
        options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            showCursor: true,
            cursorChar: "_",
            loop: false,
            ...overrides // https://stackoverflow.com/a/171256
        };
    
        // Only start typing when on screen
        // https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
        // https://stackoverflow.com/a/45618188
        observer = new IntersectionObserver((entries) => {
            if (entries[0].intersectionRatio == 1) {
                // If we don't create the typed element here and try to 
                // stop/start it instead, it spazzes out when it needs to delete
                typed = new Typed(typedElement, options);
                observer.disconnect();
            }
        });

        observer.observe(typedElement);

    });

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

<!--
    @component
    A line of text which is typed on-screen in real time upon being shown. If an
    array of strings is provided, typed.js will type each line and wait a second
    before deleting it and typing the next. This continues until the last item
    in the array is reached, as looping is disabled by default in our config.

    **Example**
    ```tsx
    <Typed strings={["The world's best mod", "You know it.", "You love it.", "Llama Steeds"]}/>
    ```
-->
<span bind:this={typedElement} class="typed"/>
