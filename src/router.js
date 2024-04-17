import { createRouter, createWebHistory } from 'vue-router';

import BookList from './pages/books/BookList.vue';
import BookDetail from './pages/books/BookDetail.vue';
import LoginComponent from './pages/auth/LoginComponent.vue';
import BookForm from './components/books/BookForm.vue';
import ProfileComponent from './pages/auth/ProfileComponent.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/books' },
    { path: '/profile', component: ProfileComponent, meta: { requiresAuth: true } },
    { path: '/books', component: BookList, meta: { requiresAuth: true } },
    { path: '/books/add', component: BookForm, meta: { requiresAuth: true } },
    { path: '/books/by-author/:author', component: BookList, meta: { requiresAuth: true } },
    { path: '/books/:id', component: BookDetail, meta: { requiresAuth: true }},
    { path: '/auth', component: LoginComponent },
    { path: '/:notFound(.*)', component: NotFound, meta: { requiresAuth: true } }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters['auth/isAuthenticated']) {
    next('/books');
  } else {
    next();
  }
});
export default router;