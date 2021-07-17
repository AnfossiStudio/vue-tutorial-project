<template>
  <AppHeader />
  <div class="main w-full h-full flex flex-col bg-gray-100">
    <router-view></router-view>
  </div>
  <LoginModal />
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import firebase from "./utilities/firebase";

export default {
  name: "App",
  components: { AppHeader, LoginModal },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setIsLoggedIn", true);
        this.$store.commit("setAuthUser", user);
      } else {
        this.$store.commit("setIsLoggedIn", false);
        this.$store.commit("setAuthUser", {});
      }
    });
  },
};
</script>

<style>
.main {
  height: calc(100vh - 70px);
}
body {
  overflow: hidden;
}
</style>
