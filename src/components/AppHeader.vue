<template>
  <nav
    class="w-full px-4 flex justify-between items-center shadow bg-blue-400 text-white"
  >
    <div class="logo">
      <router-link to="/" class="text-xl font-semibold"
        >Vue 3 course</router-link
      >
    </div>
    <div class="links">
      <router-link
        v-for="item in list"
        :key="item.title"
        :to="item.to"
        class="text-md text-md ml-5 opacity-75"
        v-text="item.title"
      />
      <button
        class="ml-6 bg-white text-black px-5 py-2 rounded font-semibold hover:bg-gray-100"
        @click="openLogin"
        v-if="!isLoggedIn"
      >
        <span>login</span>
      </button>
      <button
        class="ml-6 bg-red-400 text-white px-5 py-2 rounded font-semibold hover:bg-red-300"
        @click="logout"
        v-else
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";
import swal from "sweetalert2";

export default {
  name: "AppHeader",
  data() {
    return {
      list: [
        { title: "Dc Heros", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider Carosel", to: "/slider" },
        { title: "Calculator", to: "/calculator" },
        { title: "Chats", to: "/chats" },
        { title: "User Crud", to: "/user-crud" },
      ],

      store: this.$store.state,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then((res) => {
          swal.fire("Logout!", "You're logout from the webiste", "success");
        })
        .then((err) => {});
    },
    openLogin() {
      this.$store.commit("setLoginModal", true);
    },
  },
};
</script>

<style>
nav {
  height: 70px;
}
</style>