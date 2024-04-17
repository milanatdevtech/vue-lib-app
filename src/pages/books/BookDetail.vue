<template>
    <div>  
      <base-card>
        <section>
          <book-details
            :title="selectedBook.title"
            :description="selectedBook.description"
            :author="selectedBook.author"
            :numPage="selectedBook.numPage"
            :year="selectedBook.year"
            :bookPhoto="selectedBook.image"
            :isbn="selectedBook.isbn"
            @add-to-favorite="addToFavorite"
          >

          </book-details>

            
    <!--
            <transition name="fade-button" mode="out-in">
              <button @click="addToFavorite(selectedBook.title)" v-if="!notFavorite">Add to favorite</button>
              <button v-else>Already submitted</button>
            </transition>

            <button class="btn btn-primary" @click="addToFavorite(selectedBook.title)">Add to favorite</button> -->
        </section>
      </base-card>
  </div>
</template>

<script>
import BookDetails from './../../components/books/BookDetails.vue';

export default {
  components: {
    BookDetails 
  },
  data() {
    return {
      isLoading: true,
      //notFavorite: false,
    };
  },
  computed: {
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },

    selectedBook() {
      const book = this.$store.getters['books/getBookById'](this.$route.params.id);
      console.error('book: ', book);
      return book;
    }
  },
  methods: {
    addToFavorite(title) {
      this.notFavorite = true;
      this.$store.dispatch('books/addToCart', title);
    }
  }  
};
</script>

<style>
  .fade-button-enter-from,
  .fade-button-leave-to {
    opacity:0;
  }

  .fade-button-enter-active {
    transition: opacity 0.3s ease-out;
  }

  .fade-button-leave-active {
    transition: opacity 0.3s ease-in;
  }

  .fade-button-enter-to,
  .fade-button-leave-from {
    opacity: 1;
  }
</style>