<template>
  <div id="house-sensor">
    <header class="w-100 d-flex justify-content-around align-items-center">
      <router-link class="" to="/">H</router-link>
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

    <!--    <div class="month-nav">-->
    <!--      <ul class="nav nav-pills justify-content-center px-4 py-3">-->
    <!--        <li class="nav-item"><a class="nav-link type-data">Jan.</a></li>-->
    <!--        <li class="nav-item"><a class="nav-link type-data">Feb.</a></li>-->
    <!--        <li class="nav-item"><a class="nav-link type-data">Mar.</a></li>-->
    <!--        <li class="nav-item"><a class="nav-link type-data">Apr.</a></li>-->
    <!--        <li class="nav-item"><a class="nav-link type-data">May</a></li>-->
    <!--        <li class="nav-item"><a class="nav-link type-data">Jun.</a></li>-->
    <!--        <li class="nav-item"><a class="nav-link type-data">Jul.</a></li>-->
    <!--        <li class="nav-item"><a class="nav-link type-data">Aug.</a></li>-->
    <!--        <li class="nav-item"><a class="nav-link type-data">Sept.</a></li>-->
    <!--        <li class="nav-item"><a class="nav-link type-data">Oct.</a></li>-->
    <!--        <li class="nav-item"><a class="nav-link type-data">Nov.</a></li>-->
    <!--        <li class="nav-item"><a class="nav-link type-data">Dec.</a></li>-->
    <!--      </ul>-->
    <!--    </div>-->


    <div class="avg d-flex justify-content-center align-items-center">
      <!-- Month -->
      <!--      <div>{{ currentBox }}</div>-->
      <div class="text-center month w-100" v-if="currentBox && currentBox.monthData">
        <h4 class="d-flex align-items-center justify-content-center mb-2">{{ currentBox.monthData.title }}</h4>
        <div class="box-temp mb-2">
          <div class="temp-container d-flex flex-column d-lg-block justify-content-center">
            <span class="temp">{{ currentBox.monthData.avg.toFixed( 1 ) }}</span>
            <span class="unity">{{ humanizeMode( currentBox.monthData.unit ) }}</span>
          </div>
          <span class="temp-info">Avg.</span>
        </div>
        <div class="d-flex">
          <div class="box-temp small-box w-100 min">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentBox.monthData.min.toFixed( 1 ) }}</span>
              <span class="unity">{{ humanizeMode( currentBox.monthData.unit ) }}</span>
            </div>
            <span class="temp-info">Min.</span>
          </div>
          <div class="box-temp small-box w-100 max">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentBox.monthData.max.toFixed( 1 ) }}</span>
              <span class="unity">{{ humanizeMode( currentBox.monthData.unit ) }}</span>
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
            <span class="unity">{{ humanizeMode( currentBox.dayData.unit ) }}</span>
          </div>
          <span class="temp-info">Avg.</span>
        </div>
        <div class="d-flex">
          <div class="box-temp small-box w-100 min">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentBox.dayData.min.toFixed( 1 ) }}</span>
              <span class="unity">{{ humanizeMode( currentBox.dayData.unit ) }}</span>
            </div>
            <span class="temp-info">Min.</span>
          </div>
          <div class="box-temp small-box w-100 max">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentBox.dayData.max.toFixed( 1 ) }}</span>
              <span class="unity">{{ humanizeMode( currentBox.dayData.unit ) }}</span>
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
            <span class="unity">{{ humanizeMode( currentBox.nightData.unit ) }}</span>
          </div>
          <span class="temp-info">Avg.</span>
        </div>
        <div class="d-flex">
          <div class="box-temp small-box w-100 min">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentBox.nightData.min.toFixed( 1 ) }}</span>
              <span class="unity">{{ humanizeMode( currentBox.nightData.unit ) }}</span>
            </div>
            <span class="temp-info">Min.</span>
          </div>
          <div class="box-temp small-box w-100 max">
            <div class="temp-container d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentBox.nightData.max.toFixed( 1 ) }}</span>
              <span class="unity">{{ humanizeMode( currentBox.nightData.unit ) }}</span>
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
          <span class="unity">{{ humanizeMode( currentBox.nowData.unit ) }}</span>
        </div>
        <span class="temp-info">Current</span>
      </div>
    </div>

    <apexchart type="area" width="100%" height="250rem" :options="options" :series="series"></apexchart>

  </div>
</template>

<script lang="ts">
import BoxSensor               from '@/models/HouseSensors/BoxSensor';
import BoxSensorData           from '@/models/HouseSensors/BoxSensorData';
import { HouseSensorProvider } from '@/providers/houseSensor.provider';
import { Component, Vue }      from 'vue-property-decorator';

@Component
export default class HouseSensor extends Vue {
  static readonly MODE_TEMPERATURE: string = 'temp';
  static readonly MODE_LUMINOSITY: string  = 'lux';
  static readonly REFRESH_INTERVAL: number = 5000;

  public options: object               = {
    chart:  {
      sparkline: {
        enabled: true
      }
    },
    fill:   {
      colors:   '#00A3AC',
      type:     'gradient',
      gradient: {
        gradientFromColors: [ '#00A3AC' ],
        // gradientToColors:   [ '#rgba(0, 163, 172, 0.000)' ],
        // shadeIntensity:     1,
        opacityFrom: 1,
        opacityTo:   0
        // stops:              [ 0, 90, 100 ]
      }
    },
    stroke: {
      show:   true,
      curve:  'smooth',
      colors: [ '#FFFFFF80' ],
      width:  2
    },
    grid:   {
      show: false
    },
    xaxis:  {
      type:       'datetime',
      categories: [
        '01 Jan',
        '02 Jan',
        '03 Jan',
        '04 Jan',
        '05 Jan',
        '06 Jan',
        '07 Jan'
      ]
    }
  };
  public series: object[]              = [];
  public sensors?: { [ key: string ]: BoxSensor };
  public currentBox?: BoxSensor | null = null;
  public mode: string                  = HouseSensor.MODE_TEMPERATURE;
  public hsp: HouseSensorProvider      = new HouseSensorProvider();

  private pendingUpdate: number | undefined;

  // ---

  mounted() {
    this.hsp
        .getSensorsList()
        .then( ( list: { [ key: string ]: BoxSensor } ) => {
          this.sensors = list;
        } )
        .then( () => {
          if ( this.sensors && Object.keys( this.sensors ).length > 0 ) {
            const firstSensorID = Object.keys( this.sensors )[ 0 ];

            this.changeBox( this.sensors[ firstSensorID ] );
          }
        } );

    this.updateDayHistories();
  }

  // ---

  public changeSensor( way: boolean ) {
    if ( this.sensors && this.currentBox ) {
      const sensorsKeys  = Object.keys( this.sensors );
      const currentIndex = sensorsKeys.indexOf( this.currentBox.id );
      let nextIndex      = ( way )
                           ? currentIndex - 1
                           : currentIndex + 1 % ( sensorsKeys.length - 1 );

      if ( way && currentIndex - 1 < 0 )
        nextIndex = sensorsKeys.length - 1;

      if ( !way && sensorsKeys.length - 1 == currentIndex )
        nextIndex = 0;

      this.changeBox( this.sensors[ sensorsKeys[ nextIndex ] ] );
    }
  }

  public changeBox( box: BoxSensor ) {
    clearTimeout( this.pendingUpdate );

    this.currentBox = box;

    this.initFetchingSensorData();
  }

  public changeModeToTemperature() {
    if ( this.currentBox ) {
      this.mode = HouseSensor.MODE_TEMPERATURE;
      this.changeBox( this.currentBox );
      this.updateDayHistories();
    }
  }

  public changeModeToLuminosity() {
    if ( this.currentBox ) {
      this.mode = HouseSensor.MODE_LUMINOSITY;
      this.changeBox( this.currentBox );
      this.updateDayHistories();
    }
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

  public updateSensorData( id: string ) {
    return this.hsp.getSensorData( id, this.mode )
               .then( ( data: any ) => {
                 this.changeSensorsData( data );
               } );
  }

  public updateDayHistories() {
    return this.hsp
               .getDayHistories( this.mode )
               .then( ( histories: any ) => {
                 this.series = histories;
               } );
  }

  // ---

  public isOnTemperature(): boolean {
    return this.mode === HouseSensor.MODE_TEMPERATURE;
  }

  public isOnLuminosity(): boolean {
    return this.mode === HouseSensor.MODE_LUMINOSITY;
  }

  // ---
  public humanizeMode( unit: string ) {
    return unit === HouseSensor.MODE_TEMPERATURE
           ? '°C'
           : 'lux';
  }

  public initFetchingSensorData() {
    if ( this.currentBox )
      this.updateSensorData( this.currentBox.id )
          .then( this.updateDayHistories )
          .then( () => this.pendingUpdate = setTimeout( this.initFetchingSensorData, HouseSensor.REFRESH_INTERVAL ) );
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/house-sensor";
</style>