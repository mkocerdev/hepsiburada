/* eslint-disable arrow-body-style */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppDialogConfirmation from "./components/AppDialogConfirmation.vue";

import "./assets/css/common.css";

Vue.prototype.$confirm = (props) => {
  return new Promise((resolve) => {
    const dialog = new Vue({
      methods: {
        closeHandler(val) {
          this.$destroy();
          this.$el.remove();
          return val;
        },
      },
      render(h) {
        return h(AppDialogConfirmation, {
          props: {
            ...props,
          },
          on: {
            confirm: (val) => resolve(this.closeHandler(val)),
          },
        });
      },
    }).$mount();
    document.body.appendChild(dialog.$el);
  });
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
