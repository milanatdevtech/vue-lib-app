<template>
    <div>
        <base-card v-if="isAuthenticated">
            <h3>{{  profileUser.firstName }} {{  profileUser.lastName }}</h3>
            <p>Email: {{  profileUser.email }}</p>
            <p>Username: {{  profileUser.username }}</p>

            <base-button @click="logout">Logout</base-button>
        </base-card>
    </div>
</template>

<script>
    export default {
        computed: {
            profileUser() {
                return this.$store.getters['auth/getUser'];
            },
            isAuthenticated() {
                return this.$store.getters['auth/isAuthenticated'];
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('auth/logout');
                this.$router.push('/');
            }
        }
    }
</script>