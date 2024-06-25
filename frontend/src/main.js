import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Ant Design
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

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

app.use(store).use(routers).use(Antd).mount("#app");
