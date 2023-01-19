<script lang="ts">
	import { Canvas, Layer, t, type Render } from 'svelte-canvas';
	import { onMount } from 'svelte'
	import { Paddle, Ball } from './GameObjects'

	import * as THREE from 'three'
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
	import { Font } from 'three/examples/jsm/loaders/FontLoader'
	import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
	import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

	export let margin = 100
	export let height = window.innerHeight - margin // Could we resize by making this a reactive statement ?
	//export let aspect_ratio = 16/9
	export let aspect_ratio = 9/9
	// Reactive statements. Ordering matters !
	$: width = height * aspect_ratio

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

