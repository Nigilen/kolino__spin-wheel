<script lang="ts" setup>
import { data } from '@/components/GameWheel/data';


</script>

<template>

  <section class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__content">
      <h2 class="modal__title">{{ data.modal.title }}</h2>
      <p class="modal__bonuse">{{ data.modal.bonus }}</p>
      <button class="modal__button" type="button">{{ data.modal.button }}</button>
    </div>
  </section>

</template>

<style lang="css" scoped>

.modal {
}
.modal__overlay {
}
.modal__content {
}
.modal__title {
}
.modal__bonuse {
}
.modal__button {
}

</style>