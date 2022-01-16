<script>
  import { getContext } from 'svelte';
  import Letter from './Letter.svelte';
  import { currentWord } from './stores.js';
  const answer = getContext('answer');

  let word = answer.split('').map(() => '');
  let currentLetter;
  $: {
    currentLetter = word.findIndex(l => l === '');
    // move focus
    // how to query list of letters?
  }

  function updateWord({ detail }) {
    let copy = [...word];
    copy[detail.key] = detail.value;
    word = copy;
    currentWord.set(word.join(''));
  }

  // TODO
  // 1. Collect Letter states into word ✅
  // 2. handle active input state
    // When word becomes active, the first letter should be active
  // 3. Submit a word and crossreference with answer
</script>


{#each Array(answer.length) as _, i}
  <Letter 
    key={i}
    active={currentLetter === i}
    on:keyup={updateWord}
  />
{/each}