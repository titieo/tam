<script>
  import dates from "../assets/dates.json";
  console.log(Object.entries(dates));
  import dayjs from "dayjs"; // ES 2015
  import Rows from "./Rows.svelte";
  const titles = [
    "Times",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let isMorning = dayjs().hour() <= 12;
  setInterval(() => {
    isMorning = dayjs().hour() <= 12;
  }, 3600000);
  //   isMorning = false;
  import "./Schedule.css";
</script>

<div class="icon {isMorning ? 'sun' : 'moon'}">
  {#if isMorning}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <g fill="currentColor"
        ><path d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z" /><path
          fill-rule="evenodd"
          d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"
          clip-rule="evenodd"
        /><path
          d="M3.67 3.716a.75.75 0 0 1 1.059-.048L6.95 5.7a.75.75 0 0 1-1.012 1.107L3.717 4.775a.75.75 0 0 1-.048-1.06Zm16.662 0a.75.75 0 0 1-.047 1.06l-2.223 2.03A.75.75 0 1 1 17.05 5.7l2.222-2.032a.75.75 0 0 1 1.06.048Zm-3.306 13.309a.75.75 0 0 1 1.06 0l2.223 2.222a.75.75 0 1 1-1.061 1.06l-2.222-2.222a.75.75 0 0 1 0-1.06Zm-10.051 0a.75.75 0 0 1 0 1.06l-2.222 2.223a.75.75 0 0 1-1.06-1.06l2.222-2.223a.75.75 0 0 1 1.06 0Z"
          opacity=".5"
        /></g
      ></svg
    >
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      ><g fill="currentColor"
        ><path
          fill-rule="evenodd"
          d="M22 12c0 5.523-4.477 10-10 10a9.986 9.986 0 0 1-3.321-.564A8.973 8.973 0 0 1 8 18a8.97 8.97 0 0 1 2.138-5.824A6.493 6.493 0 0 0 15.5 15a6.496 6.496 0 0 0 5.567-3.143c.24-.396.933-.32.933.143Z"
          clip-rule="evenodd"
          opacity=".5"
        /><path
          d="M2 12c0 4.359 2.789 8.066 6.679 9.435A8.973 8.973 0 0 1 8 18c0-2.221.805-4.255 2.138-5.824A6.47 6.47 0 0 1 9 8.5a6.496 6.496 0 0 1 3.143-5.567C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12Z"
        /></g
      ></svg
    >
  {/if}
</div>

<div class="container container-schedule">
  <table>
    <thead>
      <tr>
        {#each titles as day}
          <th>{day}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#if isMorning}
        <Rows data={dates.day} />
        <!-- <tr>
        <td colspan="8">☀️😪💤</td>
      </tr> -->
      {:else}
        <Rows data={dates.night} />
      {/if}
    </tbody>
  </table>
</div>

<style>
  /* white-space:nowrap; */
  .icon {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 6rem;
    animation: spin 20s infinite;
  }
  .sun {
    color: #f7b42e;
  }

  .moon {
    color: yellow;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
