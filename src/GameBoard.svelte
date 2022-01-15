<script>
  import { setContext } from 'svelte';
  import Word from './Word.svelte';

  // TODO: Make more dynamic/a random word
  // random word API?
  // DB?
  const ANSWER_WORD = 'testy';

  setContext('answer', ANSWER_WORD);

  // STATE
    // Rounds
    // Current Round
    // Answer word
    // Active row?
    //
</script>

<div class="board">
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