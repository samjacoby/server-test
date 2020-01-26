
<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Website</title>
</svelte:head>

<script context="module">
	// the (optional) preload function takes a
	// `{ path, params, query }` object and turns it into
	// the data we need to render the page

	export async function preload(page, session) {
		// the `slug` parameter is available because this file
		// is called [slug].svelte

		// `this.fetch` is a wrapper around `fetch` that allows
		// you to make credentialled requests on both
		// server and client
    console.log('preload..');
		const res = await this.fetch(`fish`);
		const docs = await res.json();
		return { docs }; 
	}

</script>

<script>
  export let docs = [];
</script>



<p>Test</p>
<p>{docs.length} Documents</p>
<ul>
	{#each docs as doc}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li>{ doc.data }</li>
	{/each}
</ul>
