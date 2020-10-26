import DefaultLayout from '~/layouts/Default.vue'

// vuex
import Vuex from 'vuex'
import store from '~/store'
// vuex

export default function (Vue, {router, head, isClient, appOptions}) {
  // vuex
  Vue.use(Vuex)
  appOptions.store = store
  // vuex

  Vue.component('Layout', DefaultLayout)
}
