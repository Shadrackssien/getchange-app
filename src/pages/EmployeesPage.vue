<!-- <script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Product F",
          price: 93.32,
          location: "Los Angeles",
          owner: "Grace",
          instock: false,
        },
        {
          id: 2,
          name: "Gear H",
          price: 13.24,
          location: "New York",
          owner: "Hank",
          instock: true,
        },
        {
          id: 3,
          name: "Widget A",
          price: 210.53,
          location: "San Diego",
          owner: "Eve",
          instock: false,
        },
        {
          id: 4,
          name: "Gear H",
          price: 77.53,
          location: "San Diego",
          owner: "Frank",
          instock: true,
        },
        {
          id: 5,
          name: "Widget A",
          price: 171.79,
          location: "Philadelphia",
          owner: "Charlie",
          instock: false,
        },
        {
          id: 6,
          name: "Instrument I",
          price: 56.92,
          location: "Chicago",
          owner: "Charlie",
          instock: false,
        },
        {
          id: 7,
          name: "Device C",
          price: 462.24,
          location: "Houston",
          owner: "Alice",
          instock: true,
        },
        {
          id: 8,
          name: "Module J",
          price: 156.9,
          location: "Phoenix",
          owner: "Frank",
          instock: true,
        },
        {
          id: 9,
          name: "Widget A",
          price: 85.82,
          location: "San Diego",
          owner: "Eve",
          instock: false,
        },
        {
          id: 10,
          name: "Accessory G",
          price: 53.4,
          location: "New York",
          owner: "Charlie",
          instock: true,
        },
        {
          id: 11,
          name: "Item E",
          price: 85.32,
          location: "Philadelphia",
          owner: "Frank",
          instock: false,
        },
        {
          id: 12,
          name: "Widget A",
          price: 62.89,
          location: "San Diego",
          owner: "Diana",
          instock: true,
        },
        {
          id: 13,
          name: "Tool D",
          price: 203.87,
          location: "Los Angeles",
          owner: "Jack",
          instock: false,
        },
        {
          id: 14,
          name: "Module J",
          price: 277.24,
          location: "Dallas",
          owner: "Alice",
          instock: false,
        },
        {
          id: 15,
          name: "Tool D",
          price: 474.94,
          location: "Dallas",
          owner: "Ivy",
          instock: false,
        },
        {
          id: 16,
          name: "Product F",
          price: 192.6,
          location: "Dallas",
          owner: "Jack",
          instock: true,
        },
        {
          id: 17,
          name: "Module J",
          price: 365.97,
          location: "Houston",
          owner: "Frank",
          instock: true,
        },
        {
          id: 18,
          name: "Instrument I",
          price: 463.94,
          location: "San Antonio",
          owner: "Charlie",
          instock: false,
        },
        {
          id: 19,
          name: "Tool D",
          price: 304.27,
          location: "New York",
          owner: "Charlie",
          instock: true,
        },
        {
          id: 20,
          name: "Tool D",
          price: 204.37,
          location: "Houston",
          owner: "Charlie",
          instock: true,
        },
      ],
      selectedProducts: [],
    };
  },
  methods: {
    toggleSelection(product) {
      if (this.selectedProducts.includes(product)) {
        this.selectedProducts = this.selectedProducts.filter(
          (p) => p !== product
        );
      } else {
        this.selectedProducts.push(product);
      }
    },
  },
};
</script> -->

<script setup>
import { ref } from "vue";
const products = ref([
  {
    id: 1,
    name: "Product F",
    price: 93.32,
    location: "Los Angeles",
    owner: "Grace",
    instock: false,
  },
  {
    id: 2,
    name: "Gear H",
    price: 13.24,
    location: "New York",
    owner: "Hank",
    instock: true,
  },
  {
    id: 3,
    name: "Widget A",
    price: 210.53,
    location: "San Diego",
    owner: "Eve",
    instock: false,
  },
  {
    id: 4,
    name: "Gear H",
    price: 77.53,
    location: "San Diego",
    owner: "Frank",
    instock: true,
  },
  {
    id: 5,
    name: "Widget A",
    price: 171.79,
    location: "Philadelphia",
    owner: "Charlie",
    instock: false,
  },
  {
    id: 6,
    name: "Instrument I",
    price: 56.92,
    location: "Chicago",
    owner: "Charlie",
    instock: false,
  },
  {
    id: 7,
    name: "Device C",
    price: 462.24,
    location: "Houston",
    owner: "Alice",
    instock: true,
  },
  {
    id: 8,
    name: "Module J",
    price: 156.9,
    location: "Phoenix",
    owner: "Frank",
    instock: true,
  },
  {
    id: 9,
    name: "Widget A",
    price: 85.82,
    location: "San Diego",
    owner: "Eve",
    instock: false,
  },
  {
    id: 10,
    name: "Accessory G",
    price: 53.4,
    location: "New York",
    owner: "Charlie",
    instock: true,
  },
  {
    id: 11,
    name: "Item E",
    price: 85.32,
    location: "Philadelphia",
    owner: "Frank",
    instock: false,
  },
  {
    id: 12,
    name: "Widget A",
    price: 62.89,
    location: "San Diego",
    owner: "Diana",
    instock: true,
  },
  {
    id: 13,
    name: "Tool D",
    price: 203.87,
    location: "Los Angeles",
    owner: "Jack",
    instock: false,
  },
  {
    id: 14,
    name: "Module J",
    price: 277.24,
    location: "Dallas",
    owner: "Alice",
    instock: false,
  },
  {
    id: 15,
    name: "Tool D",
    price: 474.94,
    location: "Dallas",
    owner: "Ivy",
    instock: false,
  },
  {
    id: 16,
    name: "Product F",
    price: 192.6,
    location: "Dallas",
    owner: "Jack",
    instock: true,
  },
  {
    id: 17,
    name: "Module J",
    price: 365.97,
    location: "Houston",
    owner: "Frank",
    instock: true,
  },
  {
    id: 18,
    name: "Instrument I",
    price: 463.94,
    location: "San Antonio",
    owner: "Charlie",
    instock: false,
  },
  {
    id: 19,
    name: "Tool D",
    price: 304.27,
    location: "New York",
    owner: "Charlie",
    instock: true,
  },
  {
    id: 20,
    name: "Tool D",
    price: 204.37,
    location: "Houston",
    owner: "Charlie",
    instock: true,
  },
]);
const selectedProducts = ref([]);

const toggleSelection = (product) => {
  if (selectedProducts.value.includes(product)) {
    selectedProducts.value = selectedProducts.value.filter(
      (p) => p !== product
    );
  } else {
    selectedProducts.value.push(product);
  }
};
</script>

<template>
  <div class="bg-green-50 w-full rounded-xl p-10">
    <div class="space-y-4">
      <div class="flex justify-between">
        <p class="px-4 text-[#070a0c] text-2xl font-bold">Products</p>
        <div class="flex items-center justify-center gap-2">
          <div
            v-if="selectedProducts.length"
            class="px-4 bg-blue-100 rounded-lg"
          >
            {{ selectedProducts.length }} of {{ products.length }}
            selected
          </div>
        </div>
      </div>

      <div class="pl-4 space-y-2 mx-12 h-96 overflow-auto">
        <div
          v-for="product in products"
          @click="toggleSelection(product)"
          :key="product.id"
          :class="{
            'border-2 border-green-600': selectedProducts.some(
              (p) => p.id === product.id
            ),
          }"
          class="cursor-pointer border text-[#070a0c] border-[#6A7E8A1A] w-full overflow-auto grid grid-cols-6 py-2 bg-white"
        >
          <p>{{ product.id }}</p>
          <p>{{ product.name }}</p>
          <p>{{ product.location }}</p>
          <p>{{ product.price }}</p>
          <p>{{ product.owner }}</p>
          <p>{{ product.instock }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
