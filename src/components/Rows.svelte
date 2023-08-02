<script>
  export let data;
  let inputData = Object.entries(data);
  console.log(inputData);
  inputData.forEach((time) => {
    time[1].forEach((ele, index) => {
      if (Array.isArray(ele)) {
        time[1][index] = {
          name: ele[0],
          rowspan: ele[1],
          class: ele[2] ? "extra-class" : "",
        };
      }
    });
    // console.log(e);
  });
</script>

{#each inputData as [key, content], i}
  <tr class={i == inputData.length - 1 ? "end-col" : ""}>
    <td>{key}</td>
    {#each content as ele, index}
      {#if typeof ele == "object"}
        <td
          rowspan={ele.rowspan}
          colspan={ele.colspan}
          class="{ele.class} {index == content.length - 1 && !ele.notEndRow
            ? 'end-row'
            : ''}">{ele.name}</td
        >
      {:else}
        <td class={index == content.length - 1 && index >= 1 ? "end-row" : ""}
          >{ele ? ele : ""}</td
        >
      {/if}
    {/each}
  </tr>
{/each}

<style>
  .extra-class {
    font-weight: bold;

    /** TEXT GRADIENT */
    color: #96329c;
    background-image: -webkit-linear-gradient(
      45deg,
      #96329c 23%,
      #db3e0a 87%,
      #b2b9b4 51%
    );
    background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }
</style>
