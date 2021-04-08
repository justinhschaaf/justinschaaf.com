<style lang="scss">

	/*
	 * Reference: https://github.com/sveltejs/sapper/issues/562#issuecomment-463542668
	 * 
	 * So apparently removes styles it considers "unnecessary" and does not recognize the
	 * nested header tags in this component's subcomponents with no way I know of to disable it. 
	 * :global() forces these styles to be applied globally, but it's still stupid I have to
	 * include such a tag instead of these styles being applied to all children elements. It's
	 * also stupid that I can't just wrap all the styles in a :global() {}-like tag with SCSS,
	 * but at least it's better than having to import a SCSS file into every single component.
	 */

	:global(*) {
		font-family: 'Overpass Mono', 'Segoe UI Emoji', sans-serif;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Major Mono Display', 'Segoe UI Emoji', monospace;
	}

	:global(a) {
		color: #777777;
	}

	:global(img) {
		width: 100%;
	}

</style>

<main>
	<slot></slot>
</main>
