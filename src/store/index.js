
import { createStore } from 'vuex';

import booksModule from './modules/books/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    books: booksModule,
    auth: authModule
  }
});

export default store;