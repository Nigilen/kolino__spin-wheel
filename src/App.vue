<script setup lang="ts">
import GameTitle from '@/components/GameTitle.vue';
import GameWheel from './components/GameWheel/GameWheel.vue';
</script>

<template>
  <main class="main">
    <GameTitle />
    <GameWheel />
  </main>
</template>

<style lang="css" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: min(100px, 12vmax);
}
</style>
