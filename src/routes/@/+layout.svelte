<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<main>
	<Sidebar />
	<article>
		<slot />
	</article>
</main>
