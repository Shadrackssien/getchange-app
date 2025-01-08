<script>
import Delete from "../assets/icons/delete.png";

export default {
  data() {
    return {
      Delete,
    };
  },
};
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
          oninput="this.value = this.value.replace(/[^0-9]/g, '')"
        />
        <div class="flex justify-between my-4">
          <div class="flex items-center space-x-2">
            <div
              class="flex items-center justify-center size-3 border rounded-full"
            >
              <p
                class="flex items-center justify-center size-1.5 bg-[#2BDA53] rounded-full"
              ></p>
            </div>
            <p>Airtime</p>
          </div>
          <div class="flex items-center space-x-2">
            <div
              class="flex items-center justify-center size-3 border rounded-full"
            >
              <p class="size-1.5 bg-transparent rounded-full"></p>
            </div>
            <p>IOU Voucher</p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <input
        class="w-full text-white text-3xl outline-none bg-transparent"
        type="text"
        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
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
