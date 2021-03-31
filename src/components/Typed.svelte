<script lang="ts">

    // Imports
    import { onMount } from "svelte";
    import Typed  from "typed.js";

    // Properties
    export let string: string;

    // Typed Settings
    var options = {
        strings: [string],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        showCursor: true,
        cursorChar: "|",
        loop: false
    };

    onMount(() => {
        var typed: Typed = new Typed(".typed", options);
    });

</script>

<span class="typed"></span>
