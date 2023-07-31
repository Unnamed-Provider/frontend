<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Alert from '$lib/components/Alert.svelte';
	import { onMount } from 'svelte';

	async function login() {
		button.disabled = true;
		const res = await fetch('/api/v1/auth/token?setcookie=true', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: email,
				password: password.value
			})
		});

		let response = await res.json();
		if (response.status === 'success') {
			goto('/@');
		} else {
			alert = response.message;
			password.value = '';
		}
		button.disabled = false;
	}

	/**
	 * @type {string}
	 */
	let email = '';
	/**
	 * @type {HTMLInputElement}
	 */
	let password;

	/**
	 * @type {HTMLButtonElement}
	 */
	let button;

	/**
	 * @type {null | string}
	 */
	let alert = null;

	onMount(() => {
		let askedEmail = $page.url.searchParams.get('email');
		if (askedEmail) {
			email = askedEmail;
		}
	});
</script>

<img src="/img/b1.svg" alt="background" />

<Alert {alert} />

<h1>Login</h1>
<input type="email" name="email" placeholder="Email" bind:value={email} />
<input type="password" name="password" placeholder="Password" bind:this={password} />
<button on:click={login} bind:this={button}> Login </button>
<p><a href="/auth">Go back</a></p>
