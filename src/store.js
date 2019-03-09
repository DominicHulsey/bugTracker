import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let _bugApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Dom2/bugs/'
})

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: [],
    notes: []
  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },
    addBug(state, data) {
      state.bugs.push(data)
    },
    setActive(state, data) {
      state.activeBug = data
    },
    setNotes(state, data) {
      state.notes = data
    }
  },
  actions: {
    createBug({ commit, dispatch }, payload) {
      _bugApi.post('', payload)
        .then(res => {
          console.log(res.data.results)
          commit('addBug', res.data.results)
        })
    },
    getBugs({ commit, dispatch }) {
      _bugApi.get('')
        .then(res => {
          commit('setBugs', res.data.results)
          console.log(res.data.results)
        })
    },
    setActiveBug({ commit, dispatch }, payload) {
      commit('setActive', payload)
    },
    changeStatus({ commit, dispatch }, payload) {
      console.log(payload)
      _bugApi.delete('' + payload)
        .then(res => {
          dispatch('getBugs')
        })
    },
    createNote({ commit, dispatch }, payload) {
      let id = this.state.activeBug
      _bugApi.post(id + '/notes', payload)
        .then(res => {
          dispatch('getNotes')
        })
    },
    getNotes({ commit, dispatch }) {
      let id = this.state.activeBug
      _bugApi.get(id + '/notes')
        .then(res => {
          commit('setNotes', res.data.data)
        })
    },
    setId({ commit, dispatch }, payload) {
      commit('setActive', payload)
    }
  }
})
