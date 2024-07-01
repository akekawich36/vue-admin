import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Ant Design
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import { DatePicker } from 'ant-design-vue';

// dayjs
import './components/DatePicker/dayjsLocale';  // Corrected import path

// VueX
import store from "./store";

// routers
import routes from "./routes";
import { createWebHistory, createRouter } from "vue-router";

const routers = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(DatePicker).use(store).use(routers).use(Antd).mount("#app");
