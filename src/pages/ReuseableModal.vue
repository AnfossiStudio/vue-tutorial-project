<template>
  <div class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Re-useable Modal</h1>
      <Modal @close="isModalOpen = false" v-if="isModalOpen">
        <h1>Red Modal</h1>
      </Modal>
      <button @click="isModalOpen = true">Open Modal</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Modal from "../components/Modal";

export default {
  components: { Modal },

  setup() {
    const isModalOpen = ref(false);

    return { isModalOpen };
  },
};
</script>

<style>
</style>