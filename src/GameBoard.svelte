<script>
  import { setContext } from 'svelte';
  import { currentWord } from './stores.js';
  import Word from './Word.svelte';

  // TODO: Make more dynamic/a random word
  // random word API?
  // DB?
  const ANSWER_WORD = 'testy';
  setContext('answer', ANSWER_WORD);
  let disabled = false;
  $: disabled = $currentWord.length !== ANSWER_WORD.length;

  function validateWord() {
    const currentWordArray = $currentWord.split('');
    const answerWordArray = ANSWER_WORD.split('');

    const result = currentWordArray.map((letter, i) => {
      let status = 'incorrect';
      if (letter === answerWordArray[i]) {
        status = 'correct';
      } else if (answerWordArray.includes(letter)) {
        status = 'inword';
      }
      return status;

      // if no more of that letter make sure to return incorrect
    });

    console.log(result);
  }

</script>

<div class="board">
  <Word/>
</div>

<button {disabled} on:click={validateWord}>Submit!</button>

<style>
  .board {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(5, 3rem);
    grid-template-rows: repeat(6, 3rem);
    grid-gap: 1em;
  }
</style>