<script lang="ts">
	// @ts-ignore
	import Sortable from 'sortablejs';
	import { onMount } from 'svelte';
	import type { MuseumObject } from '../../../routes/timeline/timelineGame';
	import ObjectCard from '$lib/components/objects/ObjectCard.svelte';

	let timeline: HTMLDivElement;
	export let objects: MuseumObject[];

	onMount(() => {
		Sortable.create(timeline, {
			group: 'game',
			animation: 150,
			ghostClass: 'blue-background-class'
		});
	});
</script>

<div id="timeline" bind:this={timeline}>
	<ObjectCard object={objects[0]} />
</div>
