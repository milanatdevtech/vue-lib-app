export default {
        SET_BOOKS(state, newData) {
            state.books = newData;
        },

        ADD_NEW_BOOK(state, newBook) {
            state.books = [ ...state.books, newBook ];
            console.error(state.books);
        },

        ADD_TO_CART(state, title) {
             console.log('add to cart mutation', state, title);
             state.cart.push({ 'title': title});
             console.error('cart: ', state.cart);
        },
        
        REMOVE_FROM_CART(state, title) {
            state.cart = state.cart.filter(item => item.title !== title);
        }, 

        SET_SEARCH_FILTER_TITLE(state, search) {
            state.searchFilterTitle = search;
        },

        SET_SEARCH_FILTER_AUTHOR(state, search) {
            state.searchFilterAuthor = search;
        },
}