import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import { createPinia } from 'pinia';
import mainRoutes from './routes/main';
import { setupMock } from '@/utils/mock_request';

import '@/styles/main.scss';

// 是否开启mock
process.env.PUBLIC_MOCK && setupMock()

const pinia = createPinia();

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...mainRoutes],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 })
})

const app = createApp(App);
// app.component('svg-icon', SvgIcon);
app.use(pinia);
app.use(router);
app.mount('#root');
