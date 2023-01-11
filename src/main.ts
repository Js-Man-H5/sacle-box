/*
 * @Author: jack.hai
 * @Date: 2023-01-05 10:29:31
 * @LastEditTime: 2023-01-10 11:31:43
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import sacleBox from "./components/index";
const app = createApp(App);

app.use(router);
app.use(sacleBox);
app.mount("#app");
app.config;
