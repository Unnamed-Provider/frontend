import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    let login_status = cookies.get('login_status');
    if (login_status === 'true') {
        throw redirect(302, '/@');
    }
    throw redirect(302, '/auth/login');
};