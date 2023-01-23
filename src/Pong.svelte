<script lang="ts">
	// General dimensioning
	export const margin = 100
	export const height = window.innerHeight - margin 
	export const aspect_ratio = 16/9
	let width = height * aspect_ratio
	$: width = height * aspect_ratio

	// Game variables
	let left_score = 0
	let right_score = 0
	let playing = false


	// SVG parameters
	let court_color = "black"
	let border_color = "green"
	let paddle_color = "orange"
	let ball_color = "red"
	let border_width = 5
	let paddle_height = height / 4

	const paddle_speed = 5

	let lpaddle_x = width / 30
	let lpaddle_y = height/2 - paddle_height / 2 
	let rpaddle_x = width - width / 30
	let rpaddle_y = height/2 - paddle_height / 2 

	$: lpaddle_y = lpaddle_y
	$: rpaddle_y = rpaddle_y
</script>

<div id=game-container
	on:dblclick={() => { playing = false }}
	on:keyup={() => { playing = false }}
	on:keypress={() => { playing = false }}
	on:keydown={() => { playing = false }}
	>
	<div id="left-score"
		>{left_score}</div>
	<div id="right-score"
		>{right_score}</div>
	<button id="play-button"
		style:opacity={playing ? 0 : 1}
		on:click={() => { playing = true }}
		>
		PLAY
	</button>
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
			x={lpaddle_x}
			y={lpaddle_y}
			width={border_width * 2}
			height={paddle_height}
			fill={paddle_color}
		/>
		<rect id=right_paddle
			x={rpaddle_x}
			y={rpaddle_y}
			width={border_width * 2}
			height={paddle_height}
			fill={paddle_color}
		/>
		<circle id=ball
			cx={width/2} cy={height/2} r={border_width * 1.5}
			fill={ball_color}
		/>
	</svg>
</div>

<style>
	#game-container {
		color:			red;
		display: flex;
		align-items: center;
		justify-content: center;
		/* Has to be relative so that the scores with position:absolute are contained */
		position: relative;
	}

	#left-score, #right-score, #play-button {
		font-family:	'Press Start 2P', Arial;
		font-size:		22px;
		font-weight:    bold;
		position: absolute;
		z-index: 1;
	}
	#left-score {
		top: 40px;
		left: 80px;
	}
	#right-score {
		top: 40px;
		right: 80px;
	}
	#play-button {
		color:	black;
		background-color: green;
		border: 2px solid white;
		border-radius: 2px;
		padding-top: 5px;
		padding-left: 7px;
	}
	#play-button:hover {
		color:	green;
		background-color: white;
		border: 2px solid green;
	}
</style>
