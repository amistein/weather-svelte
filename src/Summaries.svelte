<style>
  .container:after {
    content: "";
    display: block;
    clear: both;
  }
</style>

<script>
  import Summary from './Summary.svelte';
  export let forecast;
</script>

<div class="container">
  {#each forecast as day,i}
    <Summary {...day} background={i & 1 ? '#f7f7f7' : '#e7e7e7'}/>
  {/each}
</div>
