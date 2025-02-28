import { defineStore } from 'pinia'
import Role from '@/models/role'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    currentUser: JSON.parse(localStorage.getItem('currentUser')),
    isAdmin: false,
  }),

  getters: {
    isLoggedIn: (state) => {
      return state.currentUser !== null
    },
    isAdmin: (state) => {
      state.isAdmin = state.currentUser && state.currentUser.role === Role.ADMIN
      return state.currentUser && state.currentUser.role === Role.ADMIN
    },
  },

  actions: {
    updateUser(state, user) {
      state.currentUser = user
      localStorage.setItem('currentUser', JSON.stringify(user))
    },

    clearUser(state) {
      state.currentUser = null
      localStorage.removeItem('currentUser')
    },
  },
})
