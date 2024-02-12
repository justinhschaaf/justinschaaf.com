
<script lang="ts">

    import Banner from "$lib/components/Banner.svelte";
    import Typed from "$lib/components/Typed.svelte";

    let h1TypedOverride: object = { showCursor: false };

</script>

<style lang="scss">

    .overlay {

        width: 100vw;
        margin: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;

        color: #ffffff;
        background-color: #11111177;
        backdrop-filter: blur(4px);

        .content {

            min-width: 240px;
            max-width: 720px;
            height: 100vh;

            margin: auto;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;

            .title {

                height: 50%;
                padding: 48px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;

                h1 {
                    text-align: left;
                    font-size: 3em;
                    margin: 0;
                }

            }

            button {
                margin: 8px auto auto auto;
                color: #111111;
                background-color: #ffffff;
            }

            button:hover {
                color: #ffffff;
                background-color: #111111;
            }

        }

    }

</style>

<Banner background="assets/images/404_banner.webp">

    <div class="overlay">

        <div class="content">

            <div class="title">
                <Typed overrides={ h1TypedOverride }><h1>Sorry, all we found here was a barren desert...</h1></Typed>
            </div>

            <a href="/"><button>Go home?</button></a>

        </div>

    </div>

</Banner>

<!-- TODO bring back stack trace in dev env -->
