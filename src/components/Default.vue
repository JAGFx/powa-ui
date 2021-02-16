<template>
  <div id="default" class="d-flex justify-content-center align-items-center w-100 h-100 row no-gutters">
    <router-link class="col-6 mode" to="/electicity">Electricity</router-link>
    <router-link class="col-6 mode" to="/light">Light</router-link>
    <router-link class="col-6 mode" to="/temperature">Temperature</router-link>
    <router-link class="col-6 mode" to="/settings">Settings</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Default extends Vue {
}

</script>

<style lang="scss">
@import "src/assets/scss/default";
</style>