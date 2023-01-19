<script lang="ts">
	import { onMount } from 'svelte'

	export let margin = 100
	export let height = window.innerHeight - margin // Could we resize by making this a reactive statement ?
	export let aspect_ratio = 16/9
	// Reactive statements. Ordering matters !
	$: width = height * aspect_ratio

	let canvas_node;

	onMount(() => {
		const context = canvas_node.getContext('2d')
	})

	let playing = false;

</script>

<article>
	{#if !playing}
	<div>
		<strong>
			"Left score"
		</strong>
		<button on:click={platin}> Play </button>
		<strong>
			"Right score"
		</strong>
	</div>
	{/if}
	<canvas
		bind:this={canvas_node}
		{height}
		{width}
	>
	</canvas>
</article>



<style>
	canvas {
		/*Center canvas*/
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		/*Style*/
		background-color: black;
		border: 5px solid green;
		border-radius: 10px
	}
</style>
