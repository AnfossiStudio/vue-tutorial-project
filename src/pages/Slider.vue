<template>
  <section class="w-full text-center bg-white">
    <div v-for="(color, index) in sliders" class="absolute w-full" :key="index">
      <transition name="fade">
        <div
          v-if="currentSlide == index"
          class="absolute w-full"
          :class="color"
          style="height: 500px"
        ></div>
      </transition>
    </div>
    <div class="w-full absolute" style="height: 480px">
      <div class="absolute bottom-0 flex justify-center w-full">
        <div
          v-for="(item, index) in sliders"
          :key="item"
          :class="currentSlide === index ? 'bg-gray-700' : 'bg-gray-300'"
          class="w-4 h-4 mx-2 rounded-full cursor-pointer"
          @click="makeActive(index)"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 2,
      interval: "",
      sliders: ["bg-blue-600", "bg-yellow-600", "bg-green-600"],
    };
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.currentSlide === 2) this.currentSlide = 0;
      else this.currentSlide++;
    }, 4000);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translate(100%);
}
</style>