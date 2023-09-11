<script>
  import screenfull from "screenfull";
  import { storage } from "svelte-legos";
  import { writable } from "svelte/store";
  const fullScreenAction = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
      console.log("Fullscreen!!!");
    }
    console.error("Unable to fullscreen");
  };
  let paused = true;
  const growCirclesCount = 2;
  let hamburgerOpen = true;
  let bgLightEnabled = storage(writable(true), "bgLightEnabled"),
    movingLight = storage(writable(true), "movingLight");
  let greenTaraLight = storage(writable(false), "greenTaraLight"),
    tamBig = storage(writable(false), "tamBig");
  //   let bgIsLight = storage(writable(true), "bgIsLight");
  //   let myGuru = storage(writable(false), "myGuru");
  import { fade } from "svelte/transition";
  //   import "./TAM.css";    screenfull.toggle();
</script>

<img
  src="green_tara.jpg"
  alt="green tara"
  class={greenTaraLight ? "" : "dark"}
/>

<!-- <img src="my_guru.jpg" class="my-guru" alt="Gyalwa Dokhampa - My Guru" />
{#if $myGuru}{/if} -->

<div class="container container-tam">
  <main
    class="tam greentara-tam {$tamBig ? 'big' : ''}"
    on:click={fullScreenAction}
  >
    <span>ཏཱྂ</span>
    {#if $movingLight}
      {#each Array(growCirclesCount) as _, index (index)}
        <div
          class="center-circle animated greentara-animated"
          style="animation-delay: {index * 20}s"
        />
      {/each}
    {/if}

    {#if $bgLightEnabled}
      <div class="center-circle" transition:fade={{ duration: 200 }} />
    {/if}
  </main>

  <div class="hamburger-container">
    <div class="setting-board {hamburgerOpen ? 'isOpen' : ''}">
      <h4>Green Tara</h4>
      <ul>
        <li>
          <input
            type="checkbox"
            name="greenTaraLight"
            id="greenTaraLight"
            bind:checked={$greenTaraLight}
          />
          <label for="greenTaraLight">greenTaraLight</label>
        </li>

        <li>
          <input
            type="checkbox"
            name="tamBig"
            id="tamBig"
            bind:checked={$tamBig}
          />
          <label for="tamBig">tamBig</label>
        </li>
      </ul>
      <h4>TAM Seed Syllable</h4>
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

  <slot />

  <button
    on:click={() => (paused = !paused)}
    class="playback {paused ? 'paused' : ''}"
  />
</div>

<style lang="postcss">
  $glow-from: rgba(0, 220, 52, 0.7);
  img {
    /* width: 100vw; */
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: brightness(0.85);
  }

  .tam {
    font-size: 10rem;
  }

  img.dark {
    opacity: 0.9;
  }

  .greentara-tam {
    scale: 0.1;
    top: 15%;
    left: 44%;
    /* transform: all ; */
    transition: all 1s;
  }
  .greentara-tam.big {
    scale: 0.16;
    transition: all 1s;
  }

  .greentara-animated {
    animation: greentara-scale-phone 20s cubic-bezier(0.17, 0.67, 0.27, 0.24)
      infinite;
  }

  @media (min-width: 768px) {
    .tam {
      font-size: 18rem;
    }

    img {
      height: 100vh;
      width: auto;
    }

    .greentara-tam {
      scale: 0.14;
      top: 20%;
      left: 45%;
      /* transform: all ; */
      transition: all 1s;
    }
    .greentara-animated {
      animation: greentara-scale 20s cubic-bezier(0.17, 0.67, 0.27, 0.24)
        infinite;
    }
  }

  @keyframes greentara-scale {
    45% {
      opacity: 0.55;
      filter: blur(0.9rem) brightness(1.1);
    }

    to {
      opacity: 0;
      transform: translate(-50%, -55%) scale(8);
      filter: blur(1rem) brightness(1);
    }
  }

  @keyframes greentara-scale-phone {
    25% {
      opacity: 0.4;
      filter: blur(0.9rem) brightness(0.5);
      /* transform: translate(-50%, -55%) scale(2); */
    }
    35% {
      transform: translate(-50%, -55%) scale(3);
    }
    100% {
      transform: translate(-50%, -55%) scale(3.6);
      opacity: 0;
      /* transform: translate(-50%, -55%) scale(5); */
      filter: blur(1rem) brightness(1);
    }
  }
  /* @media (let mql = window.matchMedia("(max-width: 600px)");) */
</style>
