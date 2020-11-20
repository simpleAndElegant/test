import { createStore } from 'vuex';
import { AllModules } from './types/index';
import global from './modules/global/index';

//  AllModules 更好的获取类型推导
const Store = createStore<AllModules>({
  modules: {
    global,
  },
});

export default Store;
