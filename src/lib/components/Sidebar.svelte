<script>
	import SidebarItem from './SidebarItem.svelte';
	import md5 from 'md5';

	import { page } from '$app/stores';

    export let instance = {
		name: 'Project 1',
		id: 'a',
		open: $page.url.pathname.startsWith('/@/project')
	};

	export let user = {
		roles: ['Member'],
		username: 'ben@dover.org',
		names: {
			first: 'Ben',
			last: 'Dover'
		},
		avatar: "",
		primary_role: ""
	};


	$: user["avatar"] = `https://www.gravatar.com/avatar/${md5(user["username"])}?d=retro`;
	$: user["primary_role"] = user.roles[user.roles.length - 1].charAt(0).toUpperCase() + user.roles[user.roles.length - 1].slice(1);
	
</script>

<nav>
	<div class="user">
		<img src={user.avatar} alt="avatar" />
		<div class="user-info">
			<h4>{user.names.first} {user.names.last.charAt(0)}.</h4>
			<small>{user.primary_role}</small>
		</div>
	</div>

	<ul>
		<SidebarItem href="/@">Instances</SidebarItem>
		{#if instance.open}
			<li class="label">{instance.name}</li>
			<SidebarItem href="/@/project/{instance.id}">Overview</SidebarItem>
			<SidebarItem href="/@/project/{instance.id}/files">Files</SidebarItem>
			<SidebarItem href="/@/project/{instance.id}/settings">Settings</SidebarItem>
		{/if}
	</ul>
</nav>

<style>
	nav {
		width: 13%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		min-width: 13rem;
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
		overflow-wrap: anywhere;
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
