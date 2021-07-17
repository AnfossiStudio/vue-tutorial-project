const debounce = {
  data() {
    return {
      timeout: ""
    };
  },
  methods: {
    debounce(func, wait = 500) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        func();
      }, wait);
    }
  }
};

export default debounce;
