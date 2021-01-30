<template>
  <div id="house-sensor">
    <header class="w-100 d-flex justify-content-around align-items-center">
      <div class="h-100 p-3 pl-5 left" v-on:click="changeSensor(true)">
        <img src="assets/img/chart/back.png" class="img-fluid h-100">
      </div>
      <h3 class="m-0 w-100 smart-name" v-if="currentBox">{{ currentBox.name }}</h3>
      <div class="h-100 p-3 pr-5 right" v-on:click="changeSensor(false)">
        <img src="assets/img/chart/back.png" class="img-fluid h-100">
      </div>
    </header>

    <div class="month-nav">
      <ul class="nav nav-pills justify-content-center px-4 py-3">
        <li class="nav-item">
          <a class="nav-link type-data" :class="{active: isOnTemperature()}" v-on:click="changeModeToTemperature()">Temperatures</a>
        </li>
        <li class="nav-item">
          <a class="nav-link type-data" :class="{active: isOnLuminosity()}" v-on:click="changeModeToLuminosity()">Luminosity</a>
        </li>
      </ul>
    </div>

    <div class="avg d-flex justify-content-center align-items-center">
      <!-- Month -->
      <!--      <div>{{ currentBox }}</div>-->
      <div class="text-center month w-100" v-if="currentBox && currentBox.monthData">
        <h4 class="d-flex align-items-center justify-content-center mb-2">{{ currentBox.monthData.title }}</h4>
        <div class="box-temp mb-2">
          <div class="temp-container d-flex flex-column d-lg-block justify-content-center">
            <span class="temp">{{ currentBox.monthData.avg.toFixed( 1 ) }}</span>
            <span class="unity">{{ currentBox.monthData.unit }}</span>
          </div>
          <span class="temp-info">Avg.</span>
        </div>
        <div class="d-flex">
          <div class="box-temp small-box w-100 min">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentBox.monthData.min.toFixed( 1 ) }}</span>
              <span class="unity">{{ currentBox.monthData.unit }}</span>
            </div>
            <span class="temp-info">Min.</span>
          </div>
          <div class="box-temp small-box w-100 max">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentBox.monthData.max.toFixed( 1 ) }}</span>
              <span class="unity">{{ currentBox.monthData.unit }}</span>
            </div>
            <span class="temp-info">Max.</span>
          </div>
        </div>
        <div class="h-line"></div>
      </div>

      <!-- Day -->
      <div class="text-center day w-100" v-if="currentBox && currentBox.dayData">
        <h4 class="d-flex align-items-center justify-content-center mb-2">
          <img src="assets/img/chart/sun.png" class="h-100" /></h4>
        <div class="box-temp mb-2">
          <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
            <span class="temp">{{ currentBox.dayData.avg.toFixed( 1 ) }}</span>
            <span class="unity">{{ currentBox.dayData.unit }}</span>
          </div>
          <span class="temp-info">Avg.</span>
        </div>
        <div class="d-flex">
          <div class="box-temp small-box w-100 min">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentBox.dayData.min.toFixed( 1 ) }}</span>
              <span class="unity">{{ currentBox.dayData.unit }}</span>
            </div>
            <span class="temp-info">Min.</span>
          </div>
          <div class="box-temp small-box w-100 max">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentBox.dayData.max.toFixed( 1 ) }}</span>
              <span class="unity">{{ currentBox.dayData.unit }}</span>
            </div>
            <span class="temp-info">Max.</span>
          </div>
        </div>
        <div class="h-line"></div>
      </div>

      <!-- Night -->
      <div class="text-center night w-100" v-if="currentBox && currentBox.nightData">
        <h4 class="d-flex align-items-center justify-content-center mb-2">
          <img src="assets/img/chart/moon.png" class="h-100" /></h4>
        <div class="box-temp mb-2">
          <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
            <span class="temp">{{ currentBox.nightData.avg.toFixed( 1 ) }}</span>
            <span class="unity">{{ currentBox.nightData.unit }}</span>
          </div>
          <span class="temp-info">Avg.</span>
        </div>
        <div class="d-flex">
          <div class="box-temp small-box w-100 min">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentBox.nightData.min.toFixed( 1 ) }}</span>
              <span class="unity">{{ currentBox.nightData.unit }}</span>
            </div>
            <span class="temp-info">Min.</span>
          </div>
          <div class="box-temp small-box w-100 max">
            <div class="temp-container d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentBox.nightData.max.toFixed( 1 ) }}</span>
              <span class="unity">{{ currentBox.nightData.unit }}</span>
            </div>
            <span class="temp-info">Max.</span>
          </div>
        </div>
      </div>
    </div>

    <div class="current  text-center" v-if="currentBox && currentBox.nowData">
      <div class="box-temp">
        <div class="temp-container">
          <span class="temp">{{ currentBox.nowData.current.toFixed( 1 ) }}</span>
          <span class="unity">{{ currentBox.nowData.unit }}</span>
        </div>
        <span class="temp-info">Current</span>
      </div>
    </div>

    <apexchart type="area" width="100%" height="400rem" :options="options" :series="series"></apexchart>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BoxSensor from '@/models/HouseSensors/BoxSensor'
import BoxSensorData from '@/models/HouseSensors/BoxSensorData';

@Component
export default class HouseSensor extends Vue {
  static readonly MODE_TEMPERATURE: string = 'temp';
  static readonly MODE_LUMINOSITY: string  = 'lux';
  static readonly REFRESH_INTERVAL: number = 1000;

  public options: object               = {
    dataLabels: {
      enabled: false
    },
    fill:       {
      type:     "gradient",
      gradient: {
        gradientFromColors: [ 'rgba(0, 163, 172, 1.000)' ],
        gradientToColors:   [ '#rgba(0, 163, 172, 0.000)' ],
        shadeIntensity:     1,
        opacityFrom:        0.7,
        opacityTo:          0.9,
        stops:              [ 0, 90, 100 ]
      }
    },
    stroke:     {
      show:   true,
      curve:  'smooth',
      colors: [ '#FFFFFF80' ],
      width:  1
    },
    grid:       {
      show: false,
    },
    yaxis:      {
      show: false
    },
    xaxis:      {
      labels:     {
        style: {
          colors: '#E95',
        }
      },
      axisBorder: {
        color: '#F5C',
      },
      axisTicks:  {
        color: '#05D'
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
  public series: object[]              = [
    {
      name: "Series 1",
      data: [ 45, 52, 38, 45, 19, 23, 2 ]
    }
  ];
  public sensors?: { [ key: string ]: BoxSensor };
  public currentBox?: BoxSensor | null = null;
  public mode: string                  = HouseSensor.MODE_TEMPERATURE;

  private interval: number | undefined;

  // ---

  mounted() {
    this.sensors = {
      '012ad-dd5s': new BoxSensor( 'The sensor', '012ad-dd5s' ),
      'dd5s-012ad': new BoxSensor( '2 sensor', 'dd5s-012ad' ),
      '454f-ddsz':  new BoxSensor( 'The god', '454f-ddsz' )
    };

    if ( this.sensors.hasOwnProperty( '012ad-dd5s' ) )
      this.changeBox( this.sensors[ '012ad-dd5s' ] )
  }

  // ---

  public changeSensor( way: boolean ) {
    if ( this.sensors && this.currentBox ) {
      const sensorsKeys  = Object.keys( this.sensors );
      const currentIndex = sensorsKeys.indexOf( this.currentBox.id );
      let nextIndex      = (way)
          ? currentIndex - 1
          : currentIndex + 1 % (sensorsKeys.length - 1);

      if ( way && currentIndex - 1 < 0 )
        nextIndex = sensorsKeys.length - 1;

      if ( !way && sensorsKeys.length - 1 == currentIndex )
        nextIndex = 0;

      this.changeBox( this.sensors[ sensorsKeys[ nextIndex ] ] )
    }
  }

  public changeBox( box: BoxSensor ) {
    this.currentBox = box;

    // --- FAKE - Test
    let i = 0;
    clearInterval( this.interval );
    this.interval = setInterval( () => {
      if ( this.currentBox ) {
        const unit = (this.isOnTemperature())
            ? '°C'
            : 'lux'
        const data = {
          unit:    unit,
          month:   {
            min: -5.8 + i * .1,
            max: 33.6 + i * .1,
            avg: 20.3 + i * .1
          },
          day:     {
            min: -10.5 + i * .1,
            max: 25.6 + i * .1,
            avg: 22.1 + i * .1
          },
          night:   {
            min: 0.6 + i * .1,
            max: 39.5 + i * .1,
            avg: 24.6 + i * .1
          },
          current: 20.0 + i * .1
        };

        this.changeSensorsData( data );

        i++;
        // console.log( i, this.currentBox );
      }
    }, HouseSensor.REFRESH_INTERVAL );
    // --- ./FAKE - Test
  }

  public changeModeToTemperature() {
    this.mode = HouseSensor.MODE_TEMPERATURE;
  }

  public changeModeToLuminosity() {
    this.mode = HouseSensor.MODE_LUMINOSITY;
  }

  public changeSensorsData( dataIn: any ) {
    if ( this.currentBox ) {

      this.currentBox.monthData = new BoxSensorData(
          'Month', dataIn.unit, dataIn.month.min, dataIn.month.max, dataIn.month.avg
      );

      this.currentBox.dayData = new BoxSensorData(
          'Day', dataIn.unit, dataIn.day.min, dataIn.day.max, dataIn.day.avg
      );

      this.currentBox.nightData = new BoxSensorData(
          'Night', dataIn.unit, dataIn.night.min, dataIn.night.max, dataIn.night.avg
      );

      this.currentBox.nowData = new BoxSensorData(
          'Now', dataIn.unit, 0, 0, 0, dataIn.current
      );
    }
  }

  // ---

  public isOnTemperature(): boolean {
    return this.mode === HouseSensor.MODE_TEMPERATURE;
  }

  public isOnLuminosity(): boolean {
    return this.mode === HouseSensor.MODE_LUMINOSITY;
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/house-sensor";
</style>