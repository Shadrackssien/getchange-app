<script>
import naira from "../assets/icons/naira.png";
import arrowLeft from "../assets/icons/arrow-left.png";
import arrowRight from "../assets/icons/arrow-right.png";

export default {
  data() {
    return {
      naira,
      arrowLeft,
      arrowRight,
    };
  },
};
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center bg-white p-4 text-[#013C61] justify-between">
      <p class="font-semibold">Store Wallet</p>
      <div class="flex space-x-1">
        <img class="w-2.5 h-2.5 mt-1" :src="naira" alt="naira icon" />
        <p class="font-semibold text-2xl">2,500</p>
      </div>
      <button class="bg-[#2BDA53] w-[210px] py-2 text-white rounded-sm">
        Top up wallet
      </button>
    </div>

    <div class="flex items-center bg-white p-4 text-[#013C61] justify-between">
      <p class="font-semibold">Total Disbursed</p>
      <div class="flex space-x-1 pr-6">
        <img class="w-2.5 h-2.5 mt-1" :src="naira" alt="naira icon" />
        <p class="font-semibold text-2xl">2,500</p>
      </div>
      <button
        class="bg-transparent w-[210px] py-2 font-semibold border border-[#013C61] text-[#013C61] rounded-sm"
      >
        Top up wallet
      </button>
    </div>

    <!-- Recent Activities -->
    <div class="space-y-4">
      <div class="flex justify-between">
        <p class="px-4 text-[#013C61] font-semibold">Recent Activities</p>
        <div class="flex items-center justify-center gap-2">
          <p><span class="border border-[#013C611A] px-1">1</span> of 8</p>
          <img class="w-4 h-4 mt-1" :src="arrowLeft" alt="arrow icon" />
          <img class="w-4 h-4 mt-1" :src="arrowRight" alt="arrow icon" />
        </div>
      </div>

      <div class="pl-4 space-y-2">
        <div class="w-full text-[#013C61] grid grid-cols-6">
          <p>#</p>
          <p class="mr-8">DESCRIPTION</p>
          <p>DATE</p>
          <p>TIME</p>
          <p>STAFF</p>
          <p>AMOUNT</p>
        </div>
        <div class="w-full text-[#6A7E8A] grid grid-cols-6 py-2 bg-white">
          <p>1</p>
          <p>Wallet top up</p>
          <p>06 Aug 2019</p>
          <p>12:24PM</p>
          <p>Admin</p>
          <p>NGN2000.00</p>
        </div>
        <div class="w-full text-[#6A7E8A] grid grid-cols-6 py-2 bg-white">
          <p>1</p>
          <p>Wallet top up</p>
          <p>06 Aug 2019</p>
          <p>12:24PM</p>
          <p>Admin</p>
          <p>NGN2000.00</p>
        </div>
        <div class="w-full text-[#6A7E8A] grid grid-cols-6 py-2 bg-white">
          <p>1</p>
          <p>Wallet top up</p>
          <p>06 Aug 2019</p>
          <p>12:24PM</p>
          <p>Admin</p>
          <p>NGN2000.00</p>
        </div>
        <div class="w-full text-[#6A7E8A] grid grid-cols-6 py-2 bg-white">
          <p>1</p>
          <p>Wallet top up</p>
          <p>06 Aug 2019</p>
          <p>12:24PM</p>
          <p>Admin</p>
          <p>NGN2000.00</p>
        </div>
        <div class="w-full text-[#6A7E8A] grid grid-cols-6 py-2 bg-white">
          <p>1</p>
          <p>Wallet top up</p>
          <p>06 Aug 2019</p>
          <p>12:24PM</p>
          <p>Admin</p>
          <p>NGN2000.00</p>
        </div>
        <div class="w-full text-[#6A7E8A] grid grid-cols-6 py-2 bg-white">
          <p>1</p>
          <p>Wallet top up</p>
          <p>06 Aug 2019</p>
          <p>12:24PM</p>
          <p>Admin</p>
          <p>NGN2000.00</p>
        </div>
      </div>
    </div>
  </div>
</template>
