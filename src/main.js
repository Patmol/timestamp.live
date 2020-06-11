import Vue from 'vue';
import App from './App.vue';

// CSS files
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'lato-font/css/lato-font.css';

// JavaScript files
import './scripts/navbar';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
