<script>
  import screenfull from "screenfull";
  const fullScreenAction = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  };
  let paused = true;
  const growCirclesCount = 1;
  let hamburgerOpen = false;
  import { fly } from "svelte/transition";
</script>

<main class="container">
  <div class="tam" on:click={fullScreenAction}>
    <span>ཏཱྂ</span>
    {#each Array(growCirclesCount) as _, index (index)}
      <div
        class="center-circle animated"
        style="animation-delay: {index * 13}s"
      />
    {/each}
    <div class="center-circle" />
  </div>
</main>

<div class="hamburger-container" style="display:none;">
  <button
    class="hamburger-lines {hamburgerOpen ? 'is-active' : ''}"
    on:click={() => (hamburgerOpen = !hamburgerOpen)}
  >
    <span class="line line1" />
    <span class="line line2" />
    <span class="line line3" />
  </button>
  {#if hamburgerOpen}
    <div transition:fly={{ duration: 200 }} class="setting-board">
      fades in and out
    </div>
  {/if}
</div>

<audio src="greentaramantra.mp3" loop bind:paused hidden />

<button
  on:click={() => (paused = !paused)}
  class="playback {paused ? 'paused' : ''}"
/>

<style>
  .playback {
    border: 0;
    background: transparent;
    box-sizing: border-box;
    width: 0;
    height: 74px;
    border-color: transparent transparent transparent #202020;
    transition: 100ms all ease;
    cursor: pointer;
    border-style: solid;
    border-width: 37px 0 37px 60px;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    opacity: 0;
  }
  .playback.paused {
    border-style: double;
    border-width: 0px 0 0px 60px;
  }
  .playback:hover {
    border-color: transparent transparent transparent #404040;
    opacity: 1;
  }
</style>
