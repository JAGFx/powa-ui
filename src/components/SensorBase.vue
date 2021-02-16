<template>
  <div class="sensor">
    <header class="w-100 d-flex justify-content-around align-items-center">
      <router-link class="" to="/">H</router-link>
      <div class="h-100 p-3 pl-5 left" v-on:click="switchSensor(true)" v-if="sensorsLength() > 1">
        <!---->
        <img src="assets/img/chart/back.png" class="img-fluid h-100">
      </div>
      <h3 class="m-0 w-100 smart-name" v-if="currentSensor">{{ currentSensor.name }}</h3>
      <div class="h-100 p-3 pr-5 right" v-on:click="switchSensor(false)" v-if="sensorsLength() > 1">
        <!--v-on:click="changeSensor(false)"-->
        <img src="assets/img/chart/back.png" class="img-fluid h-100">
      </div>
    </header>

    <!--    <div class="month-nav">-->
    <!--      <ul class="nav nav-pills justify-content-center px-4 py-3">-->
    <!--        <li class="nav-item">-->
    <!--          <a class="nav-link type-data active"  v-on:click="changeModeToTemperature()">Temperatures</a>-->
    <!--        </li>-->
    <!--        <li class="nav-item">-->
    <!--          <a class="nav-link type-data" :class="{active: isOnLuminosity()}" v-on:click="changeModeToLuminosity()">Luminosity</a>-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--    </div>-->

    <div class="month-nav">
      <ul class="nav nav-pills justify-content-center px-4 py-3">
        <li class="nav-item"><a class="nav-link type-data">Jan.</a></li>
        <li class="nav-item"><a class="nav-link type-data">Feb.</a></li>
        <li class="nav-item"><a class="nav-link type-data">Mar.</a></li>
        <li class="nav-item"><a class="nav-link type-data">Apr.</a></li>
        <li class="nav-item"><a class="nav-link type-data">May</a></li>
        <li class="nav-item"><a class="nav-link type-data">Jun.</a></li>
        <li class="nav-item"><a class="nav-link type-data">Jul.</a></li>
        <li class="nav-item"><a class="nav-link type-data">Aug.</a></li>
        <li class="nav-item"><a class="nav-link type-data">Sept.</a></li>
        <li class="nav-item"><a class="nav-link type-data">Oct.</a></li>
        <li class="nav-item"><a class="nav-link type-data">Nov.</a></li>
        <li class="nav-item"><a class="nav-link type-data">Dec.</a></li>
      </ul>
    </div>


    <div class="avg d-flex justify-content-center align-items-center" v-if="currentSensor">
      <!-- Month -->
      <!--      <div>{{ currentBox }}</div>-->
      <div class="text-center month w-100">
        <h4 class="d-flex align-items-center justify-content-center mb-2">Month</h4>
        <div class="box-temp mb-2">
          <div class="temp-container d-flex flex-column d-lg-block justify-content-center">
            <span class="temp">{{ currentSensor.monthRange.avg.toFixed( 1 ) }}</span>
            <span class="unity">{{ currentSensor.unitHumanized() }}</span>
          </div>
          <span class="temp-info">Avg.</span>
        </div>
        <div class="d-flex">
          <div class="box-temp small-box w-100 min">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentSensor.monthRange.min.toFixed( 1 ) }}</span>
              <span class="unity">{{ currentSensor.unitHumanized() }}</span>
            </div>
            <span class="temp-info">Min.</span>
          </div>
          <div class="box-temp small-box w-100 max">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentSensor.monthRange.min.toFixed( 1 ) }}</span>
              <span class="unity">{{ currentSensor.unitHumanized() }}</span>
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
            <span class="temp">{{ currentSensor.dayRange.avg.toFixed( 1 ) }}</span>
            <span class="unity">{{ currentSensor.unitHumanized() }}</span>
          </div>
          <span class="temp-info">Avg.</span>
        </div>
        <div class="d-flex">
          <div class="box-temp small-box w-100 min">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentSensor.dayRange.min.toFixed( 1 ) }}</span>
              <span class="unity">{{ currentSensor.unitHumanized() }}</span>
            </div>
            <span class="temp-info">Min.</span>
          </div>
          <div class="box-temp small-box w-100 max">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentSensor.dayRange.max.toFixed( 1 ) }}</span>
              <span class="unity">{{ currentSensor.unitHumanized() }}</span>
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
            <span class="temp">{{ currentSensor.nightRange.avg.toFixed( 1 ) }}</span>
            <span class="unity">{{ currentSensor.unitHumanized() }}</span>
          </div>
          <span class="temp-info">Avg.</span>
        </div>
        <div class="d-flex">
          <div class="box-temp small-box w-100 min">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentSensor.nightRange.min.toFixed( 1 ) }}</span>
              <span class="unity">{{ currentSensor.unitHumanized() }}</span>
            </div>
            <span class="temp-info">Min.</span>
          </div>
          <div class="box-temp small-box w-100 max">
            <div class="temp-container d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ currentSensor.nightRange.max.toFixed( 1 ) }}</span>
              <span class="unity">{{ currentSensor.unitHumanized() }}</span>
            </div>
            <span class="temp-info">Max.</span>
          </div>
        </div>
      </div>
    </div>

    <div class="current  text-center" v-if="currentSensor">
      <div class="box-temp">
        <div class="temp-container">
          <span class="temp">{{ currentSensor.current.toFixed( 1 ) }}</span>
          <span class="unity">{{ currentSensor.unitHumanized() }}</span>
        </div>
        <span class="temp-info">Current</span>
      </div>
    </div>

    <!--    <apexchart type="area" width="100%" height="250rem" :options="options" :series="series"></apexchart>-->

  </div>
</template>

<script lang="ts">
import Sensor                   from '@/models/Sensors/Sensor';
import { SensorProvider }       from '@/providers/sensor.provider';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SensorBase extends Vue {
  static readonly REFRESH_INTERVAL: number = 5000;

  //---

  public sensors?: { [ key: string ]: Sensor };
  public currentSensor?: Sensor | null  = null;
  public sensorProvider: SensorProvider = new SensorProvider();
  public pendingUpdate: number | undefined;

  // public options: object  = {
  //   chart:  {
  //     sparkline: {
  //       enabled: true
  //     }
  //   },
  //   fill:   {
  //     colors:   '#00A3AC',
  //     type:     'gradient',
  //     gradient: {
  //       gradientFromColors: [ '#00A3AC' ],
  //       opacityFrom:        1,
  //       opacityTo:          0
  //     }
  //   },
  //   stroke: {
  //     show:   true,
  //     curve:  'smooth',
  //     colors: [ '#FFFFFF80' ],
  //     width:  2
  //   },
  //   xaxis:  {
  //     type: 'datetime'
  //   }
  // };
  // public series: object[] = [
  //   {
  //     name: 'Feb. ',
  //     data: [
  //       [ 1486684800000, 52 ],
  //       [ 1486771200000, 45 ],
  //       [ 1486857600000, 87 ],
  //       [ 1486944000000, 1 ],
  //       [ 1487030400000, 62 ],
  //       [ 1487116800000, 12 ]
  //     ]
  //   } ];

  // --

  @Prop( { default: Sensor.UNIT_WATT_HOUR } ) private target_unit!: string;

  // --

  mounted() {
    this.sensorProvider
        .getSensorsList( this.target_unit )
        .then( ( list: { [ key: string ]: Sensor } ) => {
          this.sensors = list;
        } )
        .then( () => {
          // console.log( this.sensors );
          if ( this.sensors && this.sensorsLength() > 0 ) {
            const firstSensorID = Object.keys( this.sensors )[ 0 ];

            this.changeSensor( this.sensors[ firstSensorID ] );
          }
        } );
  }

  destroy() {
    clearTimeout( this.pendingUpdate );
  }

  // --

  public sensorsLength() {
    return ( this.sensors )
           ? Object.keys( this.sensors ).length
           : 0;
  }

  public changeSensor( sensor: Sensor ) {
    clearTimeout( this.pendingUpdate );

    this.currentSensor = sensor;

    this.initFetchingSensorData();
  }

  public updateSensorData( id: string ) {
    return this.sensorProvider
               .getSensorData( id )
               .then( ( sensor: Sensor ) => {
                 if ( this.currentSensor /*&& this.sensors */ ) {
                   // this.sensors[ sensor.id ] = sensor;
                   this.currentSensor = sensor;
                   // this.changeSensor( sensor );
                 }
               } );
  }

  public initFetchingSensorData() {
    if ( this.currentSensor )
      this.updateSensorData( this.currentSensor.id )
          // .then( this.updateDayHistories )
          .then( () => this.pendingUpdate = setTimeout( this.initFetchingSensorData, SensorBase.REFRESH_INTERVAL ) );
  }

  // --

  public switchSensor( way: boolean ) {
    if ( this.sensors && this.currentSensor ) {
      const sensorsKeys  = Object.keys( this.sensors );
      const currentIndex = sensorsKeys.indexOf( this.currentSensor.id );
      let nextIndex      = ( way )
                           ? currentIndex - 1
                           : currentIndex + 1 % ( sensorsKeys.length );
      // console.log( sensorsKeys, currentIndex, nextIndex );
      if ( way && currentIndex - 1 < 0 )
        nextIndex = sensorsKeys.length - 1;

      if ( !way && sensorsKeys.length - 1 == currentIndex )
        nextIndex = 0;


      this.changeSensor( this.sensors[ sensorsKeys[ nextIndex ] ] );
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/sensor";
</style>
