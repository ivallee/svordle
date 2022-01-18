<script>
  import { getContext } from 'svelte';
  import { rounds } from './stores.js';
  const answer = getContext('answer');

  import Letter from './Letter.svelte';

  export let id;
  export let isActiveRound;

  let word = answer.split('').map(() => '');

  function updateWord({ detail }) {
    let copy = [...word];
    copy[detail.key] = detail.value;
    word = copy.join('');
    rounds.update(n => {
      n[id].word = word;
      return n;
    });
    // This should just bubble up?
    // currentWord.set(word.join(''));
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
    on:keyup={updateWord}
  />
{/each}

{isActiveRound}