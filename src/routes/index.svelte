<script>
	let number = 2;
</script>

<main>
	<div class="container">
	<h1>{number}</h1>
	<hr />
	<p>This is my new Sveltekit app.</p>
</div>
</main>

<style>
	main {
		font-family: sans-serif;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0px 20px;
	}

	.container > * {
		width: 100%;
		max-width: 700px;
	}
</style>
