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

  import { storage } from "svelte-legos";
  import { writable } from "svelte/store";
  let isLogin = storage(writable(false), "isLogin");
  let loginPass = 0;
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

{#if !$isLogin}
  <div class="form-login">
    <form
      action=""
      on:submit={() => {
        if (loginPass == 101106) $isLogin = true;
      }}
    >
      <label for="">Input password</label>
      <input type="text" bind:value={loginPass} />
      <button class="button-5" type="submit">Submit</button>
    </form>
  </div>
{/if}

<style>
  .form-login {
    backdrop-filter: blur(0.5rem) brightness(0.4);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
  }
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }
  label,
  input {
    margin-bottom: 10px;
  }

  /* CSS */
  .button-5 {
    align-items: center;
    background-clip: padding-box;
    background-color: #fa6400;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui, -apple-system, system-ui, "Helvetica Neue",
      Helvetica, Arial, sans-serif;
    /* font-size: 16px; */
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
  }

  .button-5:hover,
  .button-5:focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  .button-5:hover {
    transform: translateY(-1px);
  }

  .button-5:active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
</style>
