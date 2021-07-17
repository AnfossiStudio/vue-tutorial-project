<template>
  <section class="flex bg-white m-5 h-screen box-shadow-lg rounded">
    <article class="w-1/2 p-5">
      <h2 class="text-lg font-semibold mb-2">Input</h2>
      <textarea
        @input="update"
        class="w-full h-full border-none outline-none"
        style="height: calc(100% - 30px); resize: none"
        ref="textareaField"
      ></textarea>
    </article>
    <article class="w-1/2 bg-gray-200 p-5">
      <h2 class="text-lg font-semibold mb-2">Output</h2>
      <div class="output" v-html="marked_text"></div>
    </article>
  </section>
</template>

<script>
import marked from "marked";
import debounce from "../utilities/mixins/debounce";

export default {
  mixins: [debounce],
  data() {
    return {
      text: "",
    };
  },
  computed: {
    marked_text() {
      return marked(this.text);
    },
  },
  mounted() {
    this.$refs.textareaField.focus();
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 1000);
    },
  },
};
</script>

<style>
</style>