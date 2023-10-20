const MET_URL = 'https://collectionapi.metmuseum.org';
const GOUGH_OBJECT_ID = 436535;

function buildRequestURL(objectId) {
	return `${MET_URL}/public/collection/v1/objects/${objectId}`;
}

// fetch the object data from the Met API
function fetchObjectData(objectId) {
	const url = buildRequestURL(objectId);
	return fetch(url).then((response) => response.json());
}

// log out the data
function logData(data) {
	console.log(data);
}

const data = fetchObjectData(GOUGH_OBJECT_ID);
logData(data);
