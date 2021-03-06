import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin);

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

Vue.config.productionTip = false

import { Icon }  from 'leaflet'
import 'leaflet/dist/leaflet.css'
// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

