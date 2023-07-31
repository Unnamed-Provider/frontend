<script>
    import "./auth.css";
</script>

<article>
	<div>
		<slot />
	</div>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	article > div {
		background-color: var(--color-bg-2);
		padding: 2rem;
		border-radius: 1rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.8);
	}
	


</style>
