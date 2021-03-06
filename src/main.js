import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes.js';

const EventBus = new Vue();
export default EventBus;

Vue.use(VueRouter);
const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app');
