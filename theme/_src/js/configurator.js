import { createApp } from "vue";
import router from './configurator/router';
import App from "./configurator/App.vue";

createApp(App).use(router).mount('#app')
