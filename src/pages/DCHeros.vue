<template>
  <div
    class="bg-white p-4 rounded-md shadow-md w/2 text-center bg-white justify-self-center m-auto self-center"
  >
    <h1 class="text-center text-2xl mb-4">Dc Heroes #{{ herosCount }}</h1>
    <div
      v-if="dcHeros.length <= 0"
      class="text-gray-400 text-lg bold text-center font-normal"
    >
      There are not have any title
    </div>
    <ul>
      <li
        class="flex justify-between mb-1 border-b py-1"
        v-for="(item, index) in dcHeros"
        :key="item.name"
      >
        {{ item.name }}
        <button
          @click="removeDCHeros(index)"
          class="p-1 bg-red-300 rounded-full w-8 hover:bg-red-400"
        >
          X
        </button>
      </li>
    </ul>

    <form class="mt-10" action="#" @submit.prevent="addHero">
      <input
        type="text"
        v-model="itemHero"
        placeholder="Type Hero name here"
        class="border rounded p-1"
        ref="inputText"
      />
      <button
        class="border rounded bg-gradient-to-r from-blue-600 to-blue-800 p-1.5 text-sm ml-1 text-white"
        type="submit"
      >
        Add Hero +
      </button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import swal from 'sweetalert2'

export default {
  setup() {
    const inputText = ref("");
    const itemHero = ref("");
    const dcHeros = ref([
      {
        name: "Spider man",
      },
    ]);
    const herosCount = computed({
      get: () => dcHeros.value.length,
    });

    onMounted(() => {
      inputText.value.focus();
    });

    const removeDCHeros = (index) => {
      swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          dcHeros.value = dcHeros.value.filter((hero, i) => i !== index);
          swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
      
    };

    const addHero = () => {
      if (itemHero.value === "") return;

      dcHeros.value.push({ name: itemHero.value });
      itemHero.value = "";
    };

    return { dcHeros, itemHero, removeDCHeros, addHero, inputText, herosCount };
  },
};
</script>

<style>
</style>