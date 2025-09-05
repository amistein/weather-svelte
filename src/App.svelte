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

	initializeStore();
	const { details } = store;
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@500&display=swap" rel="stylesheet">
</svelte:head>
<div class="main">
	<DateAndTime/>
	{#if $details}
		<Dashboard current={$details}/>
		<Hourly/>
		<Summaries forecast={$details.forecast}/>
	{/if}
</div>

