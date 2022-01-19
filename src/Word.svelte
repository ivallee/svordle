<script>
  import Letter from './Letter.svelte';
  import { answer } from './stores';

  export let word = '';
  let wordArray = word.split('');

  function validateLetters(letter, i) {
    let valid = 'incorrect';
    if (letter === $answer[i]) {
      valid = 'correct';
    } else if ($answer.includes(letter)) {
      valid = 'semicorrect';
    }
    return {
      letter,
      valid
    }
  }

  if (word) {
    wordArray = wordArray.map(validateLetters);
  }

</script>

{#each Array($answer.length) as letter, i}
  <Letter 
    valid={wordArray[i] ? wordArray[i].valid : null}
    value={wordArray[i] ? wordArray[i].letter : ''}
  />
{/each}