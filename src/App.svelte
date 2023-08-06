<script>
  import Tam from "./components/TAM.svelte";
  import Schedule from "./components/Schedule.svelte";
  import Clock from "./components/Clocks.svelte";
  import GreenTara from "./components/Green Tara.svelte";
  import { Fullpage, FullpageSection, FullpageSlide } from "svelte-fullpage";
</script>

<Fullpage disableArrowsNavigation disableDragNavigation>
  <FullpageSection title="Schedule">
    <FullpageSlide>
      <Schedule />
    </FullpageSlide>
    <FullpageSlide>
      <Clock />
    </FullpageSlide>
  </FullpageSection>
  <FullpageSection title="Seed Syllables" style="background:#070706">
    <FullpageSlide>
      <Tam />
    </FullpageSlide>

    <FullpageSlide><GreenTara /></FullpageSlide>
  </FullpageSection>
</Fullpage>
