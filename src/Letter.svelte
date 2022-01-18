<script>
  import { createEventDispatcher, onMount, afterUpdate } from 'svelte';
  export let value = '';
  export let key;
  export let active = false;

  let input;
  // prop: validity

  const dispatch = createEventDispatcher();

  afterUpdate(() => {
    if (active) {
      console.log('activation stations!')
      input.focus()
    }
  });

</script>

<input type="text"
  maxlength="1"
  bind:value={value}
  bind:this={input}
  on:keyup={() => dispatch('keyup', { key, value })}
/>

<style>
  input {
    height: 100%;
    width: 100%;
    text-align: center;
    border-radius: 5px;
    text-transform: uppercase;
  }
</style>