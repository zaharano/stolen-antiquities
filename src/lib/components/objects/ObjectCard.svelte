<script lang="ts">
	import type { MuseumObject } from '../../../routes/timeline/timelineGame';
	import { onMount } from 'svelte';

	export let object: MuseumObject;
	export let fullDetails: boolean = false;

	let img;
</script>

<div>
	<h3>{object.title || 'Untitled'}</h3>
	<p class="artistDisplay">{object.artistDisplayName || 'No artist listed'}</p>
	<img src={object.primaryImageSmall} alt={object.title} bind:this={img} />
	{#if fullDetails}
		<p>Object Date: {object.objectDate}</p>
		<p>Medium: {object.medium}</p>
		<p>End Date: {object.objectEndDate}</p>
		<p>Begin Date: {object.objectBeginDate}</p>
		<a href={object.objectURL}>View at the Met Collection</a>
	{/if}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.4rem;
	}
	h3 {
		font-size: 1.2rem;
		font-weight: 600;
		margin: 0;
		padding: 0;
		line-height: 1;
	}
	.artistDisplay {
		font-size: 0.8rem;
		font-weight: 300;
		font-style: italic;
		margin: 0;
		padding: 0;
		line-height: 1;
	}
	div :global(img) {
		max-width: 16rem;
		max-height: 16rem;
	}
</style>
