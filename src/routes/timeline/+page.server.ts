import type { MuseumObject } from './timelineGame.js';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async ({ fetch }) => {
	// Load the tenRandom
	// const object = await fetchElementWithField(randomHighlightURL(), 'primaryImage', fetch);
	const localSet = await fetch('~/fullData.json');

	const objects = (await localSet.json()) as MuseumObject[];

	return { objects };
};

// async function fetchElementWithField(
// 	apiEndpoint: string,
// 	desiredField: string,
// 	customFetch: typeof fetch
// ) {
// 	while (true) {
// 		try {
// 			const response = await customFetch(apiEndpoint);
// 			if (!response.ok) {
// 				throw new Error(`Failed to fetch data from the API: ${response.statusText}`);
// 			}
// 			const data = await response.json();

// 			if (data[desiredField]) {
// 				return data;
// 			}
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}
// }

// const objects = await localSet.json();
// const idArray = objects.map((object) => object.objectID);

// const responses = await Promise.all(idArray.map((id) => fetch(buildRequestURL(id))));

// const data = responses.map(async (response) => {
// 	if (!response.ok) {
// 		throw new Error(`Failed to fetch data from the API: ${response.statusText}`);
// 	} else {
// 		return await response.json();
// 	}
// });
