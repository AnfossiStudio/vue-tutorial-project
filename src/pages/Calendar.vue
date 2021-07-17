<template>
  <section
    class="w/2 text-center bg-white justify-self-center m-auto self-center rounded-lg shadow-md"
  >
    <h1 class="text-3xl my-4 text-center">Vue Calendar</h1>
    {{ getDate(2021, 8) }}
    <section class="m-4 flex justify-between">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold">{{ currentYear }}</h2>
    </section>
    <section class="flex">
      <div
        v-for="day in days"
        class="p-2 text-center"
        style="width: 14.28%"
        :key="day"
      >
        {{ day }}
      </div>
    </section>
    <section class="flex flex-wrap">
      <p
        class="text-center border py-3"
        style="width: 14.28%"
        v-for="num in 35"
        :key="num"
        v-once
      >
        <span>{{ display(num) }}</span>
      </p>
    </section>
    <div class="section p-4 flex justify-between">
      <a
        href="#"
        @click="prev"
        class="py-2 px-5 rounded bg-blue-400 hover:bg-blue-600 transition text-white"
        >Prev</a
      >
      <a
        href="#"
        @click="next"
        class="py-2 px-5 rounded bg-blue-400 hover:bg-blue-600 transition text-white"
        >Next</a
      >
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentMonthName: new Date().toLocaleString("default", { month: "long" }),
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      currentDayIndex: new Date().getDate(),
      currentDay: 0,
      curerntMonthCount: 0,
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      start: false,
      currentIndex: 0,
    };
  },
  mounted() {
    this.getDate(2021, 7);
  },
  methods: {
    getDate(year, month) {
      this.currentDay = new Date(year, month, 1).getDay() + 1;
      this.curerntMonthCount = new Date(year, month, 0).getDate();
    },

    next() {
      console.log(this.currentDay, this.curerntMonthCount);
      this.getDate(2021, 10);
      console.log(this.currentDay, this.curerntMonthCount);
    },
    prev() {
      this.currentMonth--;
    },

    display(num) {
      console.log("curent month count" + this.curerntMonthCount);
      console.log("curent day" + this.currentDay);

      if (
        num >= this.currentDay &&
        this.currentIndex < this.curerntMonthCount
      ) {
        this.currentIndex++;
        return this.currentIndex;
      } else return "-";
    },
  },
};
</script>

<style>
</style>