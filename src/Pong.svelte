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

	let border_color="green"
	let border_width=5
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
		stroke="black"
		fill="black"
		/>
	<line
		x1={width/2} y1="0"
		x2={width/2} y2={height}
		stroke="green" stroke-width="5"
		stroke-dasharray="10"
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
