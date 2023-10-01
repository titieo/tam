<script>
  import { storage } from "svelte-legos";
  import { writable } from "svelte/store";
  import Tam from "./components/TAM.svelte";
  import { darkBg } from "./components/TAM";
  import GreenTara from "./components/Green Tara.svelte";
  //   import Schedule from "./components/Schedule.svelte";
  //   import Clock from "./components/Clocks.svelte";
  //   import Yidams from "./components/Yidams.svelte";
  import { Fullpage, FullpageSection, FullpageSlide } from "svelte-fullpage";
  let md = window.matchMedia("(min-width: 768px)");
  let disableDragNavigation = false;
  //   let darkBg = storage(writable(false), "dark");
  if (md) disableDragNavigation = true;
</script>

<Fullpage disableArrowsNavigation disableDragNavigation>
  <!-- <FullpageSection title="Schedule">
    <FullpageSlide title="Schedule">
      <Schedule />
    </FullpageSlide>
    <FullpageSlide title="Clock">
      <Clock />
    </FullpageSlide>
  </FullpageSection> -->
  <FullpageSection title="Seed Syllables">
    <FullpageSlide title="TAM" class="tam-container {$darkBg ? 'dark' : ''}">
      <Tam />
    </FullpageSlide>
    <FullpageSlide title="Green Tara" style="background: #070706"
      ><GreenTara /></FullpageSlide
    >
  </FullpageSection>
  <!-- <FullpageSection>
    <Yidams />
  </FullpageSection> -->
</Fullpage>
