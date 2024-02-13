<script lang="ts">

    import Banner from "$lib/components/Banner.svelte";
    import Title from "$lib/components/Title.svelte";

</script>

<style lang="scss">

    .overlay {

        width: 100vw;
        margin: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;

        color: var(--color-light);
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

            .titlebox {

                height: 50%;
                padding: 0 var(--padding-large);
                display: flex;
                flex-direction: column;
                justify-content: flex-end;

                * {
                    margin: 0;
                }

            }

            button {
                margin: 8px auto auto auto;
                color: var(--color-dark);
                background-color: var(--color-light);
            }

            button:hover {
                color: var(--color-light);
                background-color: var(--color-dark);
            }

        }

    }

</style>

<Banner background="assets/images/404_banner.webp">

    <div class="overlay">

        <div class="content">

            <div class="titlebox">
                <Title>Sorry, all we found here was a barren desert...</Title>
            </div>

            <a href="/"><button>Go home?</button></a>

        </div>

    </div>

</Banner>

<!-- TODO bring back stack trace in dev env -->
