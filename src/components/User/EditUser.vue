<template>
  <div class="fixed z-50 -mt-16 flex items-center justify-center w-full h-screen">
    <div class="w-full h-full bg-theme-white_smoke blur">
    </div>
    <div
        class="absolute flex self-center flex-col w-3/5 px-5 py-2 -ml-64 bg-white border-2 rounded border-theme-brilliant_blue">
      <div class="flex justify-end w-full" @click="$emit('closeEditUserBox')">
        <g-image class="cursor-pointer" immediate="true" src="~/assets/svg/close-3.svg"></g-image>
      </div>
      <div class="flex justify-between w-full p-4 px-8">
        <div class="title">
          <p>Edit Information</p>
        </div>
        <div>
          <div class="relative w-24 h-24 bg-theme-storm_grey rounded-lg profile_picture">
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
        <div class="w-full flex">
          <div class="w-1/2">
            <label for="first_name">
              First Name
            </label>
            <div class="relative mt-1">
              <g-image class="ml-4 absolute py-3 w-4" immediate="true" src="~/assets/svg/user-2.svg"/>
              <input id="first_name" v-model="user.first_name"
                     class="w-full px-3 pl-10 py-2 border-theme-navy_blue border-2 rounded-lg"
                     placeholder="Full Name"
                     type="text">
            </div>
          </div>
          <div class="w-1/2 ml-5">
            <label for="last_name">
              Last Name
            </label>
            <div class="relative mt-1">
              <g-image class="ml-4 absolute py-3 w-4" immediate="true" src="~/assets/svg/user-2.svg"/>

              <input id="last_name" v-model="user.last_name"
                     class="w-full px-3 pl-10 py-2 border-theme-navy_blue border-2 rounded-lg"
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
            <div class="relative ">
              <g-image class="absolute py-3 ml-4 w-3" immediate="true" src="~/assets/svg/pin.svg"/>
              <input id="address" class="w-full px-3 pl-10 py-2 border-theme-navy_blue border-2 rounded-lg"
                     placeholder="Type Email Address"
                     type="text">
            </div>
          </div>
          <div class="w-1/4 relative mt-6">
            <g-image class="absolute py-2 right-0" immediate="true" src="~/assets/svg/arrow_down.svg"/>

            <select
                class="block w-full text-theme-dim_gray  px-2 py-2 rounded-lg border-2 appearance-none border-theme-brilliant_blue">
              <option>City</option>
              <!--              <option>Missouri</option>-->
              <!--              <option>Texas</option>-->
            </select>
          </div>
          <div class="w-1/4 relative mt-2">
            <g-image class="absolute py-2 right-0" immediate="true" src="~/assets/svg/arrow_down.svg"/>
            <select
                class="block  text-theme-dim_gray w-full px-2 py-2 rounded-lg border-2 appearance-none border-theme-brilliant_blue">
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
            <div class="relative ">
              <g-image class="absolute py-4 ml-4 w-4" immediate="true" src="~/assets/svg/mail (1).svg"/>

              <input id="email" v-model="user.email"
                     class="w-full px-3 pl-10 py-2 border-theme-navy_blue border-2 rounded-lg"
                     placeholder="Type Email Address"
                     type="text">
            </div>
          </div>
          <div class="w-1/2">
            <label for="number">
              Phone Number
            </label>
            <div class="relative ">

              <g-image class="ml-4 absolute py-3 w-5" immediate="true" src="~/assets/svg/phone.svg"/>
              <input id="number" v-model="user.phone"
                     class="w-full px-3 pl-10 py-2 border-theme-navy_blue border-2 rounded-lg"
                     placeholder="Type Email Address"
                     type="number">
            </div>
          </div>
        </div>
        <div class="mt-10 w-full pb-5 flex justify-center">
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
  @apply text-theme-ebony opacity-50 font-bold;
}

</style>
