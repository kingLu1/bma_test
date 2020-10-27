<template>
  <div class="flex justify-between px-5 py-4 shadow w-full">
    <div class="notification flex">
      <div class="relative mr-2">
        <div class="text-white absolute right-0">
          <p class="bg-theme-red w-4 h-4  flex items-center justify-center rounded-full" style="font-size: 7px">99+ </p>
        </div>
        <g-image src="~/assets/svg/bell.svg"/>
      </div>
      <p class="text-theme-storm_grey">Updated 28mins ago</p>
    </div>
    <div class="user_info flex">
      <div class="flex mr-10">
        <g-image src="~/assets/svg/user.svg"/>
        <p v-if="user">
          Hi, {{ (user.first_name) ? user.first_name : 'james' }}
        </p>
      </div>
      <div class="flex">
        <g-image src="~/assets/svg/question-2.svg"/>
        <p>
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
  @apply ml-2;
}
</style>
