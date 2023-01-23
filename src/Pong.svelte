<script lang="ts">
	import { onMount } from 'svelte'

	export let margin = 100
	export let height = window.innerHeight - margin 
	export let aspect_ratio = 16/9
	$: width = height * aspect_ratio

	let playing = false;

	let canvas : HTMLCanvasElement
	let rect : DOMRect | undefined = {x: 100, y: 100, width: 100, height: 100}

	onMount(() => {
	})

	let paddle_w = 10
	let paddle_h = height / 3

	// Render function
	$: render = ( { context, width, height }) => {
		console.log('render')
	};

	let left_score = 0
	let right_score = 0

	// SVG parameters
	let court_color="black"
	let border_color="green"
	let paddle_color="orange"
	let border_width=5
	let paddle_height = height / 4
</script>

<svg
	{width} {height}
	style:border={`${border_width}px solid ${border_color}`}
	>
	<rect
		x="0"
		y="0"
		{width}
		{height}
		stroke={court_color}
		fill={court_color}
		/>
	<line
		x1={width/2} y1="0"
		x2={width/2} y2={height}
		stroke={border_color}
		stroke-width={border_width}
		stroke-dasharray="10"
		/>
	<rect id=left_paddle
		x={width / 30}
		y={height/2 - paddle_height / 2}
		width={border_width * 2}
		height={paddle_height}
		fill={paddle_color}
	/>
	<rect id=right_paddle
		x={width - width / 30}
		y={height/2 - paddle_height / 2}
		width={border_width * 2}
		height={paddle_height}
		fill={paddle_color}
	/>
</svg>

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
