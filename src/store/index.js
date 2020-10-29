import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = {
  state: {
    roles: [],
    user: (process.isClient) ? localStorage.getItem('user') : '',
    loading: true,
    mockApi: 'https://jsonplaceholder.typicode.com'
  },
  getters: {
    roles: state => {
      return state.roles
    },
    user: state => {
      return (process.isClient) ? JSON.parse(state.user) : '';

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
        if (state.user) {
          state.user = localStorage.getItem('user')
        } else {
          let stringify = JSON.stringify(payload.data);
          localStorage.setItem('user', stringify)
          state.user = localStorage.getItem('user')
        }
        state.loading = false
      }
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
          ).catch(err => Vue.$toast.error(err, {
        position: 'top-right'
      }))
    },
    getUser(vuexIns) {
      vuexIns.state.loading = true
      axios.get('/user.json')
          .then(res => {
                vuexIns.commit('SET_USER', res.data)
              }
          ).catch(err => Vue.$toast.error(err, {
        position: 'top-right'
      }))
    },
    // Fetch From Db

    //User Operations
    updateUserInfo(vuexIns, payload) {
      vuexIns.state.loading = true
      axios.put(`${vuexIns.state.mockApi}/posts/1`, {
        body: payload
      })
          .then(response => {
            Vue.$toast.success('User Profile Was Edited Successfully.', {
              position: 'top-right'
            })
            if (process.isClient) {
              const stringify = JSON.stringify(payload);
              localStorage.setItem('user', stringify)
              vuexIns.commit('GET_USER')
            }
            vuexIns.state.loading = false

          })
          .catch(e => {
            Vue.$toast.error(e, {
              position: 'top-right'
            })
            vuexIns.state.loading = false
          })
    },
    changePassword(vuexIns, payload) {
      vuexIns.state.loading = true
      axios.put(`${vuexIns.state.mockApi}/posts/1`, {
        body: payload
      })
          .then(response => {
            Vue.$toast.success('Password was Changed Successfully.', {
              position: 'top-right'
            })
            vuexIns.state.loading = false
          })
          .catch(e => {
            Vue.$toast.error(e, {
              position: 'top-right'
            })
            vuexIns.state.loading = false
          })
    },
    createSubUser(vuexIns, payload) {
      vuexIns.state.loading = true
      axios.post(`${vuexIns.state.mockApi}/posts`, {
        body: payload
      })
          .then(response => {
            Vue.$toast.success('SubUser Was Created Successfully.', {
              position: 'top-right'
            })
            if (process.isClient) {
              let user = vuexIns.getters.user
              let newSubUser = {
                user_id: "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
                first_name: "Munachim Anyamene",
                is_active: true,
                email: payload.email,
                has_activated: true,
                role: {
                  role_id: "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
                  name: payload.role
                }
              }
              user.sub_users.push(newSubUser)
              vuexIns.dispatch('db_OI', user)
              vuexIns.state.loading = false
            }
          })
          .catch(e => {
            Vue.$toast.error(e, {
              position: 'top-right'
            })
            vuexIns.state.loading = false
          })


    },
    deleteSubUser(vuexIns, payload) {
      vuexIns.state.loading = true
      axios.delete(`${vuexIns.state.mockApi}/posts/1`, {
        body: payload
      })
          .then(response => {
            Vue.$toast.success('SubUser Was Deleted Successfully.', {
              position: 'top-right'
            })
            if (process.isClient) {
              let user = vuexIns.getters.user
              user.sub_users.splice(payload, 1)
              vuexIns.dispatch('db_OI', user)
            }
            vuexIns.state.loading = false
          })
          .catch(e => {
            Vue.$toast.error(e, {
              position: 'top-right'
            })
            vuexIns.state.loading = false
          })

    },
    togSubUserState(vuexIns, payload) {
      vuexIns.state.loading = true
      axios.put(`${vuexIns.state.mockApi}/posts/1`, {
        body: payload
      })
          .then(response => {
            Vue.$toast.success('Action Was Successful.', {
              position: 'top-right'
            })
            let index = payload.index
            let user = vuexIns.getters.user
            user.sub_users[index].is_active = payload.bool
            if (process.isClient) {
              vuexIns.dispatch('db_OI', user)
              vuexIns.state.loading = false

            }
          })
          .catch(e => {
            Vue.$toast.error(e, {
              position: 'top-right'
            })
            vuexIns.state.loading = false
          })

    },
    changeSubUserRole(vuexIns, payload) {
      vuexIns.state.loading = true
      axios.put(`${vuexIns.state.mockApi}/posts/1`, {
        body: payload
      })
          .then(response => {
            Vue.$toast.success('Role Was Changed Successfully.', {
              position: 'top-right'
            })
            let index = payload.index
            let role = payload.newRole
            let user = vuexIns.getters.user
            user.sub_users[index].role.name = role
            if (process.isClient) {
              vuexIns.dispatch('db_OI', user)
            }
            vuexIns.state.loading = false
          })
          .catch(e => {
            vuexIns.state.loading = false
            Vue.$toast.error(e, {
              position: 'top-right'
            })
          })
    },


    //User Operations

    // ReUsable Methods
    db_OI(vuexIns, payload) {
      const stringify = JSON.stringify(payload);
      localStorage.setItem('user', stringify)
      vuexIns.commit('GET_USER')
    },
    mock() {

    },


  }
}


export default new Vuex.Store(store)
