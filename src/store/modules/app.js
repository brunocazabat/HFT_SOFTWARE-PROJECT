// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      to: '/dashboard/',
    },
    {
      title: 'Machines List',
      icon: 'mdi-clipboard-outline',
      to: '/machinelist/',
    },
    {
      title: 'Settings',
      icon: 'mdi-account',
      to: '/settings/',
    },
    {
      title: 'Administrator Settings',
      icon: 'mdi-chart-bubble',
      to: '/adminsettings/',
    },
  ],
  authenticationToken: null,
  location: null,
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
