import Vue from 'vue';
import Vuex from 'vuex';

import globalTitle from '@/store/modules/globalTitle';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        globalTitle
    }
});
