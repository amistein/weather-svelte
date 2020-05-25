<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	:global(html) {
		font-size: 62.5%;
	}

	:global(.main) {
		max-width: 114rem;
		margin: 0 auto;
		/* background-color: #f7f7f7; */
		padding: 1rem;
	}
</style>

<script>
	import DateAndTime from './DateAndTime.svelte';
	import Dashboard from './Dashboard.svelte';
	import Summaries from './Summaries.svelte';
	import Hourly from './Hourly.svelte';
	import store, { initializeStore } from './store';

	const MS_IN_HOUR = 60 * 60 * 1000;
	const RELOAD_INTERVAL = 1; // hours

  setInterval(function(){
    window.location.reload(true)
	}, RELOAD_INTERVAL * MS_IN_HOUR);

	initializeStore();
	const { current } = store;
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@500&display=swap" rel="stylesheet">
</svelte:head>
<div class="main">
	<DateAndTime/>
	{#if $current}
		<Dashboard current={$current}/>
		<Hourly/>
		<Summaries forecast={$current.forecast}/>
	{/if}
</div>

