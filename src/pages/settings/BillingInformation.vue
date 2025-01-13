<script></script>
<template>
  <div class="space-y-8 w-[50%] mx-auto mt-10">
    <div class="text-secondary">Payment Method</div>
    <div class="space-y-4">
      <div class="text-[#013C61] grid grid-cols-3 gap-[58px]">
        <p>MASTERCARD</p>
        <p>**** 1234</p>
        <div class="flex items-center gap-2">
          <p class="text-secondary">Make Primary</p>
          <input type="radio" v-model="paymentMethod" value="mastercard" />
        </div>
      </div>
      <div class="text-[#013C61] grid grid-cols-3 gap-[58px]">
        <p>VISA CARD</p>
        <p>**** 4254</p>
        <div class="flex justify-end">
          <input type="radio" v-model="paymentMethod" value="mastercard" />
        </div>
      </div>
    </div>

    <div class="pt-6 text-secondary grid grid-cols-3 gap-[58px]">
      <p>Recurring Billing</p>
      <div class="space-x-2.5 flex items-center">
        <label for="recurring">Enable</label>
        <input type="radio" />
      </div>
      <div class="space-x-2.5 flex items-center justify-end">
        <label for="recurring">Disable</label>
        <input type="radio" />
      </div>
    </div>

    <div class="flex justify-end">
      <button
        type="submit"
        class="mt-8 mb-4 bg-primary text-base font-semibold rounded-[4px] text-white py-2 px-10"
      >
        Save Changes
      </button>
    </div>
  </div>
</template>
