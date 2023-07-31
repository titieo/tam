<script>
  import screenfull from "screenfull";
  import { storage } from "svelte-legos";
  import { writable } from "svelte/store";
  const fullScreenAction = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  };
  let paused = true;
  const growCirclesCount = 1;
  let hamburgerOpen = true;
  let bgLightEnabled = storage(writable(true), "bgLightEnabled"),
    movingLight = storage(writable(true), "movingLight");
  import { fade } from "svelte/transition";
  import { Fullpage, FullpageSection, FullpageSlide } from "svelte-fullpage";
</script>

<main class="container">
  <div class="tam" on:click={fullScreenAction}>
    <span>ཏཱྂ</span>
    {#if $movingLight}
      {#each Array(growCirclesCount) as _, index (index)}
        <div
          class="center-circle animated"
          style="animation-delay: {index * 13}s"
        />
      {/each}
    {/if}

    {#if $bgLightEnabled}
      <div class="center-circle" transition:fade={{ duration: 200 }} />
    {/if}
  </div>
</main>

<div class="hamburger-container">
  <div class="setting-board {hamburgerOpen ? 'isOpen' : ''}">
    <ul>
      <li>
        <input
          type="checkbox"
          name="bgLightEnabled"
          id="bgLightEnabled"
          bind:checked={$bgLightEnabled}
        />
        <label for="bgLightEnabled">bgLightEnabled</label>
      </li>

      <li>
        <input
          type="checkbox"
          name="movingLight"
          id="movingLight"
          bind:checked={$movingLight}
        />
        <label for="movingLight">movingLight</label>
      </li>
    </ul>
  </div>
  <!-- {/if} -->
  <button
    class="hamburger-lines {hamburgerOpen ? 'is-active' : ''}"
    on:click={() => (hamburgerOpen = !hamburgerOpen)}
  >
    <span class="line line1" />
    <span class="line line2" />
    <span class="line line3" />
  </button>
</div>

<audio src="greentaramantra.mp3" loop bind:paused hidden />

<button
  on:click={() => (paused = !paused)}
  class="playback {paused ? 'paused' : ''}"
/>
