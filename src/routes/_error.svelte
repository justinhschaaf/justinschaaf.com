<script lang="ts">

	import Banner from "../components/Banner.svelte";

	export let status: number;
	export let error: Error;

	const dev: boolean = process.env.NODE_ENV === "development";

</script>

<style lang="scss">

	* {
		color: #ffffff;
	}

	.title {

		margin: auto auto 0 auto;

		text-align: center;

		width: 66%;
		min-width: 240px;
		max-width: 420px;

		h1 {
			font-size: 2em;
		}

		a {
			font-size: 1.5em;
		}

	}

	.error {

		margin: auto;
		
		display: flex;
		flex-direction: column;
		
		.status {
			padding: 16px 0 0 0;
			text-align: center;
		}

		.message {
			padding: 0 0 16px 0;
			text-align: center;
		}

		.stack {

			padding: 16px;
			width: 100%;

			white-space: pre-wrap;

			backdrop-filter: blur(50px);

		}

	}

</style>

<svelte:head>
	<title>{status} // justinschaaf.com</title>
</svelte:head>

<Banner background="assets/images/404_banner.jpg">

	<div class="title">

		<h1>Sorry, all we found here was a barren desert...</h1>
		<a href="/">Go home?</a>

	</div>

	<div class="error">

		<h1 class="status">{status}</h1>

		<p class="message">{error.message}</p>

		{#if dev && error.stack}
			<pre class="stack">{error.stack}</pre>
		{/if}

	</div>

</Banner>
