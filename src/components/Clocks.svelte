<script>
  import dayjs from "dayjs";
  import App from "../App.svelte";
  let time = dayjs();
  let s = dayjs().second(),
    h = dayjs().hour(),
    m = dayjs().minute();
  let hDeg = h * 30 + m * (360 / 720),
    mDeg = m * 6 + s * (360 / 3600),
    sDeg = s * 6;
  setInterval(() => {
    time = dayjs();
    s = dayjs().second();
    h = dayjs().hour();
    m = dayjs().minute();
    hDeg = h * 30 + m * (360 / 720);
    mDeg = m * 6 + s * (360 / 3600);
    sDeg = s * 6;
  }, 1000);
</script>

<div class="clock">
  <div>
    <div class="info date">{dayjs().format("DD/MM/YYYY")}</div>
    <div class="info day">{dayjs().format("ddd")}</div>
  </div>
  <div class="dot" />
  <div>
    <div class="hour-hand" style="transform:rotate({hDeg}deg)" />
    <div class="minute-hand" style="transform:rotate({mDeg}deg)" />
    <div class="second-hand" style="transform:rotate({sDeg}deg)" />
  </div>
  <div>
    <span class="h3">3</span>
    <span class="h6">6</span>
    <span class="h9">9</span>
    <span class="h12">12</span>
  </div>
  <!-- <div class="diallines" /> -->
  {#each Array(60) as _, i}
    <div class="diallines" style="transform:rotate({6 * i}deg)" />
  {/each}
  <!-- for (var i = 1; i < 60; i++) { -->
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");
  .clock {
    background: #ececec;
    width: 300px;
    height: 300px;
    /* margin: 8% auto 0; */
    border-radius: 50%;
    border: 14px solid #333;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* position: relative; */
    box-shadow: 0 2vw 4vw -1vw rgba(0, 0, 0, 0.8);
  }

  .clock,
  .clock * {
    box-sizing: content-box;
  }

  .dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #ccc;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    z-index: 10;
    box-shadow: 0 2px 4px -1px black;
  }

  .hour-hand {
    position: absolute;
    z-index: 5;
    width: 4px;
    height: 65px;
    background: #333;
    top: 79px;
    transform-origin: 50% 72px;
    left: 50%;
    margin-left: -2px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }

  .minute-hand {
    position: absolute;
    z-index: 6;
    width: 4px;
    height: 100px;
    background: #666;
    top: 46px;
    left: 50%;
    margin-left: -2px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    transform-origin: 50% 105px;
  }

  .second-hand {
    position: absolute;
    z-index: 7;
    width: 2px;
    height: 120px;
    background: gold;
    top: 26px;
    left: 50%;
    margin-left: -1px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    transform-origin: 50% 125px;
  }

  span {
    display: inline-block;
    position: absolute;
    color: #333;
    font-size: 22px;
    font-family: "Poiret One";
    font-weight: 700;
    z-index: 4;
  }

  .h12 {
    top: 30px;
    left: 50%;
    margin-left: -9px;
  }
  .h3 {
    top: 140px;
    right: 30px;
  }
  .h6 {
    bottom: 30px;
    left: 50%;
    margin-left: -5px;
  }
  .h9 {
    left: 32px;
    top: 140px;
  }

  .diallines {
    position: absolute;
    z-index: 2;
    width: 2px;
    height: 15px;
    background: #666;
    left: 50%;
    margin-left: -1px;
    transform-origin: 50% 150px;
  }
  .diallines:nth-of-type(5n) {
    position: absolute;
    z-index: 2;
    width: 4px;
    height: 25px;
    background: #666;
    left: 50%;
    margin-left: -1px;
    transform-origin: 50% 150px;
  }

  .info {
    position: absolute;
    width: 120px;
    height: 20px;
    border-radius: 7px;
    background: #ccc;
    text-align: center;
    line-height: 20px;
    color: #000;
    font-size: 11px;
    top: 200px;
    left: 50%;
    margin-left: -60px;
    font-family: "Poiret One";
    font-weight: 700;
    z-index: 3;
    letter-spacing: 3px;
    margin-left: -60px;
    left: 50%;
  }
  .date {
    top: 80px;
  }
  .day {
    top: 200px;
  }
</style>
