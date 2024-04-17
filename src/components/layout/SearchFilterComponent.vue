<template>
    <div class="row g-3">
        <div class="col-sm-12">
            <h4 class="box-text">Search filter</h4>
        </div>
        
        <div class="col-sm-5">
            <input type="text" class="form-control" id="title" placeholder="Book title" v-model="title">
        </div>

        <div class="col-sm-2">
            <base-button @click="search"><i class="fa fa-search"> search</i></base-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
            }
        },
        methods: {
            search() {
                console.error('search ... ', this.title);
                if(this.title != '') {
                    this.$store.dispatch('books/setSearchFilterTitle', this.title);
                }
            }
        }
    }
</script>