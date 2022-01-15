<script>
	import Word from './Word.svelte';
	const rounds = 6;
	const letterCount = 5;
	let word = 'testing';
</script>

<div class="board">
	<Word/>
	<Word/>
	<Word/>
	<Word/>
	<Word/>
	<Word/>
</div>

<style>
	.board {
		margin-top: 3rem;
		display: grid;
		grid-template-columns: repeat(5, 3rem);
		grid-template-rows: repeat(6, 3rem);
		grid-gap: 1em;
	}
</style>