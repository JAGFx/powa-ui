<template>
  <div class="sensor-form">
    <header class="w-100 d-flex justify-content-around align-items-center">
      <router-link class="" to="/settings">H</router-link>
      <h3 class="m-0 w-100 smart-name">Sensor</h3>
    </header>

    <SensorForm :sensor="sensor"></SensorForm>
  </div>
</template>

<script lang="ts">
import SensorForm               from '@/components/SensorForm.vue';
import Sensor                   from '@/models/Sensors/Sensor';
import { SensorProvider }       from '@/providers/sensor.provider';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component( {
  components: {
    SensorForm
  }
} )
export default class SensorEdit extends Vue {
  @Prop()
  public sensor_id!: string;

  public sensor: Sensor | null          = null;
  public sensorProvider: SensorProvider = new SensorProvider();

  mounted() {
    this.sensorProvider
        .getSensorData( this.sensor_id )
        .then( ( sensor: Sensor ) => {
          this.sensor = sensor;
        } );
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/header";
</style>
