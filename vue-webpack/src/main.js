import Vue from "vue";
import App from "view/App";
import router from "router";
import store from "store";
import component from "comp";
import "common/sass/common.scss";

Vue.use(component)

const vm = new Vue({
    el: "#app",
    router,
    store,
    template: "<App/>",
    components: {
        App
    }
})