import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedPills: [
      // {
      //   id: 1,
      //   title: 'Фенистил',
      //   amount : '4 капли',
      //   timesDay : 3,
      //   days : 7,
      //   dateAdded: '2018-12-06'
      // },
      // {
      //   id: 2,
      //   title: 'Изофра',
      //   amount : '1 пшик',
      //   timesDay : 3,
      //   days : 7,
      //   dateAdded: '2018-12-06'
      // },

    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedPills (state, payload) {
      state.loadedPills = payload
    },
    createPill (state, payload) {
      state.loadedPills.push(payload)
    }, 
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    loadPills({commit}){
      firebase.database().ref('pills').once('value')
        .then(
          data =>{
            const pills = []
            const obj = data.val()
            for(let key in obj){
              pills.push({
                id: key,
                title: obj[key].title,
                amount : obj[key].amount,
                timesDay : obj[key].timesDay,
                days : obj[key].days,
                dateAdded: obj[key].dateAdded,
              })
            }
            commit('setLoadedPills', pills)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    createPill ({commit}, payload) {
      const pill = {
        title: payload.title,
        amount : payload.amount,
        timesDay : payload.timesDay,
        days : payload.days,
        dateAdded: payload.dateAdded.toISOString(),
      }
      firebase.database().ref('pills').push(pill)
        .then(
          data => {
            const key = data.key
            commit('createPill', {
              ...pill,
            id: key
          })
          })
        .catch(
          error => {
            console.log(error)
          }
        )
     
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              loadedPills: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser= {
              id: user.uid,
              loadedPills: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    clearError({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loadedPills (state) {
      return state.loadedPills
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error(state) {
      return state.error
    }
  }
})