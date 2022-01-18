<script>
  import { setContext } from 'svelte';
  import { currentWord, rounds, currentRound } from './stores.js';
  import Word from './Word.svelte';

  // TODO: Make more dynamic/a random word
  // random word API?
  // DB?
  const ANSWER_WORD = 'panic';
  const GAME_ROUNDS = 2;
  setContext('answer', ANSWER_WORD);
  setContext('rounds', GAME_ROUNDS);

  // initialize rounds
  var initRounds = []
  for (let i = 0; i < GAME_ROUNDS; i++) {
    initRounds.push({
      word: '',
      complete: false
    });
  }
  rounds.update(n => initRounds);

  let disabled = false;
  let activeRound = 0;
  $: disabled = $currentWord.length !== ANSWER_WORD.length;
  $: activeRound = $rounds.findIndex(v => v.length !== ANSWER_WORD.length);

  function guessWord() {
    // const currentWordArray = $currentWord.split('');
    // const answerWordArray = ANSWER_WORD.split('');

    // TODO: Need to handle case for when there are more semicorrect letters
    // than are in the word.
    // eg. when you guess "anana" but the answer word is "panic"
    // We should not have multiple semicorrect letters
    // const result = currentWordArray.map((letter, i) => {
    //   let status = 'incorrect';
    //   if (letter === answerWordArray[i]) {
    //     status = 'correct';
    //   } else if (answerWordArray.includes(letter)) {
    //     status = 'semicorrect';
    //   }
    //   return status;
    // });
    rounds.update(n => {
      let round = n[$currentRound];
      round.word = $currentWord;
      round.complete = true;
      return n;
    })
    currentRound.set($currentRound + 1);
    console.log($currentRound)
  }

  // answer
  // rounds
    // current (active) round is determined by next empty
  // attempts

</script>

<div class="board">
  {#each $rounds as round, i}
    <Word id={i} isActiveRound={activeRound === i} />
  {/each}
</div>

<pre>
  {JSON.stringify($rounds, null, 2)}
  {activeRound}
</pre>

<!-- TODO: tie to current round -->
<button {disabled} on:click={guessWord}>Submit!</button>

<style>
  .board {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(5, 3rem);
    grid-template-rows: repeat(6, 3rem);
    grid-gap: 1em;
  }
</style>