<script>

    import { page } from "$app/stores";
	import { onMount } from "svelte";

    async function register() {
        if (password !== password2) {
            alert("Passwords do not match");
            return;
        }
        const res = await fetch("/api/v1/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: email,
                password: password,
                names: {
                    first: firstname,
                    last: lastname
                }
            })
        });
        
        let response = await res.json();
        alert(response.message);
    }
    
    let firstname = "";
    let lastname = "";

    let email = "";
    let password = "";
    let password2 = '';

    onMount(() => {
		let askedEmail = $page.url.searchParams.get('email');
		if (askedEmail) {
			email = askedEmail;
		}
	});
</script>

<img src="/img/b2.svg" alt="background" />

<h1>REGISTER</h1>
<input type="text" name="firstname" placeholder="First Name" bind:value={firstname} />
<input type="text" name="lastname" placeholder="Last Name" bind:value={lastname} />
<input type="email" name="email" placeholder="Email" bind:value={email} />
<input type="password" name="password" placeholder="Password" bind:value={password} />
<input type="password" name="password2" placeholder="Confirm Password" bind:value={password2} />
<button on:click={register}>CREATE ACCOUNT</button>
<p><a href="/auth">Go back</a></p>
