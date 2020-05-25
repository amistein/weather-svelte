<style>
  .container {
    width: 8rem;
    padding: 1rem;
    text-align: center;
    float: left;
  }

  .day {
    font-size: 1.6rem;
    font-weight: 700;
    margin: .5rem;
  }
  
  .condition {
    height: 4rem;
  }

  .description {
    font-size: 1.6rem;
    height: 4rem;
    margin-bottom: .7rem;
  }

  .high {
    font-size: 2.6rem;
    font-weight: 700;
    margin-bottom: .5rem;
  }

  .low {
    font-size: 2.6rem;
    color: #696969;
  }
</style>

<script>
  export let day = 'Tomorrow';
  export let imgSrc = 'https://www.wunderground.com/i/c/v4/34.svg';
  export let description = 'PM Clouds';
  export let hi = '51\u00B0';
  export let lo = '44\u00B0';
</script>


<div class="container">
  <p class="day">{day}</p>
  <img src={imgSrc} alt="cond" class="condition">
  <p class="description">{description}</p>
  <p class="high">{hi}</p>
  <p class="low">{lo}</p>
</div>