<script>
  import { getContext } from 'svelte';
  import Tile from './Tile.svelte';
  const answer = getContext('answer');

  let word = answer.split('').map(() => '');

  function updateWord(e) {
    console.log(e.detail)
    // word = [...word, e.detail];
    // console.log(word)
  }

  // TODO
  // 1. Collect tile states into word
  // 2. handle active input state
  // 
</script>


{#each Array(answer.length) as _, i}
  <Tile key={i} on:keypress={updateWord}/>
{/each}