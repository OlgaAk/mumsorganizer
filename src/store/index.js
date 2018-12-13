import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

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
    user: null
  },
  mutations: {
    createPill (state, payload) {
      state.loadedPills.push(payload)
    }, 
    setUser (state, payload) {
      state.user = payload
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
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              loadedPills: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    }
  },
  getters: {
    loadedPills (state) {
      return state.loadedPills
    },
    user (state) {
      return state.user
    }
  }
})