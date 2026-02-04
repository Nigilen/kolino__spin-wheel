<script lang="ts" setup>
import RotorSector from './RotorSector.vue';
import { data } from '@/components/GameWheel/data';

const props = defineProps<{
  isSpin: boolean;
}>();

</script>

<template>
  <div class="rotor" :class="{['spining']: props.isSpin}">
    <picture class="rotor__dividiers">
      <img class="rotor__dividiers-img" src="/src/assets/images/wheel__dividiers.svg" alt="" width="441" height="441">
    </picture>
    <ul class="rotor__sectors-list">
      <li 
        class="rotor__sector-item" 
        v-for="i in data.wheel.sectorsCount" 
        :key="i" 
        :style="{ '--angle': i * 45 + 'deg' }"
      >
        <RotorSector 
          :src="i % 2 ? '/src/assets/images/wheel__sector--grey.svg' : '/src/assets/images/wheel__sector--white.svg'" 
          :value="data.wheel.sectorsValue.bonuses[i - 1]!"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.rotor {
  position: absolute;
  display: flex;
  border-radius: 100%;
  inline-size: 94cqi;
  block-size: auto;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  & .rotor__dividiers {
    display: flex;
    position: absolute;
    inset: 0;
  }

  & .rotor__sectors-list {
    position: absolute;
    display: flex;
    justify-content: center;
    border-radius: 100%;
    inset: 0;
    z-index: -1;

    & .rotor__sector-item {
      position: absolute;
      transform-origin: center bottom;
      transform: rotate(var(--angle));
      block-size: 50%;
      aspect-ratio: 0.77 / 1;
    }
  }
}

.spining {
  animation: spin 2s ease-in-out forwards;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  90% {
    transform: rotate(1810deg);
  }
  95% {
    transform: rotate(1790deg);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>