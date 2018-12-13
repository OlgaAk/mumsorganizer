import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedPills: [
      {
        id: 1,
        title: 'Фенистил',
        amount : '4 капли',
        timesDay : 3,
        days : 7,
        dateAdded: '2018-12-06'
      },
      {
        id: 2,
        title: 'Изофра',
        amount : '1 пшик',
        timesDay : 3,
        days : 7,
        dateAdded: '2018-12-06'
      },

    ],
    user: {
      id: 'ajaldslfalsk12',
      addedPills: [1]
    }
  },
  mutations: {
    createPill (state, payload) {
      state.loadedPills.push(payload)
    }
  },
  actions: {
    createPill ({commit}, payload) {
      const pill = {
        id: "some",
        title: payload.title,
        amount : payload.amount,
        timesDay : payload.timesDay,
        days : payload.days,
        dateAdded: payload.dateAdded,
      }
      // Reach out to firebase and store it
      commit('createPill', pill)
    }
  },
  getters: {
    loadedPills (state) {
      return state.loadedPills
    },
    
  }
})