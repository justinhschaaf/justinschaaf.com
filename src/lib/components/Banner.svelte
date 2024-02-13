
<script lang="ts">

    export let background: string;

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

</style>

<section class="banner" style="background-image: url({background});">

    <div class="banner-content">
        <slot></slot>
    </div>
    
</section>

