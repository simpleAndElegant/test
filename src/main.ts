import { createApp } from 'vue';
import { registerMicroApps, start } from 'qiankun';
import App from './App.vue';
import router from './router';
import store from './store';

const apps = [
  {
    name: 'vueApp', // 应用的名字
    entry: '//localhost:10000', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: '#vue', // 容器名
    activeRule: '/vue', // 激活的路径
  },
];

registerMicroApps(apps, {
  beforeLoad: (app) => {
    console.log('before load', app.name);
    return Promise.resolve();
  },
  afterMount: (app) => {
    console.log('after mount', app.name);
    return Promise.resolve();
  },
});

start({
  prefetch: false,
});

createApp(App).use(store).use(router).mount('#container');
