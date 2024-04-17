<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>

    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>

    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" v-model="credentials.username" class="form-control" id="exampleInputEmail1" placeholder="Enter username">     
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" v-model="credentials.password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
        
      <base-button type="submit" class="btn btn-primary" @click="login">Login</base-button>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
        return {
            credentials: {
                username: '',
                passowrd: '',
            },
            isLoading: false,
            error: null,
            spinnerSize: 50,
            spinnerColor: 'blue'
        }
    },
    methods: {
      async login() {
        try {
          this.isLoading = true;
          await this.$store.dispatch('auth/login', this.credentials);
          this.$router.push('/');
        } catch (error) {
          this.isLoading = false;
          this.error = error.message || 'Something went wrong!';
          console.error('error login: ', error);
        }
      },
      handleError() {
        this.error = null;
      }
    },
  };
</script>