<template>
    <li>
      <h3>{{title}}</h3> by {{ author }}
      <div>page: {{ pageNum }}</div>
      <div class="photo-preview">
        <img v-bind:src="'data:image/jpeg;base64,'+bookPhoto" />
      </div>
      <div class="actions">
        <base-button link :to="bookDetailsLink">View Details</base-button>
      </div>
    </li>
  </template>
  
  <script>

  import BaseButton from './../ui/BaseButton.vue';

  export default {
    components: {
     BaseButton
    },
    props: ['id', 'title', 'author', 'pageNum', 'bookPhoto'],
    computed: {
       
      bookDetailsLink() {
        return '/books/' + this.id;
      },
    },
  };
  </script>
  
  <style scoped>
  li {
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }
  
  h3,
  h4 {
    margin: 0.5rem 0;
  }
  
  div {
    margin: 0.5rem 0;
  }
  
  .actions {
    display: flex;
    justify-content: flex-end;
  }
 
  ul li {
    list-style: none;
  }

  .photo-preview img {
    max-width:250px;
  }
</style>