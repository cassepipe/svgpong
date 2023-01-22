<script lang="ts">
	import { Canvas, Layer, t, type Render } from 'svelte-canvas';
	import { onMount } from 'svelte'
	import { Paddle, Ball } from './GameObjects'
    import { fix_position } from 'svelte/internal';

	export let margin = 100
	export let height = window.innerHeight - margin // Could we resize by making this a reactive statement ?
	export let aspect_ratio = 16/9
	$: width = height * aspect_ratio

	let playing = false;

	let canvas : HTMLCanvasElement
	let rect : DOMRect | undefined = {x: 100, y: 100, width: 100, height: 100}

	// Gives me a blank page
	$: rect = canvas?.getCanvas().getBoundingClientRect()

	onMount(() => {
		rect = canvas?.getCanvas().getBoundingClientRect()
		console.log('onMount')
	})

	let paddle_w = 10
	let paddle_h = height / 3

	let lpaddle = new Paddle({
		x: rect.x + 10,
		y: height / 2 - paddle_h / 2,
		w: paddle_w,
		h: paddle_h,
		keys: {
			KeyW: -1,
			KeyS: 1,
		},
	})
	let rpaddle = new Paddle({
		x: rect.x + rect.width - 10,
		y: height / 2 - paddle_h / 2,
		w: paddle_w,
		h: paddle_h,
		keys: {
			KeyW: -1,
			KeyS: 1,
		},
	})

	// Render function
	$: render = ( { context, width, height }) => {
		lpaddle.show(context)
		rpaddle.show(context)
		console.log('render')
	};

	let left_score = 0
	let right_score = 0
</script>

<!-- <div id="score-overlay" style:height={height} style:width={width}></div> -->
<div id="game-container">
	<Canvas bind:this={canvas}
	 {width}
	 {height}
	 style="border: 5px solid black; border-radius: 10px; z-index: 0;"
	 >
	 <Layer {render} />
	</Canvas>
	<div class=scores id=left_score >
		{left_score}
	</div>
	<div class=scores id=right_score>
		{right_score}
	</div>
</div>

<style>
	
	#game-container {
		color:			green;
		display: flex;
		align-items: center;
		justify-content: center;
		/* Has to be relative so that the scores with position:absolute are contained */
		position: relative;
	}

	.scores {
		font-family:	'Press Start 2P', Arial;
		font-size:		22px;
		font-weight:    bold;
		position: absolute;
		z-index: 1;
	}

	#left_score {
		top: 40px;
		left: 80px;
	}

	#right_score {
		top: 40px;
		right: 80px;
	}
</style>
