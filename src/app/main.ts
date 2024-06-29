import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Hora from "@primevue/themes/nora";
import App from "./app.vue";
import { router } from "./router";

import "./styles/global.css"
import "primeicons/primeicons.css";

createApp(App)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Hora,
    },
  })
  .mount("#app");
