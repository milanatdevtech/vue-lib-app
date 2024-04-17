<template>
    <nav class="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
        <div class="container">
            <a class="navbar-brand d-md-none" href="#">
                <img src="./../../assets/logo.png" />
            </a>

            <div class="offcanvas-body">
                <ul class="navbar-nav flex-grow-1 justify-content-between">
                    
                    <li class="nav-item"><router-link to="/">Books</router-link></li>
                    <li v-if="isAuthenticated" class="nav-item"><router-link to="/books/add">Add New Book</router-link></li>
                
                    <li v-if="isAuthenticated" class="nav-item"><router-link to="/profile">Profiles</router-link></li>
                
                </ul>
            </div>
            
        </div>
    </nav>
</template>

<script>

export default({
    computed: {
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated'];
    }
  }
})
</script>
