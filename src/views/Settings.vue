<template>
  <div class="settings">
    <header class="w-100 d-flex justify-content-around align-items-center">
      <router-link class="" to="/">H</router-link>
      <h3 class="m-0 w-100 smart-name">Settings</h3>
    </header>
    <div class="top">
      <img src="" alt="">
      <small>v1.0.0</small>
    </div>

    <!-- // --- Sensors settings-->
    <SettingList>
      <template v-slot:z-title>
        <span>Sensors</span>
      </template>
      <template v-slot:z-title-action>
        <router-link class="button" to="/sensors/new">+</router-link>
      </template>
      <template v-slot:z-body>
        <li v-for="sensor in sensors" :key="sensor.id">
          <small class="z-badge electricity" v-if="sensor.isElectricity()">Electricity</small>
          <small class="z-badge light" v-else-if="sensor.isLight()">Light</small>
          <small class="z-badge temperature" v-else-if="sensor.isTemperature()">Temperature</small>
          <span>{{ sensor.name }}</span>
          <span class="z-title-action">
            <span class="z-title-status"></span>
            <!--            <button>see</button>-->
            <router-link class="button" :to="`/sensors/${sensor.id}/edit`">edit</router-link>
            <button @click="onClickDelete( sensor.id )">-</button>
          </span>
        </li>
      </template>
    </SettingList>
  </div>
  <!-- // --- Sensors settings-->
</template>

<script lang="ts">
import SettingList        from '@/components/SettingList.vue';
import Sensor             from '@/models/Sensors/Sensor';
import { SensorProvider } from '@/providers/sensor.provider';
import { Component, Vue } from 'vue-property-decorator';

@Component( {
  components: {
    SettingList
  }
} )
export default class Settings extends Vue {
  public sensors: { [ key: string ]: Sensor } = {};
  public sensorProvider: SensorProvider       = new SensorProvider();

  created() {
    this.sensorProvider
        .getSensorsList()
        .then( ( list: { [ key: string ]: Sensor } ) => {
          this.sensors = list;
        } );
  }

  public onClickDelete( sensorID: string ) {
    this.sensorProvider
        .deleteSensor( sensorID )
        .then( () => {
          alert( 'OK !' );
        } );
  }
}

</script>

<style lang="scss">
@import "../assets/scss/settings";
</style>
