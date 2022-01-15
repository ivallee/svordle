<script>
  import { createEventDispatcher } from 'svelte';
  export let value = '';
  export let key; 

  // prop: validity

  const dispatch = createEventDispatcher();
</script>

<input type="text"
  maxlength="1"
  bind:value
  on:keypress={() => dispatch('keypress', {key, value})}
/>

<style>
  input {
    height: 100%;
    width: 100%;
    text-align: center;
    border-radius: 5px;
  }
</style>