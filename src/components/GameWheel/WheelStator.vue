<script lang="ts" setup>
import { data } from '@/components/GameWheel/data';

const emits = defineEmits<{
  (e: 'spin'): void;
}>();

const handleClick = () => {
  emits('spin')
};
</script>

<template>

  <div class="stator">
    <picture class="stator__arrow">
      <img 
        class="stator__arrow-img" 
        src="/src/assets/images/wheel__arrow.svg" 
        width="168" 
        height="168" 
        loading="lazy"
      >
    </picture>
    <picture class="stator__ring">
      <img 
        class="stator__ring-img" 
        src="/src/assets/images/wheel__ring.svg" 
        width="430" 
        height="430" 
        loading="lazy"
      >
    </picture>
    <button class="stator__center" type="button" @click="handleClick">{{ data.wheel.button }}</button>
  </div>
</template>

<style lang="css" scoped>
.stator {
  position: absolute;
  display: flex;
  justify-content: center;
  inline-size: 100%;
  z-index: 1;

  & .stator__arrow {
    position: absolute;
    align-self: flex-start;
    inset-block-start: -18cqi;
    display: block;
    line-height: 0;
    block-size: auto;
    inline-size: 34cqi;
    aspect-ratio: 2 / 1;
  }

  & .stator__ring {
    display: block;
    line-height: 0;
    inline-size: 100%;
    block-size: auto;
    aspect-ratio: 1 / 1;
  }

  & .stator__center {
    position: absolute;
    align-self: center;
    inline-size: 16cqi;
    block-size: auto;
    aspect-ratio: 1 / 1;
    background-color: var(--accent-color);
    color: var(--secondary-color);
    border: 0.4cqi solid var(--primary-color);
    border-radius: 100%;
    text-transform: uppercase;
    font-size: 4cqi;
  }
}
</style>