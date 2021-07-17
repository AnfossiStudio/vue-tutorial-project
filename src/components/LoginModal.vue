<template>
  <div v-if="isLoginOpen == true">
    <section
      class="z-20 h-screen w-screen bg-black bg-opacity-50 fixed top-0"
      @click="close"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 shadow-md rounded w-1/3">
          <div class="border p-3">
            <h1 class="text-3xl font-semibold text-center tracking-wider mb-10">
              Login
            </h1>
            <section
              class="my-5 w-full hover:bg-red-400 text-center p-2 bg-red-500 text-white rounded"
            >
              <button class="text-center">
                <i
                  class="bx bxl-google text-xl mr-2"
                  style="transform: translateY(3px)"
                ></i>
                Login with Google
              </button>
            </section>
            <div class="text-center text-gray-400 font-semibold">
              <h1>Or</h1>
            </div>
            <form @submit.prevent="submit">
              <div class="mt-4">
                <label for="#username" class="text-gray-600"
                  >Username or E-mail</label
                >
                <input
                  type="text"
                  class="shadow-md w-full px-3 py-2 mt-2 border rounded"
                  id="username"
                  placeholder="Enter your E-mail or username"
                  v-model="email"
                  ref="emailInput"
                />
              </div>
              <div class="mt-4">
                <label for="#password" class="text-gray-600">Password</label>
                <input
                  type="password"
                  class="shadow-md w-full px-3 py-2 mt-2 border rounded"
                  id="password"
                  placeholder="Enter your Password"
                  v-model="password"
                />
              </div>
              <div class="mt-4">
                <button
                  type="submit"
                  class="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-400 transition w-full"
                >
                  <i
                    class="bx bx-dots-horizontal-rounded text-3xl text-white"
                    v-if="isLoading === true"
                  ></i>

                  <span v-else>Login</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
import swal from "sweetalert2";

export default {
  computed: {
    isLoginOpen() {
      return this.$store.state.isLoginOpen;
    },
  },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },
  methods: {
    submit() {
      this.isLoading = true;

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          this.email = "";
          this.password = "";
          this.isLoading = false;
          swal.fire("Login!", "You're login from the webiste", "success");

          this.close();
        })
        .catch((e) => {
          this.isLoading = false;
        });
    },
    close() {
      this.$store.commit("setLoginModal", false);
    },
  },
  // mounted() {
  //   this.$refs.emailInput.focus();
  // },
};
</script>

<style>
</style>