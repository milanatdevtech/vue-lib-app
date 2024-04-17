<template>
    <div>
        <base-card>
            <h4 class="d-flex justify-content-between  mb-3">
                <span class="box-text">My Favorite books</span>
                <span v-if="favoriteCount > 0" class="badge bg-badge rounded-pill">{{ favoriteCount }}</span>
            </h4>

            <transition-group tag="ul" name="users-list">
                <li v-for="book in books" :key="book.title" @click="removeUser(book.title)">
                    {{  book.title }}
                </li>
            </transition-group>   
        </base-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //users: ['Mika', 'Pera', 'Laza', 'Zika', 'Milutin'],
            user: String
        }
    },
    methods: {
        removeUser(userRemove) {
            console.error('removeUser: ', userRemove)
            this.$store.dispatch('books/removeFromCart',userRemove);
        }
    },
    computed: {
        books() {
            return this.$store.getters['books/carts'];
        },

        favoriteCount() {
            return this.$store.getters['books/getFavoriteBooksCount'];
        }
  },
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin:0;
        padding: 0;
    }

    li {
        border: 1px solid #ddd;
        padding:1rem;
        text-align: center;
    }

    .users-list-enter-from {
        opacity:0;
        transform: translateX(-30px);
    }

    .users-list-enter-active {
        transition: all 0.5s ease-out;
    }

    .users-list-enter-to,  .users-list-leave-from  {
        opacity:1;
        transform: translateX(0);
    }


    .bg-badge {
        background-color:#e9c46a;
    }
    /* .users-list-leave-from {
        opacity:1;
        transform: translateX(0);
    } */

    .users-list-leave-active {
         transition: all 0.3s ease-in;
         position: absolute;
    }

    .users-list-leave-to {
        opacity:0;
        transform: translateX(30px);
    }

    .users-list-move {
        transition: transform 0.8s ease;
    }
</style>