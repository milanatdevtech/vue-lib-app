<template>
    <div>  
        <base-card>
            <search-filter></search-filter>
        </base-card>
        <base-card>
            <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
                <p>{{ error }}</p>
            </base-dialog>

            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>

            <book-item
                v-for="book in books"
                :key="book.id"
                :id="book.id"
                :isbn="book.isbn"
                :title="book.title"
                :author="book.author"
                :pageNum="book.pageNum"  
                :bookPhoto="book.image"            
                ></book-item>
        </base-card>
    </div>
</template>

<script>


import BooksService from '../../service/booksService.js';
import BookItem from './../../components/books/BookItem.vue';
import SearchFilterComponent from './../../components/layout/SearchFilterComponent.vue';
export default {
    components: {
        'book-item': BookItem,
        'search-filter': SearchFilterComponent,
    },
    data() {
        return {
            isLoading: false,
            error: null,
        }
    },
    computed: {
        books() {
            if(this.$route.params.author) {
                this.$store.dispatch('books/setSearchFilterAuthor', this.$route.params.author);
                return this.$store.getters['books/getAllBooksByAuthor'];
            } else {
                return this.$store.getters['books/getAllBooks'];
            }
        }
    },
    methods: {
        async fetchData() {        
            
            if(this.$store.getters['books/getAllBooks'].length == 0) {
            this.isLoading = true;
            const booksService = new BooksService();
            await booksService.getAllBooks('http://localhost:5092/api/Books')
                .then(response => {                    
                    this.$store.dispatch('books/updateData', response.data);
                    
                    this.isLoading = false;
                })
                .catch(error => {
                    this.isLoading = false;
                    this.error = error.message || 'Something went wrong!';
                    console.error('errors: ', error)
                })
            }
        },
        handleError() {
            this.error = null;
        }
    },
    
    created() {
      this.fetchData();
    },
    
}
</script>
