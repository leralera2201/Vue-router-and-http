import {getters} from "./getters";
import {actions} from "./actions";
import {state} from "./state";
import {mutations} from "./mutations";

const namespaced = true;

export const todosModule = 'todos';

export const todos = {
    namespaced,
    getters,
    actions,
    state,
    mutations
}
