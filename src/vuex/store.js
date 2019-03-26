import Vue from 'vue'
import Vuex from 'vuex'

const createPersistedState = require('vuex-persistedstate').default;

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
    },
    plugins: [createPersistedState()]
});
