<script>
	/**
	 * @type {null | string}
	 */
	export let alert = null;
</script>

{#if alert}
	<alert>{alert}</alert>
{/if}

<style>
	alert {
		background-color: var(--color-bg-3);

		padding: 1rem;
		border-radius: 0.5rem;
        overflow: hidden;
        
	}
</style>
