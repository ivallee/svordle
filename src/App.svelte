<script>
  import { answer, rounds } from './stores'
  import Header from './Header.svelte';
  import GameBoard from './GameBoard.svelte';

</script>


<div class="game">
  <Header/>
  <GameBoard></GameBoard>
</div>

<style>
  :global(body) {
    background: #EAE6E5;
  }
  .game {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
  }
</style>