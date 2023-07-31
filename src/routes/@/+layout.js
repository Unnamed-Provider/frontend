import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
    const r = await fetch('/api/v1/users/@me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let res = await r.json();
    
    if (res.status === "failed") {
        throw redirect(302, '/auth');
    }

    return {
        user: res.user
    };
}