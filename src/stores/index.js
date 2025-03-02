import { createStore } from 'vuex'

export default createStore({
  state: {
    currentUser: JSON.parse(localStorage.getItem('currentUser')),
  },
  getters: {
    currentUser: (state) => state.currentUser,
  },
  mutations: {
    updateUseInMutations(state, user) {
      state.currentUser = user
      localStorage.setItem('currentUser', JSON.stringify(user))
    },

    clearUserInMutations(state) {
      state.currentUser = null
      localStorage.removeItem('currentUser')
    },
  },
  actions: {
    updateUser(state, user) {
      state.commit('updateUseInMutations', user)
    },
    clearUser(state) {
      state.commit('clearUserInMutations')
    },
  },
  modules: {},
})
