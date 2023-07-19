<script>
	import SidebarItem from './SidebarItem.svelte';

    export let instance = {
		name: 'Project 1',
		id: '1',
		open: true
	};
</script>

<nav>
	<div class="user">
		<img src="https://avatars.githubusercontent.com/u/47269252?v=4" alt="user" />
		<div class="user-info">
			<h4>John Doe</h4>
			<small>Personal</small>
		</div>
	</div>

	<ul>
		<SidebarItem href="/">Instances</SidebarItem>
		{#if instance.open}
			<li class="label">{instance.name}</li>
			<SidebarItem href="/project/{instance.id}/overview">Overview</SidebarItem>
			<SidebarItem href="/project/{instance.id}/files">Files</SidebarItem>
			<SidebarItem href="/project/{instance.id}/settings">Settings</SidebarItem>
		{/if}
	</ul>
</nav>

<style>
	nav {
		width: 13%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.user {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 1rem;
	}

	.user img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}

	.user-info {
		margin-left: 1rem;
	}

	.user-info h4 {
		margin: 0;
	}

	.user-info small {
		color: var(--color-text-muted);
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

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

	li.label {
		background-color: var(--color-bg-2);
		color: var(--color-text-muted);
		margin-top: 1.2rem;
		padding: 0rem 0.6rem;
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: 800;
	}
</style>
