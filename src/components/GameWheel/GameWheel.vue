<script lang="ts" setup>
import { ref } from 'vue';
import WheelRotor from './WheelRotor.vue';
import WheelStator from './WheelStator.vue';

const isSpin = ref(false);
const handleSpin = () => {
  isSpin.value = true;
}
</script>

<template>
  <section class="wheel">
    <WheelStator @spin="handleSpin" />
    <WheelRotor :isSpin="isSpin" />
  </section>
</template>

<style lang="css" scoped>
.wheel {
  position: relative;
  inline-size: min(500px, 90vmin);
  block-size: auto;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  container-type: inline-size;
}
</style>