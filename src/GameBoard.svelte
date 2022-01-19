<script>
  import Word from './Word.svelte';
  import { answer, rounds } from './stores';

  $: winner = $rounds.find(round => round.word === $answer);
</script>

<div class="board">
  {#if $rounds.length}
    {#each $rounds as round, i (round.id)}
      <Word word={round.word} />
    {/each}
  {/if}
  {#if !winner}
    <Word />
  {/if}
</div>

<pre>
  Answer is: {$answer}
  Guesses: {JSON.stringify($rounds, null, 2)}
</pre>

<!-- TODO: tie to current round -->
<!-- <button {disabled} on:click={guessWord}>Submit!</button> -->

<style>
  .board {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(5, 3rem);
    grid-template-rows: repeat(6, 3rem);
    grid-gap: 1em;
  }
</style>