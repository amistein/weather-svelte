<style>
  .container {
    width: 33%;
    padding: 1.5rem;
    float:left
  }

  .current-condition {
    width: 12rem;
    /* margin-left: 2rem; */
    float: left;
  }

  .current-condition img {
    margin-top: 2rem;
    margin-left: 2rem;
    width: 10rem;
  }

  .feels-like {
    font-weight: 700;
    text-align: center;
    font-size: 1.6rem;
    margin-top: 1.6rem;
  }

  .condition {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin-left: 1rem;
  }

  .temp {
    margin-top: 3rem;
    height: 15rem;
    width: 15rem;
    border: 5px solid orangered;
    border-radius: 100px;
    float: left;
    position: relative;
  }

  .current-temp {
    font-size: 5.4rem;
    /* color: orangered; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .top:after {
    display: block;
    content: "";
    clear: both;
  }

  .humidity {
    font-size: 1.6rem;
    font-weight: 700;
    color: #495d71;
    position: absolute;
    top: -25%;
    left: 5%;
  }

  .quickie {
    width: 30rem;
    margin-top: 1.4rem;
    font-size: 1.6rem;
    text-align: center;
  }


  .quickie p :global(span) {
    margin-top: 10px;
    font-size: 15px;
    font-style: italic;
    font-weight: 700;
    text-transform: uppercase;
    color: #87c404;
  }

  .quickie p :global(span.cooler) {
    color: #15aadc;
  }

  .quickie p :global(span.warmer) {
    color: #f83;
  }
</style>

<script>
  export let current;
</script>

<div class="container">
  <div class="top">
    <div class="temp" style="{`border: 5px solid ${current.color};`}">
      <p class="current-temp" style="{`color: ${current.color};`}">{`${current.currentTemp}\u00B0`}</p>
      <p class="humidity">Humidity: <span>{current.humidity}%</span></p>
    </div>
    <div class="current-condition">
      <p class="condition">{current.condition}</p>
      <img src={current.img}>
      <p class="feels-like" style="{`color: ${current.feelsLikeColor};`}">Feels Like: {current.feelsLike}</p>
    </div>
  </div>
  <div class=quickie>
    <p>{@html current.quickie}</p>
  </div>
</div>
