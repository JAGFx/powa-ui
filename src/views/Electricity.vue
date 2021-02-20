<template>
  <SensorBase :target_unit="targetUnit" chart-color="#00A3AC" class="electricity"></SensorBase>
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
export default class Electricity extends Vue {
  public targetUnit: string = Sensor.UNIT_WATT_HOUR;
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/sensor.mixin";

@include sensor("electricity", $cElcAccent1, $cElcAccent2, $cElcAccent3);

</style>
