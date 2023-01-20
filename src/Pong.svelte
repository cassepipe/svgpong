<script lang="ts">
	import { Canvas, Layer, t, type Render } from 'svelte-canvas';
	import { onMount } from 'svelte'
	import { Paddle, Ball } from './GameObjects'

	export let margin = 100
	export let height = window.innerHeight - margin // Could we resize by making this a reactive statement ?
	export let aspect_ratio = 16/9
	// Reactive statements. Ordering matters !
	$: width = height * aspect_ratio

	let playing = false;


	let canvas : HTMLCanvasElement
	let rect : DOMRect | undefined
	let rect_x = 100
	let rect_y = 100
	let rect_w = 100
	let rect_h = 100

	onMount(() => {
		rect = canvas.getCanvas().getBoundingClientRect()
		rect_x = rect.x
		rect_y = rect.y
		rect_w = rect.width
		rect_h = rect.height

		console.log(rect)
	})

	// Render function
	$: render = ( { context, width, height }) => {
			//context.fillText('Hello', rect.x, rect.y)
			context.fillText('Left Score', rect_x, rect_y)
			context.fillText('Right Score', rect_x + rect_w / 2, rect_y)
			console.log('render')
	};
</script>

<div>
<Canvas 
	bind:this={canvas}
	{width}
	{height}
	style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 5px solid black; border-radius: 10px;"
 >
 <Layer {render} />
</Canvas>
</div>

<style>
	div {
		position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
	}
</style>
