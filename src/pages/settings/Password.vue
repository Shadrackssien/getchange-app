<script></script>
<template>
  <form class="w-[50%] mx-auto mt-16">
    <div class="space-y-10">
      <div>
        <div class="relative">
          <input
            class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
            type="password"
            placeholder="Old Password"
          />
        </div>
      </div>
      <div>
        <div class="relative">
          <input
            class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
            type="password"
            placeholder="New Password"
          />
        </div>
      </div>
      <div>
        <div class="relative">
          <input
            class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
            type="password"
            placeholder="Confirm New Password"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <button
        type="submit"
        class="mt-12 bg-primary text-base font-semibold rounded-[4px] text-white py-2 px-10"
      >
        Save Changes
      </button>
    </div>
  </form>
</template>
