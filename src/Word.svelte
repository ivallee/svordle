<script>
  import { currentWord } from './stores';
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

  function updateWord({ detail }) {
    let updatedWord = word.split('');
    updatedWord[detail.index] = detail.value;
    word = updatedWord.join('');
    currentWord.set(word);
  }

</script>

{#each Array($answer.length) as _, i}
  <Letter
    index={i}
    valid={wordArray[i] ? wordArray[i].valid : null}
    value={wordArray[i] ? wordArray[i].letter : ''}
    on:input={updateWord}
  />
{/each}