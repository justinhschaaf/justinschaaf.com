<script lang="ts">

    /** A name for this section to set as the element's id */
    export let anchor: string = "";

    /** Whether to enable top/bottom padding */
    export let padding: boolean = true;

</script>

<style lang="scss">

    section {

        // WAI suggests line should be ~80 characters long. 800 is it on desktop
        // As an example these two lines are 80 characters long including indent
        
        // https://www.w3.org/WAI/tutorials/page-structure/styling/#line-length
        min-width: 300px;
        max-width: 800px;
        margin: auto;
        padding: 0 var(--padding-large);

    }

    .padded {
        padding: var(--padding-large);
    }

</style>

<!--
    @component
    Automatically aligns slot content to be centered in the page and to have a
    maximum width of 800px to avoid lines of text that are uncomfortably wide
    to read. Has 48px padding around all sides of the inner content by default,
    which can be toggled for the top and bottom with the **padded** property.

    **Example**
    ```tsx
    <Section anchor="welcome">

        <h1>Why, hello there!</h1>

        <p>Welcome to my website!</p>

    </Section>
    ```
-->
<section id={anchor} class:padded={padding}>
    <slot></slot>
</section>
