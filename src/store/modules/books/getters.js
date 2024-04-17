export default {
    getAllBooks: (state) => {
        if(state.searchFilterTitle == '') {
            return state.books;
        }

        return state.books.filter(
            book => book.title.toLowerCase().includes(state.searchFilterTitle.toLowerCase())
        );
    },

    getAllBooksByAuthor: (state) => {
        if(state.searchFilterAuthor == '') {
            return state.books;
        }

        return state.books.filter(
            book => book.author.toLowerCase().includes(state.searchFilterAuthor.toLowerCase())
        );
    },

    getBookById: (state) => (bookId) => {
        return state.books.find( p => p.id == bookId);
    },

    carts: (state) => {
        return state.cart;
    },

    getFavoriteBooksCount: (state) => {
        return state.cart.length;
    }
}