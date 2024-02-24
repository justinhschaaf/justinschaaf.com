<script lang="ts">

    export let background: string;
    export let backgroundPosition: string = "center";
    export let tinted: boolean = false;

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

<section class="banner" class:tinted style="background-image: url({background}); background-position: {backgroundPosition};">

    <div class="banner-content">
        <slot></slot>
    </div>
    
</section>

