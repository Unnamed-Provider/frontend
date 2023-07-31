<script>
	import { goto } from '$app/navigation';
	import Alert from '$lib/components/Alert.svelte';

	async function login() {
		button.disabled = true;
		const res = await fetch(`/api/v1/auth/magic/user/${email}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		let response = await res.json();
		if (response.status === 'success') {
			goto(`/auth/login?email=${email}`);
		} else {
            if (res.status === 404) {
                goto(`/auth/register?email=${email}`);
            } else {
                alert = response.message;
            }
		}
		button.disabled = false;
	}

	let email = '';

	/**
	 * @type {HTMLButtonElement}
	 */
	let button;

	/**
	 * @type {null | string}
	 */
	let alert = null;
</script>

<img src="/img/b1.svg" alt="background" />

<Alert {alert} />

<h1>Welcome!</h1>
<p>Enter your email address to get started</p>
<input type="email" name="email" placeholder="Email" bind:value={email} />

<button on:click={login} bind:this={button}> Continue </button>
