<script>
	import Header from './Header.svelte';
	import GameBoard from './GameBoard.svelte';
</script>

<style>
	.game {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 500px;
	}
</style>

<div class="game">
	<Header/>
	<GameBoard></GameBoard>
</div>