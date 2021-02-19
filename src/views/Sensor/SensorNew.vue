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
import SensorForm         from '@/components/SensorForm.vue';
import Sensor             from '@/models/Sensors/Sensor';
import { Component, Vue } from 'vue-property-decorator';

@Component( {
  components: {
    SensorForm
  }
} )
export default class SensorNew extends Vue {
  // public targetUnit: string = Sensor.UNIT_TEMPERATURE;
  public sensor: Sensor = new Sensor( '', '', Sensor.UNIT_WATT_HOUR );
}
</script>

<style lang="scss">
@import "../../assets/scss/header";
</style>
