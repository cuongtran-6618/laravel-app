import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import "./axios";
import App from './App.vue';
import "./assets/main.css";
  
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router)
});
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');
