import { Module } from 'vuex';
import { startCreate } from '@/services/api/home';
import State from './state';
import { GlobalState, THEME_TYPES, FreeCreateList } from '../../types/global';
import { AllModules } from '../../types/index';

import * as Types from './mutations-types';

const global: Module<GlobalState, AllModules> = {
  namespaced: true,
  state: State,
  mutations: {
    [Types.SET_THEME](state, payload: THEME_TYPES) {
      state.theme = payload;
    },
    [Types.SET_FREE_CREATE_LIST](state, payload: FreeCreateList[]) {
      state.freeCreateList = payload;
    },
  },
  actions: {
    async getFreeCreateList({ commit }) {
      try {
        const data = await startCreate<FreeCreateList>();
        commit('SET_FREE_CREATE_LIST', data);
      } catch (err) {
        // useMessage
      }
    },
  },
};

export default global;
