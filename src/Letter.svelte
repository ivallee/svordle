<script>
  import { createEventDispatcher, afterUpdate } from 'svelte';
  export let value = '';
  export let valid;


  let input;
  // prop: validity

  const dispatch = createEventDispatcher();

  function handleChange() {
    dispatch('keyup', { key, value })
  }


</script>

<input type="text"
  maxlength="1"
  class={valid}
  disabled={valid}
  bind:value={value}
  bind:this={input}
  on:keyup={handleChange}
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