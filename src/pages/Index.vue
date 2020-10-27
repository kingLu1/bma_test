<template>
  <Layout>

    <!--    Delete User Dialog box-->
    <DeleteUser v-if="showDeleteUserBox" :activeSubUser="activeSubUser" @closeDeleteUserBox="test()"/>
    <!--    Delete User Dialog box-->
    <!--    Edit User Dialog box-->
    <EditUser v-if="showEditUserBox" @closeEditUserBox="test()"/>
    <!--    Edit User Dialog box-->
    <div v-if="showLoading" class="loading h-screen w-screen flex absolute justify-center items-center">
      <p class="text-6xl text-black">Loading.....</p>
    </div>
    <div v-if="!showLoading" class="flex pt-16 sm:px-8">
      <!--      user profile-->
      <div class="w-1/3 pt-12 profile">
        <div class="flex justify-between mb-10">
          <div>
            <div class="relative w-24 h-24 bg-white rounded-lg profile_picture">
              <g-image v-if="parsedUser" :src="parsedUser.image_url || '~/assets/svg/user2.svg'"
                       class="w-full" fit="fill"/>
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
          <div class="flex pr-5">
            <div class="pt-10">
              <p class="flex text-xl border-b-2 justify-self-center border-theme-navy_blue text-theme-navy_blue"
                 style="font-size: 28px;">
                {{ parsedUser.first_name }} {{ parsedUser.last_name }}</p>
            </div>
            <div>
              <div class="p-2 rounded-full cursor-pointer bg-theme-dim_gray" @click="showEditUserBox =!showEditUserBox">
                <g-image class="w-3" src="~/assets/svg/edit.svg"/>
              </div>
            </div>
          </div>
        </div>
        <div class="info">
          <g-image src="~/assets/svg/mail (1).svg"/>
          <p>{{ parsedUser.email }}</p>
        </div>
        <div class="info">
          <g-image src="~/assets/svg/phone.svg"/>
          <p>{{ parsedUser.phone }}</p>
        </div>
        <div class="info">
          <g-image src="~/assets/svg/pin.svg"/>
          <p>{{ parsedUser.address }}</p>
        </div>
        <div v-if="!showChangePassword" class="info">
          <g-image src="~/assets/svg/lock (1).svg"/>
          <div @click="showChangePassword =!showChangePassword">
            <p class="ml-5 border-b-2 cursor-pointer border-theme-brilliant_blue text-theme-brilliant_blue">
              Change Password</p>
          </div>
        </div>
        <div v-else class="password">
          <div>
            <g-image src="~/assets/svg/lock (1).svg"/>
            <input class="" placeholder="Old Password"
                   type="email">
          </div>
          <div>
            <g-image src="~/assets/svg/lock (1).svg"/>
            <input class="" placeholder="New Password"
                   type="email">
          </div>
          <div>
            <g-image src="~/assets/svg/lock (1).svg"/>
            <input class="" placeholder="Confirm Password"
                   type="email">
          </div>
          <div class="flex items-center justify-end">
            <p class="w-24 py-2 mt-5 button save" @click="updatePassword()">
              Update Password
            </p>
          </div>

        </div>
      </div>
      <!--      user profile-->
      <!--      subUsers profile-->
      <div class="flex flex-col w-2/3 subUsers">
        <div v-if="showInvite" class="flex justify-end w-full mb-5">
          <div class="flex items-center justify-between w-48 mr-5 button">
            Resend Invitation
            <g-image src="~/assets/svg/sent.svg"/>
          </div>
          <div class="flex items-center justify-between w-40 button" @click="showInvite=!showInvite">
            Invite User
            <g-image src="~/assets/svg/more.svg"/>
          </div>
        </div>
        <div v-else class="flex justify-end w-full mb-4">
          <div class="flex justify-end" @click="showInvite=!showInvite">
            <g-image class="w-8 cursor-pointer" src="~/assets/svg/cancel.svg"/>
          </div>
        </div>
        <div class="w-full bg-white rounded shadow-lg card">
          <div class="heading">
            <p class="mb-16 text-theme-brilliant_blue">Users</p>
          </div>
          <div v-if="!showInvite" :class="{'-mt-8': !showInvite,'mb-8': !showInvite}"
               class="flex justify-between px-10 invite">
            <div class="w-1/3">
              <input v-model="newSubUser.email" class="w-full px-3 py-2 border-b-2 border-theme-brilliant_blue"
                     placeholder="Type Email Address"
                     type="email">
            </div>
            <div class="relative w-1/3">
              <g-image class="absolute right-0 py-2" src="~/assets/svg/arrow_down.svg"/>

              <select v-model="newSubUser.role"
                      class="block w-full px-2 py-2 border-b-2 appearance-none border-theme-brilliant_blue">
                <option v-for="role in roles" v-bind:value="role.name">{{ role.name }}</option>
              </select>
            </div>
            <div class="flex items-center justify-center w-40 button" @click="createNewSubUser()">
              Invite User
            </div>

          </div>
          <div class="users">
            <div v-for="(subUser,index) in parsedUser.sub_users" :key="index"
                 :class="{'text-theme-mischka': !subUser.has_activated}"
                 class="user">
              <div class="photo">
                <g-image src="~/assets/svg/user2.svg"/>
              </div>
              <div class="username">
                <p>{{ subUser.first_name }}</p>
              </div>
              <div class="email">
                <p>{{ subUser.email }}</p>
              </div>
              <div class="relative role">
                <g-image class="absolute right-0 py-2" src="~/assets/svg/arrow_down.svg"/>
                <select v-model="subUser.role.name" :class="{'bg-white': !subUser.has_activated}"
                        :disabled="!subUser.has_activated"
                        class="cursor-pointer w-full px-2 py-2 mr-4 appearance-none border-theme-brilliant_blue">
                  class="cursor-pointer w-full px-2 py-2 mr-4 appearance-none border-theme-brilliant_blue">
                  <option v-for="role in roles" v-bind:value="role.name">{{ role.name }}</option>

                </select>
              </div>
              <div class="actions flex">
                <div v-if="subUser.has_activated" class="flex ml-8">
                  <g-image v-if="subUser.is_active" class="mr-6" src="~/assets/svg/block.svg"/>
                  <g-image v-else class="mr-6" src="~/assets/svg/unblocked.svg"/>
                  <g-image src="~/assets/svg/trash.svg" @click="deleteUser(index)"/>
                </div>
                <div v-else class="flex items-center justify-center w-18 py-2 button save">
                  Resend Invitation
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!showChangePassword" class="flex justify-end w-full mt-8">
          <div class="flex items-center justify-center w-24 py-2 button save">
            Save
          </div>
        </div>
      </div>
      <!--      subUsers profile-->
    </div>
  </Layout>
</template>

<script>
import DeleteUser from "../components/User/DeleteUser";
import EditUser from "../components/User/EditUser";
import {mapActions, mapGetters} from 'vuex'

export default {
  metaInfo: {
    title: 'Home'
  },
  data: () => ({
    showInvite: true,
    showDeleteUserBox: false,
    showEditUserBox: false,
    showChangePassword: false,
    newSubUser: {
      email: '',
      role: 'admin'
    },
    activeSubUser: null,

  }),
  watch: {
    user() {
      console.log('new')
    }
  },
  computed: {
    ...mapGetters({
      roles: 'roles',
      user: 'user',
      showLoading: 'showLoading'
    }),
    parsedUser() {
      return (process.isClient) ? JSON.parse(this.user) : '';
    }
  },
  components: {
    DeleteUser,
    EditUser
  },
  methods: {
    ...mapActions({
      getRoles: 'getRoles',
      getUser: 'getUser',
      createSubUser: 'createSubUser'
    }),
    deleteUser(x) {
      this.showDeleteUserBox = true
      this.activeSubUser = x
    },
    test() {
      this.showDeleteUserBox = false
      this.showEditUserBox = false
    },
    updatePassword() {
      this.showChangePassword = false
    },
    createNewSubUser() {
      const payload = this.newSubUser
      this.createSubUser(payload)
    }
  },
  mounted() {
    this.getRoles()
    this.getUser()
  },
}
</script>

<style scoped>
.button {
  @apply px-2 py-1 text-white rounded shadow cursor-pointer bg-theme-brilliant_blue;
  font-size: 10px;
}

.card {
  @apply p-6 py-4
}


.user {
  @apply flex items-center justify-between py-2 pb-4 mt-2 border-b border-theme-dim_gray;
}

.user:last-child {
  @apply border-0
}

.actions {

}

.save {
  @apply p-2;
}

.info {
  @apply flex py-3;
}

.info > p {
  @apply ml-5;
}

.password {
  @apply pr-10;
}

.password > div {
  @apply flex py-1;
}

.password > div > input {
  @apply w-full px-2 py-2 ml-5 border-b-2 bg-theme-azure border-theme-brilliant_blue;
}
</style>
