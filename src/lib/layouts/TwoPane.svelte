<script lang="ts">

    /** The background image to display in the lefthand column */
    export let background: string;

    /** The alt text description of the background */
    export let backgroundAlt: string;

</script>

<style lang="scss">

    .twopane {

        width: 100vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .pane {
            width: 100%;
        }

        .imgpane {

            min-height: 240px;
            flex: 3 1 300px;

            img {
                position: fixed;
            }

            @media screen and (min-width: 500px) and (max-width: 799px) {
                
                img {
                    top: 25%;
                    transform: translateY(-50%);
                }

            }

            @media screen and (min-width: 800px) {
                
                img {

                    width: auto !important;
                    height: 100% !important;

                    // hallelujah
                    // https://www.kindacode.com/snippet/css-how-to-center-an-element-with-fixed-position/
                    // if your monitor is wide enough to break this and show a white bar on the left, fuck you, i'm not fixing it
                    left: calc(3/8 * 50%);
                    transform: translateX(-50%);

                }

            }

        }

        .contentpane {
            background-color: var(--color-bg);
            color: var(--color-fg);
            flex: 5 1 500px;
            z-index: 1;
        }

    }

</style>

<!--
    @component
    A layout with a large parallax image on the left and slot content on the
    right. The image is supposed to be 3/8ths of the screen, while the content
    is 5/8ths. On smaller displays, the image will wrap to appear above the
    content.

    **Example HTML**
    ```tsx
    <TwoPane background={$page.data.project.art.cover} backgroundAlt="A beautiful cover image!">

        <div class="content">

            <Section>

                <p>Hello!</p>
        
            </Section>

        </div>

    </TwoPane>
    ```

    **Example CSS**
    ```scss
    .content {
        min-height: 100vh;
    }
    ```
-->
<div class="twopane">

    <div class="pane imgpane">
        <!-- This img doesn't have alt text because it's effectively a background -->
        <img src={background} alt={backgroundAlt}>
    </div>

    <div class="pane contentpane">
        <slot></slot>
    </div>

</div>
