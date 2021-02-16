<template>
  <SensorBase :target_unit="targetUnit"></SensorBase>
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
