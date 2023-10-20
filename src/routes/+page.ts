import { randomHighlightURL } from './components/game.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch(randomHighlightURL());
	const object = await res.json();

	return {
		object
	};
}
