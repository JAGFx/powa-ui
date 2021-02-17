<template>
  <SensorBase :target_unit="targetUnit" class="light"></SensorBase>
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
export default class Light extends Vue {
  public targetUnit: string = Sensor.UNIT_LUMINOSITY;
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/sensor.mixin";

@include sensor("light", $cLuxAccent1, $cLuxAccent2, $cLuxAccent3);

</style>
