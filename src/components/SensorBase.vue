<template>
  <div class="sensor">
    <header class="w-100 d-flex justify-content-around align-items-center">
      <router-link class="" to="/">H</router-link>
      <div class="h-100 p-3 pl-5 left" v-on:click="switchSensor(true)" v-if="sensorsLength() > 1">
        <img src="assets/img/chart/back.png" class="img-fluid h-100">
      </div>
      <h3 class="m-0 w-100 smart-name" v-if="currentSensor">{{ currentSensor.name }}</h3>
      <div class="h-100 p-3 pr-5 right" v-on:click="switchSensor(false)" v-if="sensorsLength() > 1">
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


    <div class="avg d-flex justify-content-center align-items-center" v-if="currentSensor">
      <!-- Month -->
      <!--      <div>{{ currentBox }}</div>-->
      <div class="text-center month w-100">
        <h4 class="d-flex align-items-center justify-content-center mb-2">Month</h4>
        <div class="box-temp mb-2">
          <div class="temp-container d-flex flex-column d-lg-block justify-content-center">
            <span class="temp">{{ displayValue( currentSensor.monthRange.avg ) }}</span>
            <span class="unity">{{ currentSensor.unitHumanized() }}</span>
          </div>
          <span class="temp-info">Avg.</span>
        </div>
        <div class="d-flex">
          <div class="box-temp small-box w-100 min">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ displayValue( currentSensor.monthRange.min ) }}</span>
              <span class="unity">{{ currentSensor.unitHumanized() }}</span>
            </div>
            <span class="temp-info">Min.</span>
          </div>
          <div class="box-temp small-box w-100 max">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ displayValue( currentSensor.monthRange.max ) }}</span>
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
            <span class="temp">{{ displayValue( currentSensor.dayRange.avg ) }}</span>
            <span class="unity">{{ currentSensor.unitHumanized() }}</span>
          </div>
          <span class="temp-info">Avg.</span>
        </div>
        <div class="d-flex">
          <div class="box-temp small-box w-100 min">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ displayValue( currentSensor.dayRange.min ) }}</span>
              <span class="unity">{{ currentSensor.unitHumanized() }}</span>
            </div>
            <span class="temp-info">Min.</span>
          </div>
          <div class="box-temp small-box w-100 max">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ displayValue( currentSensor.dayRange.max ) }}</span>
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
            <span class="temp">{{ displayValue( currentSensor.nightRange.avg ) }}</span>
            <span class="unity">{{ currentSensor.unitHumanized() }}</span>
          </div>
          <span class="temp-info">Avg.</span>
        </div>
        <div class="d-flex">
          <div class="box-temp small-box w-100 min">
            <div class="temp-container  d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ displayValue( currentSensor.nightRange.min ) }}</span>
              <span class="unity">{{ currentSensor.unitHumanized() }}</span>
            </div>
            <span class="temp-info">Min.</span>
          </div>
          <div class="box-temp small-box w-100 max">
            <div class="temp-container d-flex flex-column d-lg-block justify-content-center">
              <span class="temp">{{ displayValue( currentSensor.nightRange.max ) }}</span>
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
          <span class="temp">{{ displayValue( currentSensor.current ) }}</span>
          <span class="unity">{{ currentSensor.unitHumanized() }}</span>
        </div>
        <span class="temp-info">Current</span>
      </div>
    </div>

    <apexchart :type="chartType" width="100%" height="250rem" :options="chartOptions" :series="chartData"></apexchart>

    <small class="last-update">{{ lastUpdate }}</small>

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
  public lastUpdate: Date               = new Date();
  public chartData: object[]            = [
    {
      name: 'Feb. ',
      data: [
        [ 1486684800000, 52 ],
        [ 1486771200000, 45 ],
        [ 1486857600000, 87 ],
        [ 1486944000000, 1 ],
        [ 1487030400000, 62 ],
        [ 1487116800000, 12 ]
      ]
    } ];

  // ---------------------------
  // ---- VueJS components

  @Prop( { default: Sensor.UNIT_WATT_HOUR } )
  private target_unit!: string;

  @Prop( { default: 'area' } )
  private chartType!: string;

  @Prop( { default: 'dd' } )
  private chartColor!: string;


  mounted() {
    this.sensorProvider
        .getSensorsList( this.target_unit )
        .then( ( list: { [ key: string ]: Sensor } ) => {
          this.sensors = list;
        } )
        .then( () => {
          if ( this.sensors && this.sensorsLength() > 0 ) {
            const firstSensorID = Object.keys( this.sensors )[ 0 ];

            this.changeSensor( this.sensors[ firstSensorID ] );
          }
        } );
  }

  beforeDestroy() {
    this.stopAutoRefreshData();
  }

  // ---- ./VueJS components

  get chartOptions(): object {
    return {
      chart:  {
        sparkline: {
          enabled: true
        }
      },
      fill:   {
        colors:   this.chartColor,
        type:     'gradient',
        gradient: {
          gradientFromColors: [ this.chartColor ],
          opacityFrom:        1,
          opacityTo:          0
        }
      },
      stroke: {
        show:   true,
        curve:  'smooth',
        colors: [ '#FFFFFF80' ],
        width:  2
      },
      xaxis: {
        // type: 'datetime'
        // categories: [ 'Plop' ]
      }
    };
  }

  // ---------------------------
  // ---- Data methods

  public sensorsLength() {
    return ( this.sensors )
           ? Object.keys( this.sensors ).length
           : 0;
  }

  public changeSensor( sensor: Sensor ) {
    this.currentSensor = sensor;

    this.stopAutoRefreshData();
    this.enableAutoRefreshData();
  }

  public updateSensorData( id: string ) {
    return this.sensorProvider
               .getSensorData( id )
               .then( ( sensor: Sensor ) => {
                 if ( this.currentSensor /*&& this.sensors */ ) {
                   // this.sensors[ sensor.id ] = sensor;
                   this.currentSensor = sensor;
                   this.lastUpdate    = new Date();
                   // this.changeSensor( sensor );
                   // console.log( sensor );
                 }
               } );
  }

  public updateChartData() {
    if ( this.currentSensor )
      this.sensorProvider
          .getSensorHistories( this.currentSensor.id )
          .then( ( histories: any ) => {
            // console.log( histories );
            this.chartData = histories;
          } );
  }

  public enableAutoRefreshData() {
    if ( this.currentSensor )
      this.pendingUpdate = setTimeout( () => {
        if ( this.currentSensor ) {
          this.updateSensorData( this.currentSensor.id );
          this.updateChartData();
          this.enableAutoRefreshData();
        }
      }, SensorBase.REFRESH_INTERVAL );
  }

  public stopAutoRefreshData() {
    clearTimeout( this.pendingUpdate );
  }

  public displayValue( value: any, precision: number = 1 ): number {
    if ( isNaN( Number( value ) ) || value === null )
      return 0;

    return value.toFixed( precision );
  }

  // ---- ./Data methods

  // ---------------------------
  // ---- View methods

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

  // ---- ./View methods

}
</script>
