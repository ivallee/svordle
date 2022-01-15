<script>
	import Tile from './Tile.svelte';
	let word = 'Testy';
	let wordArray = word.split('');
</script>

{#each wordArray as letter}
	<Tile value={letter}/>
{/each}



<!-- <Tile/>
<Tile/>
<Tile/>
<Tile/>
<Tile/> -->