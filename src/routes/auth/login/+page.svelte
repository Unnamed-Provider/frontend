<script>
	import { goto } from '$app/navigation';

	async function login() {
		const res = await fetch('/api/v1/auth/token?setcookie=true', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: email,
				password: password
			})
		});

		let response = await res.json();
		alert(response.message);
		if (response.status === 'success') {
			goto('/@');
		}
	}

	let email = '';
	let password = '';
</script>

<img src="/img/b1.svg" alt="background" />

<h1>Login</h1>
<input type="email" name="email" placeholder="Email" bind:value={email} />
<input type="password" name="password" placeholder="Password" bind:value={password} />
<button on:click={login}>LOGIN</button>
<p>Don't have an account? <a href="./register">Register</a></p>
