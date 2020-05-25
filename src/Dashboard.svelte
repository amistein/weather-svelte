<style>
  .container {
    margin-top: 3rem;
  }

  .container:after {
    content: "";
    display: block;
    clear: both;
  }
</style>

<script>
  export let current;
  import CurrentCondition from './CurrentCondition.svelte';
  import SevenDay from './SevenDay.svelte';
</script>

<div class="container">
  <CurrentCondition {current}/>
  <SevenDay/>
</div>