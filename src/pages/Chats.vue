<template>
  <section class="flex h-full w-full justify-center items-center">
    <div
      class="w-2/4 bg-white rounded-lg shadow-md h-3/4 flex flex-col text-sm"
      id="chat-board"
    >
      <div class="flex-1 h-full p-4 overflow-y-scroll chat-board rounded-lg">
        <div
          v-for="chat in state.chats"
          :key="chat.message"
          :class="chat.userId === userId ? 'user' : 'friend'"
        >
          <div>{{ chat.message }}</div>
        </div>
      </div>

      <div class="input-box flex p-4">
        <input
          type="text"
          v-model="state.message"
          class="shadow-md flex-2 bg-gray-100 w-full p-2 rounded-lg mt-2"
          placeholder="Enter your message"
          @keydown.enter="sendMessage"
        />
        <button
          @click="sendMessage"
          class="flex-1 ml-4 text-blue-600 rounded text-white hover:text-blue-400 transition"
        >
          Send
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive, getCurrentInstance, computed } from "vue";
import firebase from "../utilities/firebase";
import { useStore } from "vuex";

export default {
  setup() {
    const internalInstance = getCurrentInstance();
    const state = reactive({
      chats: {},
      message: "",
      collection: null,
    });

    const store = useStore();
    const userId = computed(() => store.state.authUser.uid);

    const sendMessage = async function () {
      if (state.message.trim() === "") return;

      const _message = state.collection.push();
      _message.set({
        userId: store.state.authUser.uid,
        message: state.message,
      });
      const data = await state.collection.once("value");

      state.chats = data.val();
      state.message = "";
    };

    // const scrollToBottom = function () {
    //   const _board = getCurrentInstance().ctx.$el.querySelector("#chat-board");
    //   _board.scrollTop = _board.scrollHeight;
    // };

    onMounted(async () => {
      const database = firebase.database();
      state.collection = database.ref("chats");
      const data = await state.collection.once("value");
      // state.collection.on("value", (snapshot) => {
      //   state.chats.val = snapshot.val();
      // });

      state.chats = data.val();
      console.log(internalInstance.appContext);
    });

    return {
      state,
      sendMessage,
      userId,
    };
  },
};
</script>

<style>
.chat-board {
  background: #232738;
  transition: all 0.5s ease-out;
}

.chat-board::-webkit-scrollbar {
  width: 20px;
}

.chat-board::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 100px;
}

.chat-board::-webkit-scrollbar-thumb {
  border-radius: 100px;
  border: 6px solid transparent;
  background-clip: content-box;
}

.chat-board::-webkit-scrollbar-thumb:hover {
  background-color: #fff;
}

.user div {
  max-width: 75%;
  text-align: left;
  background: #2d2d44;
  color: #fff;
  display: inline-block;
  padding: 8px 12px;
  margin-bottom: 5px;
  border-radius: 20px;
}

.friend {
  text-align: right;
  color: #fff;
}
.friend div {
  max-width: 75%;
  background-color: #1373e4;

  display: inline-block;
  padding: 8px 12px;
  margin-bottom: 5px;
  border-radius: 20px;
}
</style>