<template>
    <div class="container mt-5">
        <form class="form-inline">
            <div class="form-group">
                <input type="text" class="form-control mx-sm-3" placeholder="Title" v-model="title">
                <button type="button" v-if="!isUpdate" class="btn btn-dark" @click="createTodo()">Create</button>
                <button type="button" v-if="isUpdate" class="btn btn-dark" @click="updateTodo(id)">Update</button>
                <button type="button" v-if="isUpdate" class="btn btn-dark ml-1" @click="cancel()">Cancel</button>
            </div>
        </form>
        <h5 class="card-title mt-4 ml-3" v-if="!todosLength">There are no todos. Please, add some</h5>
        <ul class="list-group mt-5" v-for="todo in todos" :key="todo.id">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                {{todo.title}}
                <div>
                    <button type="button" class="btn btn-secondary mr-1" @click="setUpdateTodo(todo)">Update</button>
                    <button type="button" class="btn btn-dark" @click="deleteTodo(todo.id)">Delete</button>
                </div>

            </li>

        </ul>
    </div>
</template>

<script>
    import {todosModule} from "../store/todos/todos";
    import {ADD_TODO, DELETE_TODO, GET_TODOS, GET_TODOS_GETTER, TODOS_LENGTH, UPDATE_TODO} from "../store/todos/types";
    import {createNamespacedHelpers} from "vuex";

    const {mapActions, mapGetters} = createNamespacedHelpers(todosModule)
    export default {
        name: 'Projects',
        components: {

        },

        data(){
            return {
                title: '',
                isUpdate: false,
                id: ''
            }
        },

        beforeMount() {
            this.getTodos()
        },
        computed: {
            ...mapGetters({
                todosLength: TODOS_LENGTH,
                todos: GET_TODOS_GETTER
            })
        },

        methods: {

            ...mapActions({
                addTodo: ADD_TODO,
                getTodosList: GET_TODOS,
                dropTodo: DELETE_TODO,
                putTodo: UPDATE_TODO
            }),

            async getTodos(){
               await this.getTodosList()
            },
            async deleteTodo(id) {
                await this.dropTodo(id)
            },

            async createTodo() {
                await this.addTodo({title: this.title})
                this.title = ''
            },
            setUpdateTodo(todo) {
                this.isUpdate = true
                this.title = todo.title
                this.id = todo.id
            },

            async updateTodo(id){
                await this.putTodo({id: id, title: this.title})
                this.isUpdate = false
                this.title=''
            },

            cancel(){
                this.id=''
                this.isUpdate=false
                this.title=''
            }
        }
    }
</script>

<style>

</style>
