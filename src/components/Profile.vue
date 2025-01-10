<script></script>
<template>
  <div class="flex gap-12">
    <div
      class="flex items-center justify-center size-24 bg-[#6A7E8A] rounded-full cursor-pointer"
    >
      <p class="text-[#FFFFFF80] text-xs px-6 ml-1">Click to upload profile</p>
    </div>
    <form class="py-4 w-[60%]">
      <div class="space-y-8">
        <div>
          <p class="space-y-1">First Name</p>
          <div class="relative">
            <input
              class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
              type="text"
            />
          </div>
        </div>

        <div>
          <p class="space-y-1">Last Name</p>
          <div class="relative">
            <input
              class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
              type="text"
            />
          </div>
        </div>

        <div class="space-y-1">
          <p>Email</p>
          <div class="relative">
            <input
              class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
              type="email"
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
  </div>
</template>
