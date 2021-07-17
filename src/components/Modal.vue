<template>
  <section
    class="z-20 h-screen left-0 w-screen bg-black bg-opacity-50 fixed top-0"
    @click="close"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 shadow-md rounded w-1/3">
        <div class="border p-3">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(_, { emit }) {
    const close = function () {
      emit("close");
    };

    return { close };
  },
};
</script>

<style>
</style>