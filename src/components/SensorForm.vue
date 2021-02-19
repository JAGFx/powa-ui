<template>
  <form @submit.prevent="onSubmit" v-if="sensor">
    <div class="f-row">
      <label for="sensor_id">ID</label>
      <input v-model="sensor.id" type="text" id="sensor_id" class="f-control" placeholder="Ex: elc-001">
    </div>
    <div class="f-row">
      <label for="sensor_name">Name</label>
      <input v-model="sensor.name" type="text" id="sensor_name" class="f-control" placeholder="Ex: Livings room">
    </div>
    <div class="f-row">
      <label for="sensor_type">Type</label>
      <select v-model="sensor.unit" id="sensor_type" class="f-control">
        <option :value="SENSOR_CONST.UNIT_WATT_HOUR">Electricity</option>
        <option :value="SENSOR_CONST.UNIT_LUMINOSITY">Light</option>
        <option :value="SENSOR_CONST.UNIT_TEMPERATURE">Temperature</option>
      </select>
      <!--        <input type="text" id="sensor_type" class="f-control">-->
    </div>
    <input type="submit" value="Submit">
    <!--    {{ sensor }}-->
  </form>

</template>

<script lang="ts">
import Sensor                   from '@/models/Sensors/Sensor';
import { SensorProvider }       from '@/providers/sensor.provider';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SensorForm extends Vue {
  @Prop()
  private sensor!: Sensor;

  public sensorProvider: SensorProvider = new SensorProvider();
  public SENSOR_CONST                   = {
    UNIT_WATT_HOUR:   Sensor.UNIT_WATT_HOUR,
    UNIT_TEMPERATURE: Sensor.UNIT_TEMPERATURE,
    UNIT_LUMINOSITY:  Sensor.UNIT_LUMINOSITY
  };

  // --

  public onSubmit() {
    if ( this.sensor.uid === -1 )
      this.sensorProvider
          .postSensor( this.sensor )
          .then( () => {
            alert( 'OK !' );
          } );
    else
      this.sensorProvider
          .patchSensor( this.sensor )
          .then( () => {
            alert( 'OK !' );
          } );

    // console.log( this.sensor );
  }
}
</script>

<style lang="scss">
@import "../assets/scss/sensorForm";
</style>