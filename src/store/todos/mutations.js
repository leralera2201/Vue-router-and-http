import {FILTER_TODOS, SET_TODOS, SET_UPDATED_TODOS} from "./types";

export const mutations = {
    [SET_TODOS]: (state, todosList) => {
        state.todos.push(todosList)
    },
    [FILTER_TODOS]: (state,id) => {
        state.todos = state.todos.filter(todo => todo.id !== id)
    },
    [SET_UPDATED_TODOS] : (state, {id, title}) => {
        state.todos = state.todos.map(todo => {
            if(todo.id === id){
                todo.title = title
            }
            return todo
        })
    }
}
