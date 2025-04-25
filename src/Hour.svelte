<style>
  .container {
    float: left;
    padding: .5rem;
    text-align: center;
    font-weight: 700;
    font-size: 1.4rem;
    width: 5.8rem;
  }

  .icon img {
    width: 4rem;
  }

  .condition {
    font-weight: 400;
    font-size: 1.2rem;
    height: 3rem;
  }

  .am-pm {
    font-size: 1rem;
  }

  .precip {
    text-align: right;
    font-weight: 400;
    font-size: 1.2rem;
    color: #1088b0;
    height: 1.5rem;
  }

  .temp {
    margin-top: .7rem;
    font-size: 1.6rem;
  }
</style>

<script>
  import { toNearest5 } from './utils';

  export let hour;
  export let amPm;
  export let precip;
  export let imgSrc;
  export let condition;
  export let temp;
  export let background;
</script>


<div class="container" style="{`background-color: ${background};`}">
  <p class="hour">{hour}<span class="am-pm">{amPm}</span></p>
  <p class="precip">{precip >= 30 ? toNearest5(precip) + '%' : ''}</p>
  <div class="icon">
    <img src={imgSrc}>
  </div>
  <p class="temp">{temp}</p>
  <p class="condition">{condition}</p>
</div>
