import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faBookOpenReader,
  faBars,
  faBook,
  faBookmark,
  faGift,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faBookOpenReader);
library.add(faBars);
library.add(faBook);
library.add(faBookmark);
library.add(faGift);
library.add(faFire);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
