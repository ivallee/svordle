<script>
  import { createEventDispatcher, onMount } from 'svelte';
  export let value = '';
  export let key;
  // prop: validity

  const dispatch = createEventDispatcher();

</script>

<input type="text"
  maxlength="1"
  bind:value
  on:keyup={() => dispatch('keyup', {key, value})}
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