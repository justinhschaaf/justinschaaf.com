<script lang="ts">

    import { dev } from "$app/environment";

    import type { SocialIcon } from "$lib/content";
    import { darkTheme } from "$lib/theme";

    

    // version info

    

    

    
    interface Props {
        /** An object containing the social icons to display */
        socials: {[index: string]: SocialIcon};
        /** The repository the website's code is stored in */
        repo?: string;
        /** The current branch the website is deployed from */
        ref?: string;
        /** The currently deployed commit version */
        sha?: string;
    }

    let {
        socials,
        repo = "justinhschaaf/justinschaaf.com",
        ref = "main",
        sha = "8675309"
    }: Props = $props();

    let socialKeys: string[] = (socials != null) ? Object.keys(socials) : [];


    function toggleTheme(event: MouseEvent) {
        $darkTheme = !$darkTheme;
    }

</script>

<style lang="scss">

    .foot {

        background-color: var(--color-darker);
        color: var(--color-light);
        box-shadow: var(--shadow);

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        // Makes sure it's on top of any fixed elements (*cough cough* two-pane image on project pages)
        position: sticky;
        z-index: 690 !important;

        .footcontent {

            min-width: 240px;
            padding: var(--padding-large);
            
            // Remove bottom padding so when it's stacked there's not excessive extra space
            // #cursedcsstricks
            padding-bottom: 0;

            display: flex;
            flex-direction: column;

            // Always something new to learn about flexbox https://stackoverflow.com/a/29503264
            flex: 1 1 240px;

            h2 {
                margin: 0 0 var(--padding-small) 0;
            }

            .socialbox {

                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;

                .social {

                    width: var(--padding-large);
                    height: var(--padding-large);;
                    margin: 0 var(--padding-small) 0 0;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    img {
                        width: calc(var(--padding-large) / 2);
                        color: #ffffff !important;
                    }

                }

            }

        }

        .footcontent-right {
            padding: var(--padding-large);
        }

        // magic value
        @media screen and (min-width: 816px) {
            .footcontent-right {
                align-items: flex-end;
                text-align: right;
            }
        }

    }

    .theme {

        position: relative;
        width: 48px;
        height: 96px;
        margin: 0 var(--padding-large);

        img {
            width: 48px;
        }

        .wire {
            position: absolute;
        }

        .bulb {
            all: unset; // Get rid of button styles
            position: absolute;
            top: 48px;
            z-index: 1;
        }

    }

    // magic value
    @media screen and (max-width: 479px) {
        .theme {
            // https://www.youtube.com/watch?v=cI5V_8RErzI
            // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items
            order: -1;
        }
    }

    .foothover {
        // !important is needed so it's not overriden by button
        transition: var(--transition) !important;
    }

    .foothover:hover {
        opacity: 0.8;
    }

</style>

<!--
    @component
    A flex-based footer implementation, with social icons on the left and the
    build version on the right. A light bulb to change the website theme is in
    the center. The footer has been optimized to collapse properly on mobile
    views.
    
    **Example**
    ```tsx
    <Footer socials={$page.data.socials}/>
    ```
-->
<footer class="foot">

    <div class="footcontent">

        <h2>Socials</h2>

        <div class="socialbox">

            {#each socialKeys as key}
                
                {#if !socials[key].disabled}

                    <a class="social foothover" href={socials[key].url} target="_blank">
                        
                        <img src={socials[key].icon} alt={socials[key].name}>

                    </a>

                {/if}

            {/each}

        </div>

    </div>

    <div class="theme">

        <svg class="wire" viewBox="0 0 48 58">
            <line x1="24" y1="0" x2="24" y2="58" stroke="#fff" stroke-width="2px"/>
        </svg>

        <!-- This has to be a button for accessibility -->
        <button onclick={toggleTheme} class="bulb foothover">
            <!-- That's Omori -->
            <img alt="A lightbulb used to change the website theme."
                src={$darkTheme ? "/assets/icons/theme_dark.svg" : "/assets/icons/theme_light.svg"} 
                title={$darkTheme 
                    ? "A broken lightbulb hangs from the ceiling. Do you want to replace it?"
                    : "A lightbulb hangs from the ceiling. Do you want to destroy it?"}>
        </button>

    </div>

    <div class="footcontent footcontent-right">

        <h2>Source</h2>

        <!-- 
            https://kit.svelte.dev/docs/modules#$env-dynamic-private 
            https://github.com/search?q=repo%3Aactions%2Fdeploy-pages+process.env&type=code
            https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables
            https://stackoverflow.com/questions/53648652/how-to-use-environment-variables-in-github-page
        -->

        <span>{repo}</span>

        <!-- Only show commit in production -->
        {#if dev}
            <span>Development Server</span>
        {:else}
            <span>{ref}@<a href="https://github.com/{repo}/tree/{sha}" target="_blank">{sha?.substring(0, 7)}</a></span>
        {/if}

    </div>
    
</footer>
