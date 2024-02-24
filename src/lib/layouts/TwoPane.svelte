<script lang="ts">

    export let background: string;

</script>

<style lang="scss">

    .twopane {

        width: 100vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .pane {
            width: 100%;
            flex: 5 1 500px;
        }

        .imgpane {

            min-height: 240px;
            flex: 3 1 300px;

            img {

                position: fixed;
                z-index: -1;

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
            background-color: var(--color-light);
        }

    }

</style>

<div class="twopane">

    <div class="pane imgpane">
        <img src={background}>
    </div>

    <div class="pane contentpane">
        <slot></slot>
    </div>

</div>
