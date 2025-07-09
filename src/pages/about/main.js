import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import App from "./App.vue";
import Api from "../../api/api.js";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

console.log("aaaaaaa");
const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.provide("Api", {
  ...Api,
});
app.use(pinia);
app.mount("#app");
