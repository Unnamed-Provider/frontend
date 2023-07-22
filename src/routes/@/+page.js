/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const r = await fetch('/api/v1/instances', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let res = await r.json();

    return {
        instances: res.instances
    };
};