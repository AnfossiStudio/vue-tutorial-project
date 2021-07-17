<template>
  <section class="flex h-full w-full justify-center items-center">
    <div class="m-auto">
      <div class="board-bg-color pt-10 rounded-costume shadow-md">
        <p class="text-6xl text-right m-10 h-20">{{ costumeResult(result) }}</p>
        <span class="h-10 m-10"
          ><small class="text-lg font-semibold" v-if="showCalc"
            >{{ costumeResult(prevNumber) }}
            <span class="red-costume">{{ selectedOperation }}</span>
            {{ costumeResult(currentNumber) }}</small
          >
        </span>
        <div
          class="my-10 grid grid-cols-4 gap-3 text-2xl board-color py-10 px-10 rounded-costume"
        >
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20 green-costume"
            @click="pressed('AC')"
          >
            AC
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20 green-costume"
            @click="pressed('+')"
          >
            +/-
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20 green-costume"
            @click="pressed('%')"
          >
            %
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20 red-costume"
            @click="pressed('÷')"
          >
            ÷
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20"
            @click="pressed('7')"
          >
            7
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20"
            @click="pressed('8')"
          >
            8
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20"
            @click="pressed('9')"
          >
            9
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20 red-costume"
            @click="pressed('x')"
          >
            x
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20"
            @click="pressed('4')"
          >
            4
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20"
            @click="pressed('5')"
          >
            5
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20"
            @click="pressed('6')"
          >
            6
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20 red-costume"
            @click="pressed('-')"
          >
            -
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20"
            @click="pressed('1')"
          >
            1
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20"
            @click="pressed('2')"
          >
            2
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20"
            @click="pressed('3')"
          >
            3
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20 red-costume"
            @click="pressed('+')"
          >
            +
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20"
            @click="pressed('R')"
          >
            R
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20"
            @click="pressed('0')"
          >
            0
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20"
            @click="pressed('.')"
          >
            .
          </button>
          <button
            class="button-color p-2 rounded-lg shadow-md w-20 h-20 red-costume"
            @click="pressed('=')"
          >
            =
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref } from "vue";

export default {
  setup() {
    const result = ref("0");
    const operation = ["-", "+", "x", "÷"];
    const currentNumber = ref("");
    const prevNumber = ref("");
    const selectedOperation = ref("");
    const showCalc = ref(false);
    const operationfuntion = {
      muliply() {
        result.value = prevNumber.value * currentNumber.value;
      },
      divide() {
        result.value = prevNumber.value / currentNumber.value;
      },
      subtract() {
        result.value = prevNumber.value - currentNumber.value;
      },
      sum() {
        result.value = +prevNumber.value + +currentNumber.value;
      },
    };

    const costumeResult = function (value) {
      return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    };

    function pressed(value) {
      if (value === "=") calculate();
      else if (value === "AC") clear();
      else if (operation.includes(value)) applayOperations(value);
      else appendNumber(value);
    }

    function applayOperations(value) {
      console.log(value);

      prevNumber.value = currentNumber.value;
      currentNumber.value = "";
      result.value = "";
      selectedOperation.value = value;
    }

    function appendNumber(value) {
      if (result.value === "0") {
        result.value = value;
      } else result.value += value;

      currentNumber.value = result.value;
    }

    function clear() {
      result.value = "0";
      currentNumber.value = "";
      prevNumber.value = "";
      showCalc.value = false;
    }

    function calculate() {
      if (selectedOperation.value === "x") operationfuntion.muliply();
      else if (selectedOperation.value === "÷") operationfuntion.divide();
      else if (selectedOperation.value === "-") operationfuntion.subtract();
      else if (selectedOperation.value === "+") operationfuntion.sum();
      showCalc.value = true;
    }

    return {
      result,
      pressed,
      prevNumber,
      selectedOperation,
      showCalc,
      currentNumber,
      costumeResult,
    };
  },
};
</script>

<style>
.red-costume {
  color: #e6686a;
}
.green-costume {
  color: #51ebd3;
}

.button-color {
  background: #fff;
}

.board-color {
  background: #fbfbfb;
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 25px 0px;
}

.board-bg-color {
  background: #fff;
  color: #000;
}

.rounded-costume {
  border-radius: 50px;
}
</style>