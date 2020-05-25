<style>
  .container{
    width: 88rem;
    margin: 4rem auto;
  }

  .container:after {
    content: "";
    display: block;
    clear: both;
  }
</style>

<script>
  import Hour from './Hour.svelte';
  import store from './store';

  const { hourly } = store;

  // const hours = Array(15).fill().map(() => ({hour: '7am', imgSrc: "https://www.wunderground.com/static/i/c/v4/11.svg", condition: "Partly Cloudy", temp: 55}));
</script>

<div class="container">
  {#if $hourly}
    {#each $hourly as hour,i}
      <Hour {...hour} background={i & 1 ? '#f7f7f7' : '#e7e7e7'}/>
    {/each}
  {/if}
</div>
