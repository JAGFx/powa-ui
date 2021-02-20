<template>
  <SensorBase :target_unit="targetUnit" chart-color="#FAB293" class="temperature"></SensorBase>
</template>

<script lang="ts">
import SensorBase         from '@/components/SensorBase.vue';
import Sensor             from '@/models/Sensors/Sensor';
import { Component, Vue } from 'vue-property-decorator';

@Component( {
  components: {
    SensorBase
  }
} )
export default class Temperature extends Vue {
  public targetUnit: string = Sensor.UNIT_TEMPERATURE;
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/sensor.mixin";

@include sensor("temperature", $cTempAccent1, $cTempAccent2, $cTempAccent3);

</style>
