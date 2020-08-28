import {GET_TODOS_GETTER, TODOS_LENGTH} from "./types";

export const getters ={
    [TODOS_LENGTH]: (state) => {
        return state.todos.length
    },
    [GET_TODOS_GETTER]: state => {
        return state.todos
    }
}
