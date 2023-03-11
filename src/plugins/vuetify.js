import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vuetify.config.silent = true;
Vue.use(Vuetify);

export default new Vuetify({ icons: { iconfont: "mdiSvg" } });
