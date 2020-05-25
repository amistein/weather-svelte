<style>
	.dates {
		font-size: 2.4rem;
	}

	.zmanim {
		font-size: 2rem;
		margin-top: 1rem;
		padding: .5rem;
		background-color: #ddd;
	}

	.dates:after, .zmanim:after {
		content: "";
		display: block;
		clear: both;
	}

	.third {
		width: 33%;
		float: left;
		font-weight: 700;
		text-align: center;
	}

	.hebrew {
		font-family: 'Frank Ruhl Libre', serif;
		font-size: 2.4rem
	}
</style>

<script>
	let displyedDate;
	let displayedTime;

	(function setDate() {
		const date = new Date()
		const options = { timeZone: 'America/New_York', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
		const dateInfo = date.toLocaleDateString('en-US', options).split(', ');
		const [weekday, monthDay, year, time] = dateInfo;

		displyedDate = `${monthDay}, ${year}`;
		displayedTime = time;

		setTimeout(setDate, 1000)
	})();

  const fetchZmanim = (async () => {
    const response = await fetch('https://ilnwn6h04c.execute-api.us-east-1.amazonaws.com/dev/getZmanim');
		const json = await response.json();
		const { sunrise, sunset, mincha, hebrewDate} = json;
    return json;
  })();
</script>

<div class="dates">
	<div class="third">
		<p class="secular">{displyedDate}</p>
	</div>
	<div class="third">
		<p class=time>{displayedTime}</p>
	</div>
	<div class="third">
		{#await fetchZmanim then response}
			<p class=hebrew>{response.hebrewDate}</p>
		{/await}
	</div>
</div>
<div class=zmanim>
	{#await fetchZmanim then response}
		<div class="third">
			<p><span>{response.sunset}&nbsp;&nbsp;</span><span class="hebrew">:שקיעה</span></p>
		</div>
		<div class="third">
			<p class="hebrew">דף יומי:&nbsp;&nbsp;{response.dafYomi}</p>
		</div>
		<div class="third">
			<p><span>{response.sunrise}&nbsp;&nbsp;</span><span class="hebrew">:הנץ החמה</span></p>
		</div>
	{/await}
</div>
