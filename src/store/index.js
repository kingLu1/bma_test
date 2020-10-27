import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = {
  state: {
    roles: [],
    user: (process.isClient) ? localStorage.getItem('user') : '',
    loading: false,
  },
  getters: {
    roles: state => {
      return state.roles
    },
    user: state => {
      return state.user
    },
    showLoading: state => {
      return state.loading
    }
  },
  mutations: {
    SET_USER_ROLES(state, payload) {
      state.roles = payload
    },
    SET_USER(state, payload) {

      if (process.isClient) {
        const stringify = JSON.stringify(payload.data);
        (state.user) ? state.user = localStorage.getItem('user') : localStorage.setItem('user', stringify)
      }

      state.loading = false
    },
    GET_USER(state) {
      if (process.isClient) {
        state.user = localStorage.getItem('user')
      }

    }
  },
  actions: {
    // Fetch From Db
    getRoles(vuexIns) {
      axios.get('/roles.json')
          .then(res => {
                vuexIns.commit('SET_USER_ROLES', res.data.data)
              }
          ).catch(err => console.log('err:', err))
    },
    getUser(vuexIns) {
      vuexIns.state.loading = true
      axios.get('/user.json')
          .then(res => {
                vuexIns.commit('SET_USER', res.data)
              }
          ).catch(err => console.log('err:', err))
    },
    // Fetch From Db

    //User Operations
    createSubUser(vuexIns, payload) {

      if (process.isClient) {
        let user = JSON.parse(vuexIns.state.user)
        let newSubUser = {
          user_id: "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
          first_name: "Munachim Anyamene",
          is_active: true,
          email: payload.email,
          has_activated: false,
          role: {
            role_id: "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
            name: payload.role
          }
        }
        user.sub_users.push(newSubUser)
        const stringify = JSON.stringify(user);
        localStorage.setItem('user', stringify)
      }
      vuexIns.commit('GET_USER')

    },
    deleteSubUser(vuexIns, payload) {
      if (process.isClient) {
        let user = JSON.parse(vuexIns.state.user)
        user.sub_users.splice(payload, 1)
        const stringify = JSON.stringify(user);
        localStorage.setItem('user', stringify)
        vuexIns.commit('GET_USER')
      }


    }

    //User Operations

  }
}


export default new Vuex.Store(store)
