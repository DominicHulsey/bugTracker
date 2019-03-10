import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let _bugApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Dom5/bugs/'
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
    },
  },
  actions: {
    createBug({ commit, dispatch }, payload) {
      _bugApi.post('', payload)
        .then(res => {
          commit('addBug', res.data.results)
          dispatch('getBugs')
        })
    },
    getBugs({ commit, dispatch }) {
      _bugApi.get('')
        .then(res => {
          commit('setBugs', res.data.results)
        })
    },
    setActiveBug({ commit, dispatch }, payload) {
      commit('setActive', payload)
    },
    changeStatus({ commit, dispatch }) {
      let id = this.state.activeBug
      _bugApi.delete('' + id)
        .then(res => {
        })
    },
    createNote({ commit, dispatch }, payload) {
      let id = this.state.activeBug
      _bugApi.post(id + '/notes', payload)
        .then(res => {
          dispatch('getNotes')
          console.log(res.data.results)
        })
    },
    getNotes({ commit, dispatch }) {
      let id = this.state.activeBug
      _bugApi.get(id + '/notes')
        .then(res => {
          commit('setNotes', res.data.results)
        })
    },
    setId({ commit, dispatch }, payload) {
      commit('setActive', payload)
    }
  }
})
