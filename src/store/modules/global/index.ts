import { Module } from 'vuex'
import state from './state';
import { AllModules } from '../../types'
import { GlobalState, THEME_TYPES } from '../../types/global'
import { SET_THEME } from './mutations-types'

const global:Module<GlobalState, AllModules> = {
  namespaced: true,
  state,
  mutations:{
    [SET_THEME](state, payload: THEME_TYPES ) {
      state.theme = payload
    }
  },
}

export default global
