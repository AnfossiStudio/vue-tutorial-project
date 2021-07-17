<template>
  <section class="flex w-full justify-center items-center">
    <div class="mt-20 bg-white shadow-md rounded">
      <table class="w-full">
        <thead>
          <tr>
            <th class="px-4 py-2 border">ID</th>
            <th class="px-4 py-2 border">Avatar</th>
            <th class="px-4 py-2 border">First Name</th>
            <th class="px-4 py-2 border">Last name</th>
            <th class="px-4 py-2 border">E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in state.users.data" :key="user.id">
            <td class="border px-4 py-2">{{ user.id }}</td>
            <td class="border px-4 py-2">
              <img
                :src="user.avatar"
                :alt="user.first_name"
                width="40"
                class="rounded-full"
              />
            </td>
            <td class="border px-4 py-2">{{ user.first_name }}</td>
            <td class="border px-4 py-2">{{ user.last_name }}</td>
            <td class="border px-4 py-2">{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      users: [],
    });

    onMounted(async () => {
      const { data } = await axios.get("https://reqres.in/api/users");
      state.users = data;
    });

    return { state };
  },
};
</script>

<style>
</style>