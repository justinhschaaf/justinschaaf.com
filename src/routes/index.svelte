<script lang="ts">

	// Components
	import Banner from "../components/Banner.svelte";
	import Entries from "../components/Entries.svelte";
	import Typed from "../components/Typed.svelte";

	import { ContentLoader } from "../content";
	
	// Everything is loaded later because Svelte wants it loaded like that for some reason
	// Promise is created here for clarity's sake
	export let cp : Promise<Content> = ContentLoader.load("https://content.justinschaaf.com/common/config/website.json");

</script>

<style lang="scss">

	.title {

		width: 66%;
		min-width: 240px;
		max-width: 512px;
		margin: auto;

		display: flex;
		flex-direction: column;

		.logo {
			margin: auto;
			max-width: 360px;
		}

		.splash {

			width: 100%;
			margin: 8px auto auto auto;

			text-align: center;
			color: #ffff55;
			font-size: 1.5em;

		}

	}

	.socialicons {

		width: 100%;
		max-width: 512px;
		margin: auto;

		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;

		.social {

			width: 48px;
			height: 48px;
			margin: auto;

			display: flex;
			flex-direction: column;

			transition: 200ms ease-in;

			img {

				width: 36px;
				margin: auto;

			}

		}

		.social:hover {
			filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.25));
		}

	}

	.entries {

		width: 100%;

		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;

		background-color: #111111;
		color: #ffffff;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);

		.entries-inner {

			width: 90%;
			margin: 2vh auto;

			display: flex;
			flex-direction: row;
			flex-wrap: wrap;

			.entry-section {

				width: 25%;
				min-width: 220px;
				max-width: 420px;
				margin: 0 auto;

			}

		}

	}

</style>

<svelte:head>
	<title>Justin Schaaf // justinschaaf.com</title>
</svelte:head>

<!-- 
	Stupid problems require stupid solutions. 
	Why isn't there a smarter way to do this? 
	Before, it would fail to update whenever I updated the JSON.
	Without this, it constantly returns Error 500 because the server 
	wants to render the page without having the JSON file preloaded.
-->
{#await cp}

	<!-- TODO have blurred background image here while website is loading instead of white page -->
	<!-- nevermind the difference sticking something here is negligible, don't bother -->


{:then c}

	<Banner background="assets/images/home_banner.jpg">

		<div class="title">

			<img class="logo" src="assets/logos/js-fullname-light.svg" alt="Justin Schaaf">
			<span class="splash"><Typed string={ContentLoader.selectSplash(c.splashes)}></Typed></span>

		</div>

		<div class="socialicons">

			{#each Object.keys(c.entries["social"]) as socialKey}

				{#if c.entries["social"][socialKey].featured && !c.entries["social"][socialKey].hidden}

					<a class="social" target="_blank" href={c.entries["social"][socialKey].url}>
						<img src={c.entries["social"][socialKey].icon} alt={c.entries["social"][socialKey].name}>
					</a>

				{/if}

			{/each}

		</div>

	</Banner>

	<div class="entries">

		<div class="entries-inner">

			{#each Object.keys(c.entries) as key}

				<section class="entry-section">
					<Entries name={key} entries={c.entries[key]}></Entries>
				</section>

			{/each}

		</div>

	</div>

{/await}
