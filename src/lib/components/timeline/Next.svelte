<script lang="ts">
	// @ts-ignore
	import Sortable from 'sortablejs';
	import { onMount } from 'svelte';
	export let message = 'Next Object';

	let container: HTMLDivElement;

	onMount(() => {
		Sortable.create(container, {
			group: 'game',
			animation: 150,
			ghostClass: 'blue-background-class'
		});
	});
</script>

<div class="next">
	<h2>{message}</h2>
	<div id="new" bind:this={container}>
		<slot />
	</div>
</div>

<style>
	h2 {
		background-color: var(--color-theme-1);
		color: white;
		padding: 0.3rem 0.5rem;
		border-radius: 6px;
		font-size: 0.8rem;
		margin-bottom: 0.4rem;
	}
	.next {
		position: absolute;
		top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 0.5rem;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
		max-width: 24rem;
		padding: 1rem;
	}
</style>
