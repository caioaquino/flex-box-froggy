import { createApp } from "vue";
import { createPinia } from "pinia";
import { SnackbarService, Vue3Snackbar } from "vue3-snackbar";
import "vue3-snackbar/dist/style.css";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(SnackbarService);
app.component("vue3-snackbar", Vue3Snackbar);
app.mount("#app");
