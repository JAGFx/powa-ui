<template>
  <div id="house-sensor">
    <header class="w-100 d-flex justify-content-around align-items-center">
      <!--      <div class="h-100 p-3 pl-5 left" >-->
      <!--        <img src="assets/img/chart/back.png" class="img-fluid h-100" >-->
      <!--      </div >-->
      <h3 class="m-0 w-100 smart-name">SmartBox15</h3>
      <!--      <div class="h-100 p-3 pr-5 right" >-->
      <!--        <img src="assets/img/chart/back.png" class="img-fluid h-100" >-->
      <!--      </div >-->
    </header>


    <div class="month-nav">
      <ul class="nav nav-pills justify-content-center px-4 py-3">
        <li class="nav-item">
          <a class="nav-link active type-data" data-type="tmp">Temperatures</a>
        </li>
        <li class="nav-item">
          <a class="nav-link type-data" data-type="lux">Luminosity</a>
        </li>
      </ul>
    </div>

    <div class="avg d-flex justify-content-center align-items-center">
      <!-- Month -->
      <div class="text-center month w-100">
        <h4 class="d-flex align-items-center justify-content-center mb-2">Month</h4>
        <div class="box-temp mb-2">
          <div class="temp-container d-flex flex-column d-lg-block justify-content-center">
            <span class="temp">20.5</span>
            <span class="unity">°C</span>
          </div>
          <span class="temp-info">Avg.</span>
        </div>
        <div class="d-flex">
          <div class="box-temp small-box w-100 min">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">-5.8</span>
              <span class="unity">°C</span>
            </div>
            <span class="temp-info">Min.</span>
          </div>
          <div class="box-temp small-box w-100 max">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">33.6</span>
              <span class="unity">°C</span>
            </div>
            <span class="temp-info">Max.</span>
          </div>
        </div>
        <div class="h-line"></div>
      </div>

      <!-- Day -->
      <div class="text-center day w-100">
        <h4 class="d-flex align-items-center justify-content-center mb-2">
          <img src="assets/img/chart/sun.png" class="h-100" /></h4>
        <div class="box-temp mb-2">
          <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
            <span class="temp">20.5</span>
            <span class="unity">°C</span>
          </div>
          <span class="temp-info">Avg.</span>
        </div>
        <div class="d-flex">
          <div class="box-temp small-box w-100 min">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">-5.8</span>
              <span class="unity">°C</span>
            </div>
            <span class="temp-info">Min.</span>
          </div>
          <div class="box-temp small-box w-100 max">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">33.6</span>
              <span class="unity">°C</span>
            </div>
            <span class="temp-info">Max.</span>
          </div>
        </div>
        <div class="h-line"></div>
      </div>

      <!-- Night -->
      <div class="text-center night w-100">
        <h4 class="d-flex align-items-center justify-content-center mb-2">
          <img src="assets/img/chart/moon.png" class="h-100" /></h4>
        <div class="box-temp mb-2">
          <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
            <span class="temp">20.5</span>
            <span class="unity">°C</span>
          </div>
          <span class="temp-info">Avg.</span>
        </div>
        <div class="d-flex">
          <div class="box-temp small-box w-100 min">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">-5.8</span>
              <span class="unity">°C</span>
            </div>
            <span class="temp-info">Min.</span>
          </div>
          <div class="box-temp small-box w-100 max">
            <div class="temp-container d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">33.6</span>
              <span class="unity">°C</span>
            </div>
            <span class="temp-info">Max.</span>
          </div>
        </div>
      </div>
    </div>

    <div class="current  text-center">
      <div class="box-temp">
        <div class="temp-container">
          <span class="temp">20.5</span>
          <span class="unity">°C</span>
        </div>
        <span class="temp-info">Current</span>
      </div>
    </div>

    <apexchart type="area" width="100%" height="400rem"  :options="options" :series="series"></apexchart>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HouseSensor extends Vue {
  public options: object = {
    dataLabels: {
      enabled: false
    },
    fill: {
      type: "gradient",
      gradient: {
        gradientFromColors: ['rgba(0, 163, 172, 1.000)'],
        gradientToColors: ['#rgba(0, 163, 172, 0.000)'],
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      colors: ['#ffffff80'],
      width: 1
    },
    grid: {
      show:        false,
    },
    yaxis: {
      show: false
    },
    xaxis: {
      labels: {
        style: {
          colors: '#e95',
        }
      },
      axisBorder: {
        color: '#f5c',
      },
      axisTicks: {
        color: '#05d'
      },
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan"
      ]
    }
  }

  public series: object[] = [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2]
    }
  ];
}
</script>

<style lang="scss">
@import "src/assets/scss/house-sensor";
</style>