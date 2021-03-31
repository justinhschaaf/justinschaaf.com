
<script lang="ts">

    export let background: string;

</script>

<style lang="scss">

    .banner {

        margin: 0;
        width: 100%;
        height: 100vh;

        display: flex;

        .content {

            width: 50%;
            min-width: 320px;

            height: 50%;
            min-height: 256px;

            margin: auto;
            position: relative;
            
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;

        }

        background-size: cover;

    }

</style>

<section class="banner" style="background-image: url({background});">

    <div class="content">

        <slot></slot>

    </div>

</section>
