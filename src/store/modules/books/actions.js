import BookService from './../../../service/booksService.js';
export default {
    updateData(context, payload) {
        console.error('akcija updateData: ', payload);
        context.commit('SET_BOOKS', payload);
    },
  
    async addNewBook(context, payload) {

        const bookService = new BookService();
        const response = await bookService.post('http://localhost:5092/api/Books', payload);
        console.error('repsone: ', response);

        context.commit('ADD_NEW_BOOK', response.data);
    },

    setSearchFilterTitle(context, payload) {
        context.commit('SET_SEARCH_FILTER_TITLE', payload);
    },
    
    setSearchFilterAuthor(context, payload) {
        context.commit('SET_SEARCH_FILTER_AUTHOR', payload);
    },

    addToCart(context, payload) {
        console.log('add to cart action: ', payload);
        context.commit('ADD_TO_CART', payload);
    },

    removeFromCart(context, productId) {
        context.commit('REMOVE_FROM_CART', productId);
    },
}