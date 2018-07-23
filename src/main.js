import Vue from 'vue';
import vuescroll from 'vue-scroll';

import './assets/scss/animate.css';
import App from './App.vue';

Vue.use(vuescroll, { debounce: 600 });
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
