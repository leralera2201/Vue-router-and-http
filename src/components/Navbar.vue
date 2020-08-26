<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Home</router-link>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link
                            class="nav-link"
                            to="/projects"
                            active-class="active"
                            exact
                    >
                        Projects
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                            class="nav-link"
                            to="/contacts"
                            active-class="active"
                            exact
                    >
                        Contacts
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

    export default {
        name: 'Navbar',
        components: {

        }
    }
</script>

<style>

</style>
