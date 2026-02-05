<script lang="ts" setup>
import { ref } from 'vue';
import WheelRotor from './WheelRotor.vue';
import WheelStator from './WheelStator.vue';

const props = defineProps<{
  isSpin: boolean;
}>();

const emits = defineEmits<{
  (e: 'spinStart'): void;
  (e: 'spinFinished', winSector: number): void;
}>();


const handleSpin = () => {
  emits('spinStart');
}

const handleSpinFinished = (winSector: number) => {
  emits('spinFinished', winSector);
}

</script>

<template>
  <section class="wheel">
    <WheelStator @spin="handleSpin" />
    <WheelRotor :isSpin="isSpin" @spinFinished="(winSector) => handleSpinFinished(winSector)"  />
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