
<header>
  <div class="help">
    🤔
  </div>
  <div class="title">
    <h1>Svordle</h1>
    <p>Wordle, but with Svelte</p>
  </div>
  <div class="settings">
    <button>
      📊
    </button>
    <button>
      ⚙️
    </button>
  </div>
</header>

<style>
  header {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    border-bottom: 1px solid lightgrey;
  }
  
  .title {
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
  }
  
  .title h1 {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-weight: 700;
    margin: 0;
  }
  
  .title p {
    margin: 0;
    font-size: .85rem;
  }
  
  button {
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
</style>