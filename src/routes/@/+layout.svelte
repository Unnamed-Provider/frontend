<script>
	import Sidebar from '$lib/components/Sidebar.svelte';

	/**
	 * @type {any}
	 */
	export let data;
</script>

<main>
	<Sidebar user={data.user} />
	<article>
		<slot />
	</article>
</main>
