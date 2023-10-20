<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		const L = await import('leaflet');
		let map = L.map('map').setView([51.505, -0.09], 13);

		var Stadia_StamenWatercolor = L.tileLayer(
			'https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}',
			{
				minZoom: 1,
				maxZoom: 16,
				attribution:
					'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				ext: 'jpg'
			}
		).addTo(map);
	});
</script>

<div id="map" />

<style>
	#map {
		height: 500px;
		width: 800px;
	}
</style>
