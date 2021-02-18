<template>
  <ul class="content zone-wrapper">
    <li class="zone" :class="{ 'open' : isOpen }">
      <div class="z-title">
        <span>
          <slot name="z-title"></slot>
        </span>
        <span class="z-title-action">
          <slot name="z-title-action"></slot>
          <button v-on:click="isOpen = !isOpen">...</button>
        </span>
      </div>
      <ul class="z-body" v-if="isOpen">
        <slot name="z-body"></slot>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SettingList extends Vue {
  public isOpen: boolean = false;
}
</script>

<style lang="scss">
@import "../assets/scss/zone";
</style>
