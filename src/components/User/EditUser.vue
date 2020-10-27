<template>
  <div class="fixed z-50 flex items-center justify-center w-full h-screen">
    <div class="w-full h-full bg-theme-white_smoke blur">
    </div>
    <div
        class="absolute flex self-center flex-col w-3/5 p-5 -mt-32 -ml-64 bg-white border-2 rounded border-theme-navy_blue">
      <div class="flex justify-end w-full" @click="$emit('closeEditUserBox')">
        <g-image class="cursor-pointer" src="~/assets/svg/close-3.svg"></g-image>
      </div>
      <div class="flex justify-between w-full p-4">
        <div>
          <p>Edit Information</p>
        </div>
        <div>
          <div class="relative w-24 h-24 bg-black rounded-lg profile_picture">
            <div class="absolute bottom-0 right-0 p-2 -mb-1 -mr-2 bg-white rounded-full">
              <g-image class="" src="~/assets/svg/arrow-up.svg"/>
            </div>
          </div>
          <div class="">
            <p class="text-theme-ebony">
              Upload Picture
            </p>
          </div>
        </div>
      </div>
      <form>
        <div>
          <label for="full_name">
            Full Name
          </label>
          <div class="relative mt-1">
            <g-image class="ml-4 absolute py-3 w-4" src="~/assets/svg/user-2.svg"/>

            <input id="full_name" class="w-full px-3 pl-10 py-2 border-theme-navy_blue border-2 rounded-lg"
                   placeholder="Full Name"
                   type="text">
          </div>

        </div>
        <div class="flex">
          <div>
            <label for="address">
              Address
            </label>
            <div class="relative ">
              <g-image class="absolute py-3 ml-4 w-3" src="~/assets/svg/pin.svg"/>
              <input id="address" class="w-full px-3 pl-10 py-2 border-theme-navy_blue border-2 rounded-lg"
                     placeholder="Type Email Address"
                     type="text">
            </div>
          </div>
          <div class="w-1/3 relative mt-6">
            <g-image class="absolute py-2 right-0" src="~/assets/svg/arrow_down.svg"/>

            <select class="block w-full px-2 py-2 rounded-lg border-2 appearance-none border-theme-brilliant_blue">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
          </div>
          <div class="w-full relative mt-6">
            <g-image class="absolute py-2 right-0" src="~/assets/svg/arrow_down.svg"/>
            <select class="block w-full px-2 py-2 rounded-lg border-2 appearance-none border-theme-brilliant_blue">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
          </div>
          <div>

          </div>

        </div>
        <div class="flex">
          <div>
            <label for="email">
              Email
            </label>
            <div class="relative ">
              <g-image class="absolute py-4 ml-4 w-4" src="~/assets/svg/mail (1).svg"/>
              <input id="email" class="w-full px-3 pl-10 py-2 border-theme-navy_blue border-2 rounded-lg"
                     placeholder="Type Email Address"
                     type="text">
            </div>
          </div>
          <div>
            <label for="number">
              Phone Number
            </label>
            <div class="relative ">

                <g-image class="ml-4 absolute py-3 w-5" src="~/assets/svg/phone.svg"/>
              <input id="number" class="w-full px-3 pl-10 py-2 border-theme-navy_blue border-2 rounded-lg"
                     placeholder="Type Email Address"
                     type="text">
            </div>
          </div>
        </div>
        <div class="mt-10 w-full flex justify-center">
          <div class="flex items-center justify-center w-48 py-2 button save">
            Update
          </div>
        </div>
      </form>
      <!--      <div class="mb-8 text-center">-->
      <!--        <p>You’re about to delete this User. </p>-->
      <!--        <p>Are you sure ?</p>-->
      <!--      </div>-->
      <!--      <div class="flex justify-between w-full px-16 text-center">-->
      <!--        <div class="flex items-center justify-center w-1/2 mr-4 button">-->
      <!--          Yes-->
      <!--        </div>-->
      <!--        <div class="flex items-center justify-center w-1/2 ml-4 button">-->
      <!--          No-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
// import
export default {
  name: "EditUser"
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

label {
  font-size: 12px;
  @apply text-theme-ebony opacity-50;
}
</style>
