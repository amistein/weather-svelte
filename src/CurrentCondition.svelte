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
    font-size: 1.4rem;
    margin-left: 2rem;
  }

  .temp {
    height: 15rem;
    width: 15rem;
    border: 5px solid orangered;
    border-radius: 100px;
    float: left;
    position: relative;
  }

  .temp > p {
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
  // function tempToRGB(temp) {
  //   const maxTemp = 100;
  //   const minTemp = 10;
  //   const redVal = 255 / (maxTemp - minTemp) * (temp - minTemp);
  //   const blueVal = 255 / (maxTemp - minTemp) * (maxTemp - temp);

  //   return `rgb(${redVal}, 0, ${blueVal})`;
  // }

  export let current;
</script>

<div class="container">
  <div class="top">
    <div class="temp" style="{`border: 5px solid ${current.color};`}">
      <p style="{`color: ${current.color};`}">{`${current.currentTemp}\u00B0`}</p>
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
