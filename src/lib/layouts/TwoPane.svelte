<script lang="ts">

    export let background: string;

</script>

<style lang="scss">

    .twopane {

        width: 100vw;
        display: grid;

        // TODO media queries to collapse into one column
        // probably a way to do so with just this, but it's a pain in the ass and i give up
        grid-template-columns: 3fr 5fr;

        .pane {
            width: 100%;
        }

        .imgpane {

            min-height: 240px;

            img {

                position: fixed;
                width: auto;
                height: 100%;
                z-index: -1;

                // hallelujah
                // https://www.kindacode.com/snippet/css-how-to-center-an-element-with-fixed-position/
                // if your monitor is wide enough to break this and show a white bar on the left, fuck you, i'm not fixing it
                left: calc(3/8 * 50%);
                transform: translateX(-50%);

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
