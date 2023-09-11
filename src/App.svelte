<script>
  import Tam from "./components/TAM.svelte";
  import Schedule from "./components/Schedule.svelte";
  import Clock from "./components/Clocks.svelte";
  import GreenTara from "./components/Green Tara.svelte";
  //   import Yidams from "./components/Yidams.svelte";
  import { Fullpage, FullpageSection, FullpageSlide } from "svelte-fullpage";
  let md = window.matchMedia("(min-width: 768px)");
  let disableDragNavigation = false;
  if (!md) disableDragNavigation = false;
</script>

<Fullpage disableArrowsNavigation disableDragNavigation>
  <FullpageSection title="Schedule">
    <FullpageSlide title="Schedule">
      <Schedule />
    </FullpageSlide>
    <FullpageSlide title="Clock">
      <Clock />
    </FullpageSlide>
  </FullpageSection>
  <FullpageSection title="Seed Syllables" style="background:#070706">
    <FullpageSlide title="TAM">
      <Tam />
    </FullpageSlide>
    <FullpageSlide title="Green Tara"><GreenTara /></FullpageSlide>
  </FullpageSection>
  <!-- <FullpageSection>
    <Yidams />
  </FullpageSection> -->
</Fullpage>
