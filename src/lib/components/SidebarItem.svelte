<script>
	export let href = '/';
	import { page } from '$app/stores';

    /**
	 * @type {boolean}
	 */
    let active;

	$: active = href === $page.url.pathname;
</script>

<a {href}>
	<li aria-current={active ? 'page' : undefined}>
        <slot />
	</li>
</a>

<style>
	li {
		padding: 0.5rem 1rem;
		background-color: transparent;
		margin: 0.5rem;
		border-radius: 0.5rem;
		transition: background-color 0.2s ease-in-out;
	}

	li:hover {
		background-color: var(--color-primary);
	}

	li[aria-current='page'] {
        background-color: var(--color-bg-3)!important;
	}

	a {
		text-decoration: none;
		color: var(--color-text);
	}
</style>
