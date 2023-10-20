import { HIGHLIGHT_IDS } from '$lib/highlightsIDs';

export function getRandomIDasString(arr: number[]) {
	return String(arr[Math.floor(Math.random() * arr.length)]);
}

const MET_URL = 'https://collectionapi.metmuseum.org';

function buildRequestURL(objectId: string) {
	return `${MET_URL}/public/collection/v1/objects/${objectId}`;
}

// fetch the object data from the Met API
async function fetchObjectData(objectId: string) {
	const url = buildRequestURL(objectId);
	return fetch(url).then((response) => response.json());
}

export function randomHighlightURL() {
	return buildRequestURL(getRandomIDasString(HIGHLIGHT_IDS));
}

export async function getRandomHighlight() {
	const data = await fetchObjectData(getRandomIDasString(HIGHLIGHT_IDS));
	return data;
}
