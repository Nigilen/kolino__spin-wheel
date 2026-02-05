<script lang="ts" setup>
import { ref, watch } from 'vue';
import RotorSector from '@/components/GameWheel/RotorSector.vue';
import { data } from '@/components/GameWheel/data';
import sectorWhite from '@/assets/images/wheel__sector--white.svg';
import sectorGrey from '@/assets/images/wheel__sector--grey.svg';

const props = defineProps<{
  isSpin: boolean;
}>();

const emits = defineEmits<{
  (e: 'spinFinished', winSector: number): void;
}>();

const rotorRef = ref<HTMLDivElement | null>(null);
const currentAnimation = ref<Animation | null>(null);

const randomSector = ref<number>(0);

watch(() => props.isSpin, (isSpin) => {
  if (!rotorRef.value) return;
  
  if (isSpin) {
    
    if (!currentAnimation.value) {
      randomSector.value = Math.ceil(Math.random() * (data.wheel.sectorsValue.bonuses.length));

      currentAnimation.value = rotorRef.value.animate([
        { transform: 'rotate(0deg)' },
        { transform: `rotate(${(randomSector.value * 45) + (360 * 5) }deg)` }
      ], {
        duration: 5000,
        easing: 'cubic-bezier(0.57,0.15,0.54,1.13)',
        fill: 'forwards'
      });
      currentAnimation.value.onfinish = () => {
        emits('spinFinished', randomSector.value)
      };
    }
  } else {
    currentAnimation.value?.cancel();
    currentAnimation.value = null;
  }
});

</script>

<template>
  <div class="rotor" ref="rotorRef">
    <picture class="rotor__dividiers">
      <img class="rotor__dividiers-img" src="/src/assets/images/wheel__dividiers.svg" alt="" width="441" height="441">
    </picture>
    <ul class="rotor__sectors-list">
      <li 
        class="rotor__sector-item" 
        v-for="i in data.wheel.sectorsValue.bonuses.length" 
        :key="i" 
        :style="{ '--angle': -i * 45 + 'deg' }"
      >
        <RotorSector 
          :src="i % 2 ? sectorGrey : sectorWhite" 
          :value="data.wheel.sectorsValue.bonuses[i - 1]!"
          :fontSize="i % 2 ? '1.5' : '1.1'"
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
  /* animation: rotorDance 3s ease-in-out infinite; */

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

@keyframes rotorDance {
  0% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}

</style>