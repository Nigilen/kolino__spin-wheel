<script setup lang="ts">
import { ref } from 'vue';
import GameTitle from '@/components/GameTitle.vue';
import GameWheel from '@/components/GameWheel/GameWheel.vue';
import GameModal from '@/components/GameModal.vue';
import { data } from '@/components/GameWheel/data';

const isOpenModal = ref(false);
const isSpin = ref(false);
const winValue = ref();

const handleSpinStart = () => {
  isSpin.value = true;
};

const handleOpenModal = (winSector: number) => {
  isOpenModal.value = true;
  winValue.value = data.wheel.sectorsValue.bonuses[winSector - 1];
};

const handleCloseModal = () => {
  isOpenModal.value = false;
  isSpin.value = false;
};

</script>

<template>
  <main class="main">
    <GameTitle />
    <GameWheel 
      @spinStart="handleSpinStart" 
      @spinFinished="(winSector) => handleOpenModal(winSector)" 
      :isSpin="isSpin"
    />
  </main>
  <Teleport to="body">
    <Transition>
      <GameModal 
        v-if="isOpenModal" 
        :winValue="winValue" 
        @modalClose="handleCloseModal" 
      />
    </Transition>
  </Teleport>
</template>

<style lang="css" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: min(100px, 12vmax);
}


</style>
