import DefaultLayout from '~/layouts/Default.vue'

// vuex
import Vuex from 'vuex'
import store from '~/store'
// vuex
// Notification
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
// Notification


export default function (Vue, {router, head, isClient, appOptions}) {
  // vuex
  Vue.use(Vuex)
  appOptions.store = store
  // vuex
// Notification
  Vue.use(VueToast);
// Notification
  Vue.component('Layout', DefaultLayout)
}
