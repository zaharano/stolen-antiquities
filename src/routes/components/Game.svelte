<script>
	import { onMount } from 'svelte';
	import { getRandomHighlight } from './game';

	export let object;
</script>

<div>
	{#if object !== undefined}
		<h1>{object.title}</h1>
		<img src={object.primaryImageSmall} alt={object.name} />
		<p>{object.objectEndDate}</p>
		<p>{object.primaryImage}</p>
	{:else}
		<p>loading...</p>
	{/if}
</div>
