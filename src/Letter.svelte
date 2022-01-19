<script>
  import { createEventDispatcher, afterUpdate } from 'svelte';
  export let value = '';
  export let index;
  export let valid;


  let input;

  const dispatch = createEventDispatcher();

  function handleInput() {
    dispatch('input', { index, value });
  }


</script>

<input type="text"
  maxlength="1"
  class={valid}
  disabled={valid}
  bind:value={value}
  bind:this={input}
  on:input={handleInput}
/>

<style>
  input {
    height: 100%;
    width: 100%;
    text-align: center;
    border-radius: 5px;
    text-transform: uppercase;
  }

  .incorrect {
    background: grey;
  }
  
  .semicorrect {
    background: #FFE74C;
  }

  .correct {
    background: #6BF178;
  }
</style>