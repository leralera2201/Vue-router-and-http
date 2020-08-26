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
        <h5 class="card-title mt-4 ml-3" v-if="!todos.length">There are no todos. Please, add some</h5>
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

    export default {
        name: 'Projects',
        components: {

        },

        data(){
            return {
                todos: [],
                title: '',
                isUpdate: false,
                id: ''
            }
        },

        beforeMount() {
            this.getTodos()
        },

        methods: {
            getTodos(){
                this.$http.get('todos.json')
                    .then(res => res.json())
                    .then(data => {
                        for(let key in data){
                            this.todos.push({id: key, ...data[key]})
                        }
                    })
            },
            deleteTodo(id) {
                this.$http.delete(`todos/${id}.json`)
                .then(() => {
                    this.todos = this.todos.filter(todo => todo.id !== id)
                })
                .catch(err => console.log(err))
            },

            createTodo() {
                this.$http.post('todos.json', {title: this.title})
                    .then((res) => {
                       this.todos.push({id: res.body.name, title: this.title})
                        this.title = ''
                    })
                .catch(err => console.log(err))

            },
            setUpdateTodo(todo) {
                this.isUpdate = true
                this.title = todo.title
                this.id = todo.id
            },

            updateTodo(id){
                this.$http.put(`todos/${id}.json`, {title: this.title})
                    .then(() => {
                        this.todos = this.todos.map(todo => {
                            if(todo.id === id){
                                todo.title = this.title
                            }
                            return todo
                        })
                        this.title = ''
                    })
                    .catch(err => console.log(err))
                this.isUpdate = false
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
