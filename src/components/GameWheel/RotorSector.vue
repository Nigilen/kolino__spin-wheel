<script lang="ts" setup>
const props = defineProps<{
  src: string,
  value: string
}>();
</script>

<template>
  <figure class="sector">
    <picture class="sector__img">
      <img class="sector-img" :src="props.src" alt="" width="154" height="200">
    </picture>
    <figcaption class="sector__caption">{{ props.value }}</figcaption>
  </figure>
</template>

<style lang="css" scoped>
.sector {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  inline-size: 100%;
  block-size: 100%;

  & .sector__img {
    position: relative;
    inline-size: 100%;
    block-size: auto;
  }

  & .sector__caption {
    position: absolute;
    inset-block-start: 7cqi;
    font-size: 4.8cqi;
    text-transform: uppercase;
    text-align: center;
    max-width: 20cqi;
  }
}
</style>