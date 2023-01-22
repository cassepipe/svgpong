<script lang="ts">
	import Pong from "./Pong.svelte";
</script>

<nav>Nav Bar</nav>

<main>
	<Pong />
</main>

<style>
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
