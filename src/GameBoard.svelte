<script>
  import { setContext } from 'svelte';
  import { currentWord } from './stores.js';
  import Word from './Word.svelte';

  // TODO: Make more dynamic/a random word
  // random word API?
  // DB?
  const ANSWER_WORD = 'panic';
  setContext('answer', ANSWER_WORD);
  let disabled = false;
  $: disabled = $currentWord.length !== ANSWER_WORD.length;

  function validateWord() {
    const currentWordArray = $currentWord.split('');
    const answerWordArray = ANSWER_WORD.split('');

    // TODO: Need to handle case for when there are more semicorrect letters
    // than are in the word.
    // eg. when you guess "anana" but the answer word is "panic"
    // We should not have multiple semicorrect letters
    const result = currentWordArray.map((letter, i) => {
      let status = 'incorrect';
      if (letter === answerWordArray[i]) {
        status = 'correct';
      } else if (answerWordArray.includes(letter)) {
        status = 'semicorrect';
      }
      return status;
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