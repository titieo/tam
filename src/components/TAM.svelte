<script>
  import screenfull from "screenfull";
  import { storage } from "svelte-legos";
  import { writable } from "svelte/store";
  import { darkTAM } from "./TAM";
  const fullScreenAction = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
      console.log("Fullscreen!!!");
    } else {
      console.error("Unable to fullscreen");
    }
  };
  let paused = true;
  const growCirclesCount = 2;
  let hamburgerOpen = true;
  let bgLightEnabled = storage(writable(false), "bgLightEnabled"),
    movingLight = storage(writable(true), "movingLight");

  // darkTAM = storage(writable(false), "dark")
  import { fade } from "svelte/transition";
  export let extraTamClass = "";
  //   import "./TAM.css";
</script>

<div class="container container-tam">
  <main class="tam {extraTamClass}" on:click={fullScreenAction}>
    {#if $movingLight}
      {#each Array(growCirclesCount) as _, index (index)}
        <div
          class="center-circle animated"
          style="animation-delay: {index * 14}s"
        />
        <!-- Old value: 13s -->
      {/each}
    {/if}

    {#if $bgLightEnabled}
      <div class="center-circle" transition:fade={{ duration: 200 }} />
    {/if}
    <span>ཏཱྂ</span>
  </main>

  <div class="hamburger-container">
    <div class="setting-board {hamburgerOpen ? 'isOpen' : ''}">
      <!-- <h4>Green Tara</h4> -->
      <h4>TAM Seed Syllable</h4>

      <ul>
        <li>
          <input
            type="checkbox"
            name="darkTAM"
            id="darkTAM"
            bind:checked={$darkTAM}
          />
          <label for="darkTAM">darkTAM</label>
        </li>

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

  <!-- <slot /> -->

  <button
    on:click={() => (paused = !paused)}
    class="playback {paused ? 'paused' : ''}"
  />
</div>
