<template>
  <nav-bar></nav-bar>
  <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light">
    <div class="container">
      <main v-if="isAuthenticated">
        
        <div class="row">
          <div class="col-md-5 col-lg-4 order-md-last">
            <favorite-books></favorite-books>
          </div>
          <div class="col-md-7 col-lg-8">
            <router-view></router-view>          
          </div>
        </div>
      </main>
      <main v-else>
        <router-view></router-view>
      </main>
      <footer-component></footer-component>
    </div>
  </div>
</template>

<script>
import FooterComponent from './components/layout/FooterComponent.vue';
import NavBarComponent from './components/layout/NavBarComponent.vue';
import FavoriteBooks from './pages/books/FavoriteBooks.vue';


export default {
  name: 'App',
  components: {   
    'footer-component' : FooterComponent,
    'nav-bar': NavBarComponent,
    'favorite-books': FavoriteBooks
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated'];
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin:0;
  padding:0;
}

.box-text, a {
  color:#f4a261!important;
}
</style>
