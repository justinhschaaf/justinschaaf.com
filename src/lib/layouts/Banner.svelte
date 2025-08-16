<script lang="ts">

    

    

    
    interface Props {
        /** The big background image */
        background: string;
        /** How the background image should be aligned */
        backgroundPosition?: string;
        /** Whether to darken and blur the background */
        tinted?: boolean;
        children?: import('svelte').Snippet;
    }

    let {
        background,
        backgroundPosition = "center",
        tinted = false,
        children
    }: Props = $props();

</script>

<style lang="scss">

    .banner {

        margin: 0;
        width: 100%;

        display: flex;

        .banner-content {

            margin: auto;
            position: relative;
            
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;

        }

        background-attachment: fixed;
        background-size: cover;

    }

    .tinted {
        // Necessary to make overflow work
        position: relative;
        overflow: hidden;
    }

    .tinted::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #11111177;
        backdrop-filter: blur(4px);
    }

</style>

<!--
    @component
    Implements a hero image with slot content placed in the center. It takes up
    the full width of the viewport, but the height is determined by the content
    inside for flexibility. When the content is difficult to see, enable the
    **tinted** parameter to blur and darken the background and make the white
    text stand out more.

    **Example HTML**
    ```tsx
    <Banner background="/assets/images/blog_banner.webp" backgroundPosition="bottom" tinted>

        <div class="bannerbox">

            <div class="titlebox">
                <Title text="Ramblings..."/>
            </div>

        </div>

    </Banner>
    ```

    **Example CSS**
    ```scss
    .bannerbox {

        min-width: 240px;
        max-width: 720px;
        height: 50vh;

        color: var(--color-light);

        margin: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;

        .titlebox {
            padding: var(--padding-large);
            margin: auto;
        }

    }
    ```
-->
<section class="banner" class:tinted style="background-image: url({background}); background-position: {backgroundPosition};">

    <div class="banner-content">
        {@render children?.()}
    </div>
    
</section>

