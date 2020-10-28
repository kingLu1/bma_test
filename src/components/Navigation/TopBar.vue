<template>
  <div class="flex justify-between px-5 py-4 shadow w-full">
    <div class="notification flex items-center">
      <div class="relative mr-2">
        <div class="text-white absolute right-0">
          <p class="badge">99+ </p>
        </div>
        <g-image class="cursor-pointer" src="~/assets/svg/bell.svg"/>
      </div>
      <p class="time">Updated 28mins ago</p>
    </div>
    <div class="user_info flex">
      <div class="flex mr-10">
        <g-image class="cursor-pointer" src="~/assets/svg/user.svg"/>
        <p class="font-bold">
          Hi, {{ user.first_name }}
        </p>
      </div>
      <div class="flex">
        <g-image class="cursor-pointer" src="~/assets/svg/question-2.svg"/>
        <p class="">
          Help
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "TopBar",
  computed: {
    ...mapGetters({
      user: 'user'
    }),
  },
}
</script>

<style scoped>
.user_info > div > p {
  @apply ml-2 text-theme-ebony opacity-75;
}

.time {
  @apply text-theme-storm_grey opacity-75 font-bold;
  font-size: 10px;
}

.badge {
  @apply bg-theme-red w-4 h-4 flex items-center justify-center rounded-full;
  font-size: 7px;
}

</style>
