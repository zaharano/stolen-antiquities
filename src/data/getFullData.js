import { readFileSync, writeFileSync } from 'fs';

const data = JSON.parse(readFileSync('tenRandom.json', 'utf8'));

const ids = data.map((item) => item.objectID);

async function getFullData() {
	const promises = ids.map((id) => fetch(buildRequestURL(id)));
	const responses = await Promise.all(promises);
	const data = await Promise.all(responses.map((res) => res.json()));
	return data;
}

const MET_URL = 'https://collectionapi.metmuseum.org';

function buildRequestURL(objectId) {
	return `${MET_URL}/public/collection/v1/objects/${objectId}`;
}

let fullData = await getFullData();

const storeData = (data, path) => {
	try {
		writeFileSync(path, JSON.stringify(data));
	} catch (err) {
		console.error(err);
	}
};

storeData(fullData, 'fullData.json');
