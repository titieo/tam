<script>
  import Tam from "./components/TAM.svelte";
  import Schedule from "./components/Schedule.svelte";
  import Clock from "./components/Clocks.svelte";
  import { Fullpage, FullpageSection, FullpageSlide } from "svelte-fullpage";
</script>

<Fullpage>
  <FullpageSection title="Schedule">
    <FullpageSlide>
      <Schedule />
    </FullpageSlide>
    <FullpageSlide>
      <Clock />
    </FullpageSlide>
  </FullpageSection>
  <FullpageSection title="Seed Syllables">
    <Tam />
  </FullpageSection>
</Fullpage>
