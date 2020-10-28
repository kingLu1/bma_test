<template>
  <div class="fixed z-50 flex items-center justify-center w-full h-screen -mt-16">
    <!--    blurry bg-->
    <div class="w-full h-full bg-theme-white_smoke blur">
    </div>
    <!--    blurry bg-->
    <div
        class="absolute flex flex-col self-center w-3/5 px-5 py-2 -ml-64 bg-white border-2 rounded border-theme-brilliant_blue">
      <div class="flex justify-end w-full" @click="$emit('closeEditUserBox')">
        <g-image class="cursor-pointer" immediate="true" src="~/assets/svg/close-3.svg"></g-image>
      </div>
      <div class="flex justify-between w-full p-4 px-8">
        <div class="title">
          <p>Edit Information</p>
        </div>
        <div>
          <div class="relative w-24 h-24 rounded-lg bg-theme-storm_grey profile_picture">
            <g-image :src="user.image_url"
                     class="w-full" fit="fill"/>
            <div class="absolute bottom-0 right-0 p-2 -mb-1 -mr-2 bg-white rounded-full">
              <g-image class="" immediate="true" src="~/assets/svg/arrow-up.svg"/>
            </div>
          </div>
          <div class="">
            <p class="upload">
              Upload Picture
            </p>
          </div>
        </div>
      </div>
      <div class="px-8">
        <div class="flex w-full">
          <div class="w-1/2">
            <label for="first_name">
              First Name
            </label>
            <div class="relative mt-1">
              <g-image class="absolute w-4 py-3 ml-4" immediate="true" src="~/assets/svg/user-2.svg"/>
              <input id="first_name" v-model="user.first_name"
                     class=""
                     placeholder="Full Name"
                     type="text">
            </div>
          </div>
          <div class="w-1/2 ml-5">
            <label for="last_name">
              Last Name
            </label>
            <div class="relative mt-1">
              <g-image class="absolute w-4 py-3 ml-4" immediate="true" src="~/assets/svg/user-2.svg"/>

              <input id="last_name" v-model="user.last_name"
                     class=""
                     placeholder="Full Name"
                     type="text">
            </div>
          </div>

        </div>
        <div class="flex flex-wrap">
          <div class="w-2/4 mr-5">
            <label for="address">
              Address
            </label>
            <div class="relative">
              <g-image class="absolute w-3 py-3 ml-4" immediate="true" src="~/assets/svg/pin.svg"/>
              <input id="address" v-model="user.address" class=""
                     placeholder="Type Email Address"
                     type="text">
            </div>
          </div>
          <div class="relative w-1/4 mt-6">
            <g-image class="absolute right-0 py-2" immediate="true" src="~/assets/svg/arrow_down.svg"/>

            <select
                class="">
              <option>City</option>
              <!--              <option>Missouri</option>-->
              <!--              <option>Texas</option>-->
            </select>
          </div>
          <div class="relative w-1/4 mt-2">
            <g-image class="absolute right-0 py-2" immediate="true" src="~/assets/svg/arrow_down.svg"/>
            <select
                class="">
              <option>State</option>
              <!--              <option>Missouri</option>-->
              <!--              <option>Texas</option>-->
            </select>
          </div>
          <div>

          </div>

        </div>
        <div class="flex">
          <div class="w-1/2 mr-6">
            <label for="email">
              Email
            </label>
            <div class="relative">
              <g-image class="absolute w-4 py-4 ml-4" immediate="true" src="~/assets/svg/mail (1).svg"/>

              <input id="email" v-model="user.email"
                     class=""
                     placeholder="Type Email Address"
                     type="email">
            </div>
          </div>
          <div class="w-1/2">
            <label for="number">
              Phone Number
            </label>
            <div class="relative">

              <g-image class="absolute w-5 py-3 ml-4" immediate="true" src="~/assets/svg/phone.svg"/>
              <input id="number" v-model="user.phone"
                     class=""
                     placeholder="Type Email Address"
                     type="text">
            </div>
          </div>
        </div>
        <div class="flex justify-center w-full pb-5 mt-10">
          <div class="flex items-center justify-center w-48 py-2 button save" @click="updateUser()">
            Update
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "EditUser",
  data: () => ({}),
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    ...mapActions({
      updateUserInfo: 'updateUserInfo'
    }),
    updateUser() {
      this.updateUserInfo(this.user)
      this.$emit('closeEditUserBox')
    }

  }

}
</script>

<style scoped>
.blur {
  opacity: .9;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
//background: #FFFFFF 0% 0% no-repeat padding-box;
}

.button {
  @apply px-2 py-1 text-white rounded shadow cursor-pointer bg-theme-brilliant_blue;
  font-size: 17px;
}

.save {
  @apply p-2;
}

.title {
  font-size: 25px;
  @apply font-bold;
}

label {
  font-size: 12px;
  @apply font-bold opacity-50 text-theme-ebony;
}

input {
  @apply w-full px-3 py-2 pl-10 border-2 rounded-lg border-theme-navy_blue;
}

select {
  @apply block w-full px-2 py-2 border-2 rounded-lg appearance-none text-theme-dim_gray border-theme-brilliant_blue;
}

</style>
