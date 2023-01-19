<script lang="ts">
	import { Canvas, Layer, t, type Render } from 'svelte-canvas';
	import { onMount } from 'svelte'

	export let margin = 100
	export let height = window.innerHeight - margin // Could we resize by making this a reactive statement ?
	export let aspect_ratio = 16/9
	// Reactive statements. Ordering matters !
	$: width = height * aspect_ratio

	// Get the canvas context
	let canvas_node;
	onMount(() => {
		const context = canvas_node.getContext('2d')
	})

	let playing = false;

	// Render function
	let render: Render;
	$: render = ( { context, width, height }) => {
	};
</script>

<!-- Center canvas horiz and vertically -->
<Canvas
	{width}
	{height}
	style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 5px solid black; border-radius: 10px;"
 >
 <Layer {render} />
</Canvas>
