import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { router } from './router';
import store from './store';
import Vuex from 'vuex';
import i18n from './i18n'
import "./assets/style.scss";
import "./assets/customCard.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

