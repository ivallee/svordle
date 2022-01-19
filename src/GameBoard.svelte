<script>
  import { v4 as uuidv4 } from 'uuid';
  import Word from './Word.svelte';
  import { answer, rounds, currentWord } from './stores';

  $: winner = $rounds.find(round => round.word === $answer);
  $: disabled = $currentWord.length !== $answer.length;

  function handleSubmit() {
    if (!disabled) {
      rounds.update(data => {
        const newWord = {
          id: uuidv4(),
          word: $currentWord
        }
        return [...data, newWord];
      });
    }
  }
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

<button {disabled} on:click={handleSubmit}>Submit!</button>

<pre>
  Current word: {$currentWord}
  Answer is: {$answer}
  Guesses: {JSON.stringify($rounds, null, 2)}
</pre>

<!-- TODO: tie to current round -->

<style>
  .board {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(5, 3rem);
    grid-template-rows: repeat(6, 3rem);
    grid-gap: 1em;
  }
</style>