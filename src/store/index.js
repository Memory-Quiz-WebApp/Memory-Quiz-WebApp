export const state = () => {
  return {
    ready: false,
    user: null
  }
}

export const mutations = {
  resetUser: state => {
    state.user = null
  },
  setAuthUser(state, { authUser }) {
    if (authUser) {
      const {
        displayName,
        email,
        emailVerified,
        isAnonymous,
        photoUrl,
        providerData,
        // refreshToken,
        uid
      } = authUser
      state.user = {
        displayName,
        email,
        emailVerified,
        isAnonymous,
        photoUrl,
        providerData,
        // refreshToken,
        uid
      }
    }
  },
  setReady(state, ready = true) {
    state.ready = ready
  }
}

export const getters = {
  getReady(state) {
    return state.ready
  }
}

export const actions = {
  onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      commit('resetUser')
      return
    }
    commit('setAuthUser', { authUser })
  },
  set_ready({ commit }, ready) {
    commit('setReady', ready)
  }
}
