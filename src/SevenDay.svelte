<style>
  .container {
    width: 67%;
    padding: 1.5rem;
    padding-left: 0;
    float: left;
  }

  .inner {
    /* width: 60rem; */
    margin: 0 auto;
  }

  .inner:after {
    content: "";
    display: block;
    clear: both;
  }
</style>

<script>
  import Day from './Day.svelte';
  import store from './store';

  const { days } = store;
</script>

<div class="container">
  <div class="inner">
    {#if $days}
      {#each $days as daySummary}
        <Day {...daySummary}/>
      {/each}
    {/if}
  </div>
</div>

