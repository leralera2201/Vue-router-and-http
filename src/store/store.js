import Vue from 'vue';
import Vuex from 'vuex';
import {todosModule, todos} from "./todos/todos";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        [todosModule]: todos
    }
})
