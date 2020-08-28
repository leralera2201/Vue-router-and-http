import {ADD_TODO, DELETE_TODO, FILTER_TODOS, GET_TODOS, SET_TODOS, SET_UPDATED_TODOS, UPDATE_TODO} from "./types";
import Vue from 'vue'

export const actions ={
    [GET_TODOS]: async ({commit}) => {
        try{
            const {data} = await Vue.http.get('todos.json')
            for(let key in data){
                commit(SET_TODOS, {id: key, ...data[key]})
            }
        }catch (e) {
            console.log(e)
        }
    },
    [ADD_TODO]: async({commit}, payload) => {
        try{
            const {body} = await Vue.http.post('todos.json', payload)
            commit(SET_TODOS, {id: body.name, ...payload})
        }catch(e){
            console.log(e)
        }
    },
    [DELETE_TODO]: async ({commit}, payload) => {
        try{
            await Vue.http.delete(`todos/${payload}.json`)
            commit(FILTER_TODOS, payload)
        }catch(e){
            console.log(e)
        }
    },
    [UPDATE_TODO]: async ({ commit}, payload) => {
        try{
            await Vue.http.put(`todos/${payload.id}.json`, {title: payload.title})
            commit(SET_UPDATED_TODOS, payload)
        }catch (e) {
            console.log(e)
        }
    }
}
