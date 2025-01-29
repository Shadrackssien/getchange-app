<!-- <script>
import Delete from "../assets/icons/delete.png";

export default {
  data() {
    return {
      Delete,
      amount: "",
      calculator: "",
      options: ["Airtime", "IOU Voucher"],
      selectedOption: "Airtime",
      keys: ["C", "<", ">", "DEL", 1, 2, 3, "*", 4, 5, 6, "#", 7, 8, 9, 0],
    };
  },
  watch: {
    amount(value) {
      this.amount = value.replace(/[^0-9]/g, "");
    },
    calculator(value) {
      this.calculator = value.replace(/[^0-9]/g, "");
    },
  },
};
</script> -->
<script setup>
import { ref, watch } from "vue";
import Delete from "../assets/icons/delete.png";

const amount = ref("");
const calculator = ref("");
const selectedOption = ref("Airtime");

const options = ["Airtime", "IOU Voucher"];

watch(amount, (newValue) => {
  amount.value = newValue.replace(/[^0-9]/g, "");
});

watch(calculator, (newValue) => {
  calculator.value = newValue.replace(/[^0-9]/g, "");
});
</script>
<template>
  <div class="w-full space-y-4 bg-[#013C61] p-4 rounded-md">
    <p class="text-white text-sm mt-2">GETCHANGE WIDGET</p>

    <div class="flex gap-4 pt-2 text-[#FFFFFF80]">
      <p class="mt-2">Amout</p>
      <div class="w-full flex flex-col">
        <input
          class="w-full text-white outline-none bg-transparent border-b border-b-[#FFFFFF6A]"
          type="text"
          v-model="amount"
        />

        <div class="flex justify-between my-4">
          <div
            v-for="option in options"
            :key="option"
            class="flex items-center space-x-2"
          >
            <div
              @click="selectedOption = option"
              :class="[
                'flex items-center justify-center size-3 border rounded-full',
                { 'bg-[#2BDA53]': selectedOption === option },
              ]"
            >
              <p
                :class="[
                  'size-1.5 rounded-full',
                  {
                    'bg-[#2BDA53]': selectedOption === option,
                    'bg-transparent': selectedOption !== option,
                  },
                ]"
              ></p>
            </div>
            <p>{{ option }}</p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <input
        class="w-full text-white text-3xl outline-none bg-transparent"
        type="text"
        v-model="calculator"
      />
    </div>
  </div>
  <!-- calculator -->
  <div class="w-full border-b-2 border-b-[#013C611A]">
    <div class="grid grid-cols-4 text-[#013C61]">
      <button class="bg-[#2BDA5333] w-full h-[65px] text-xl">c</button>
      <button class="bg-[#2BDA5333] w-full h-[65px] text-xl">&lt;</button>
      <button class="bg-[#2BDA5333] w-full h-[65px] text-xl">&gt;</button>
      <button
        class="flex items-center justify-center bg-[#2BDA5333] w-full h-[65px] text-xl"
      >
        <img :src="Delete" alt="delete icon" />
      </button>
      <button class="w-full h-[65px] text-xl">1</button>
      <button class="w-full h-[65px] text-xl">2</button>
      <button class="w-full h-[65px] text-xl">3</button>
      <button class="w-full h-[65px] bg-[#2BDA5333] text-xl">*</button>
      <button class="w-full h-[65px] text-xl">4</button>
      <button class="w-full h-[65px] text-xl">5</button>
      <button class="w-full h-[65px] text-xl">6</button>
      <button class="w-full h-[65px] bg-[#2BDA5333] text-xl">#</button>
      <button class="w-full h-[65px] text-xl">7</button>
      <button class="w-full h-[65px] text-xl">8</button>
      <button class="w-full h-[65px] text-xl">9</button>
      <button class="w-full h-[65px] bg-[#2BDA5333] text-xl">0</button>
    </div>
  </div>
  <!-- buttons -->
  <div class="flex items-center justify-center gap-4 flex-col mt-8">
    <button
      class="border-2 border-[#013C611A] w-[210px] py-2 text-[#013C61] rounded-sm"
    >
      Query
    </button>
    <button class="bg-[#2BDA53] w-[210px] py-2 text-white rounded-sm">
      Generate
    </button>
  </div>
</template>
