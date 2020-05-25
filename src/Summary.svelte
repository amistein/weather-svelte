<style>
	.container {
		width: 33%;
		float: left;
    font-size: 1.6rem;
    padding: 1.5rem;
    height: 17rem;
	}

  .top {
    margin-bottom: 1rem;
  }

  .top:after {
    content: "";
    display: block;
    clear: both;
  }

  .top img {
    float: left;
    width: 3.5rem;
  }

  .header {
    padding-left: 1rem;
    float: left;
  }

  .day {
    font-size: 1.4rem;
    text-transform: uppercase;
    display: block;
    font-weight: 700;
  }

  .date {
    font-size: 1.4rem;
    text-transform: uppercase;
    display: block;
    color: #a3a3a3;
    font-weight: 700;
  }

  .precip {
    margin-bottom: .5rem;
    color: #00f;
  }
</style>

<script>
  export let background;
  export let imgSrc;
  export let day;
  export let date;
  export let precip;
  export let summary;
  export let temp; // currently not used
</script>


<div class="container" style="{`background-color: ${background};`}">
  <div class="top">
    <img src={imgSrc}>
    <div class="header">
      <span class="day">{day}</span>
      <span class="date">{date}</span>
    </div>
  </div>
  <p class="precip">{precip}</p>
  <p>{summary}</p>
</div>
