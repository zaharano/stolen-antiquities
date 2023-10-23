<script lang="ts">
	import ObjectCard from '$lib/components/objects/ObjectCard.svelte';
	// @ts-ignore this is fucking dumb
	import Next from '$lib/components/timeline/Next.svelte';
	import Timeline from '$lib/components/timeline/Timeline.svelte';
	import { onMount } from 'svelte';

	import type { PageData } from './$types';
	export let data: PageData;
	const { objects } = data;

	onMount(() => {});
</script>

<svelte:head>
	<title>Timeline Game</title>
	<meta name="description" content="Put objects on a timeline" />
</svelte:head>

<div>
	<!-- {#each objects as object}
		<ObjectCard {object} />
	{/each} -->
	<Next message="Next Object">
		<ObjectCard object={objects[1]} />
	</Next>
	<Timeline {objects} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
