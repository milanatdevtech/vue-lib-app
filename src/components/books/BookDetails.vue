<template>
    <div class="col-md-12">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 box-text">{{title}}</strong>
              <h3 class="mb-0">
                by <router-link :to="{ path: '/books/by-author/' + author }">{{ author }}</router-link>
              </h3>
              
              <p class="card-text mb-auto">{{ description }}</p>
              <span>Page number: {{ numPage }}</span>
              <p class="card-text mb-auto">ISBN: {{ isbn }}</p>
              <p class="card-text mb-auto">Year: {{ year }}</p>
              <div class="photo-preview">
                <img v-bind:src="'data:image/jpeg;base64,'+bookPhoto" />
              </div>
            </div>
            <div class="card-body d-flex flex-column align-items-end">
              <transition name="fade-button" mode="out-in">
                <base-button @click="addToFavorite(title)" v-if="!notFavorite">Add to favorite</base-button>
                <base-button disabled v-else>Already submitted</base-button>
              </transition>
            </div>
          </div>
        </div>



</template>

<script>
export default {
    props: [
        'title', 'author', 'numPage', 'description', 'year', 'isbn', 'bookPhoto'
    ],
    emits: ['add-to-favorite'],
    data() {
        return {
            isLoading: true,
            notFavorite: false,
        }
    },
    methods: {
      addToFavorite(title) {
          this.notFavorite = !this.notFavorite;
          console.error('u favorite ide: ', title);
          this.$emit('add-to-favorite', title);
      },
      getBooksByAuthorLink() {
        return '/books/by-author/' + this.author;
      }
    },
    computed: {
      
    }
}
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
  .photo-preview img {
    max-width:300px;
  }
</style>