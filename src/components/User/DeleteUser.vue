<template>
  <div class="fixed z-50 flex items-center justify-center w-full h-screen">
    <div class="w-full h-full bg-theme-white_smoke blur">
    </div>
    <div class="absolute flex flex-col w-1/3 p-5 -ml-64 bg-white border-2 rounded border-theme-navy_blue">
      <div class="flex justify-end w-full" @click="$emit('closeDeleteUserBox')">
        <g-image src="~/assets/svg/close-3.svg" class="cursor-pointer" ></g-image>
      </div>
      <div class="flex justify-center w-full p-4">
        <g-image src="~/assets/svg/signs.svg"></g-image>
      </div>
      <div class="mb-8 text-center">
        <p>You’re about to delete this User. </p>
        <p>Are you sure ?</p>
      </div>
      <div class="flex justify-between w-full px-16 text-center">
        <div class="flex items-center justify-center w-1/2 mr-4 button">
          Yes
        </div>
        <div class="flex items-center justify-center w-1/2 ml-4 button">
          No
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteUser"
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
  @apply py-2 border rounded shadow-lg cursor-pointer border-theme-brilliant_blue;
}
</style>
