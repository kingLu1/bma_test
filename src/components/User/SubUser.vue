<template>
  <div
      :class="{'text-theme-mischka': !subUser.is_active}"
      class="user">
    <div class="photo">
      <g-image src="~/assets/svg/user2.svg"/>
    </div>
    <div class="username w-1/5">
      <p>{{ subUser.first_name }}</p>
    </div>
    <div class="email  w-2/5">
      <p>{{ subUser.email }}</p>
    </div>
    <div class="relative role ">
      <g-image class="absolute right-0 py-2" src="~/assets/svg/arrow_down.svg"/>
      <select v-model="subUser.role.name" :class="{'bg-white': !subUser.is_active}"
              :disabled="!subUser.is_active"
              class="cursor-pointer w-full px-2 py-2 mr-4 appearance-none border-theme-brilliant_blue"
              @change="changeRole(subUser.role.name)">
        <option v-for="role in roles" v-bind:value="role.name">{{ role.name }}</option>

      </select>
    </div>
    <div class="actions flex">
      <div v-if="subUser.has_activated" class="flex ml-8">
        <g-image v-if="subUser.is_active" class="mr-6 cursor-pointer" src="~/assets/svg/block.svg"
                 @click="toggleSubUserState(index, false)"/>
        <g-image v-else class="mr-6 cursor-pointer" src="~/assets/svg/unblocked.svg"
                 @click="toggleSubUserState(index,true)"/>
        <g-image class="cursor-pointer" src="~/assets/svg/trash.svg" @click="$emit('deleteUser')"/>
      </div>
      <div v-else class="flex items-center justify-center w-18 py-2 button save">
        Resend Invitation
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "SubUser",
  props: {
    subUser: {
      required: true,
    },
    index: {
      required: true
    }

  },
  computed: {
    ...mapGetters({
      roles: 'roles',
    }),
  },
  methods: {
    ...mapActions({
      changeSubUserRole: 'changeSubUserRole',
      togSubUserState: 'togSubUserState',

    }),
    changeRole(x) {
      let payload = {
        newRole: x,
        index: this.index
      }
      this.changeSubUserRole(payload)
    },
    toggleSubUserState(x, y) {
      let payload = {
        index: x,
        bool: y
      }
      this.togSubUserState(payload)

    }
  }
}
</script>

<style scoped>

</style>
