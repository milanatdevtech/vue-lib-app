<template>
    <div>
      <section>
            <form @submit.prevent="submitForm" enctype="multipart/form-data" novalidate>
                <h3 class="box-text">Enter new book</h3>
                <div class="form-group" :class="{invalid: bookTitleValidity === 'invalid'}">
                    <label for="book-title">Book Title</label>
                    <input type="text" id="book-title" class="form-control" v-model="title" @blur="validatebookTitle">
                    <p v-if="bookTitleValidity === 'invalid'">Please enter a book name.</p>
                </div>

                <div class="form-group" :class="{invalid: bookAuthorValidity === 'invalid'}">
                    <label for="book-author">Author</label>
                    <input type="text" id="book-author" class="form-control" v-model="author" @blur="validateBookAuthor">
                    <p v-if="bookAuthorValidity === 'invalid'">Please enter a book author.</p>
                </div>

                <div class="form-group" :class="{invalid: bookDescriptionValidity === 'invalid'}">
                    <label for="description">Description</label>
                    <textarea rows="3" id="description" class="form-control" v-model="description" @blur="validateDescription"></textarea>
                    <p v-if="bookDescriptionValidity === 'invalid'">Please enter a book description.</p>
                </div>

                <div class="form-group" :class="{invalid: bookPageNumValidity === 'invalid'}">
                    <label for="pages">Number of pages</label>
                    <input type="text" id="pageNum" class="form-control" v-model="pageNum" @blur="validateBookPageNum">
                    <p v-if="bookPageNumValidity === 'invalid'">Please enter number of pages.</p>
                </div>

                <div class="form-group" :class="{invalid: bookIsbnValidity === 'invalid'}">
                    <label for="pages">Isbn</label>
                    <input type="text" id="isbn" class="form-control" v-model="isbn" @blur="validateBookIsbn">
                    <p v-if="bookIsbnValidity === 'invalid'">Please enter  ISBN.</p>
                </div>
                
                <div class="form-group" :class="{invalid: bookYearValidity === 'invalid'}">
                    <label for="pages">Year</label>
                    <input type="number" id="year" class="form-control" v-model="year" @blur="validateBookYear">
                    <p v-if="bookYearValidity === 'invalid'">Please enter a year of publishing.</p>
                </div>
                
                <div class="form-group">
                  <input type="file" name="file" @change="onChangeFileUpload($event)" class="form-control"/>
                </div>
                <div>
                    <base-button>Save Book</base-button>
                </div>
                <div><img v-src="previewImage" class="uploading-image" /></div>
            </form>
            
      </section>
       
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
            title: '',
            author: '',
            description: '',
            isbn: '',
            year: '',
            pageNum: '',
            formData: null,
            preset: process.env.VUE_APP_UPLOAD_PRESET,
            bookTitleValidity: 'pending',
            bookAuthorValidity: 'pending',
            bookPageNumValidity: 'pending',
            bookDescriptionValidity: 'pending',
            bookIsbnValidity: 'pending',
            bookYearValidity: 'pending',
            file: ''
        }
    },
    methods: {
        submitForm() {            

            if (this.title.trim() === '') {
                this.bookTitleValidity = 'invalid';
                return;
            } else {
                this.bookTitleValidity = 'valid';
            }

            if (this.author.trim() === '') {
                this.bookAuthorValidity = 'invalid';
                return;
            } else {
                this.bookAuthorValidity = 'valid';
            }

            if (this.pageNum.trim() === '') {
                this.bookPageNumValidity = 'invalid';
                return;
            } else {
                this.bookPageNumValidity = 'valid';
            }

            let formData = new FormData();
         
            formData.append('bookCover', this.file); 
            formData.append('title', this.title);
            formData.append('author', this.author);
            formData.append('pageNum', this.pageNum);
            formData.append('description', this.description);
            formData.append('year', this.year);
            formData.append('isbn', this.isbn);
          
            this.$store.dispatch('books/addNewBook', formData);
            this.$router.replace('/books');
        },
        validatebookTitle() {
            if (this.title.trim() === '') {
                this.bookTitleValidity = 'invalid';
            } else {
                this.bookTitleValidity = 'valid';
            }
        },
        validateBookAuthor() {
            if (this.author.trim() === '') {
              this.bookAuthorValidity = 'invalid';
            } else {
              this.bookAuthorValidity = 'valid';
            }
        },
        validateBookPageNum() {
            if (this.pageNum.trim() === '') {
              this.bookPageNumValidity = 'invalid';
            } else {
              this.bookPageNumValidity = 'valid';
            }
        },

        validateDescription() {
          if (this.description.trim() === '') {
            this.bookDescriptionValidity = 'invalid';
          } else {
            this.bookDescriptionValidity = 'valid';
          }
        },

        validateBookIsbn() {
          if (this.isbn.trim() === '') {
            this.bookIsbnValidity = 'invalid';
          } else {
            this.bookIsbnValidity = 'valid';
          }
        },

        validateBookYear() {
          if (this.isbn.trim() === '') {
            this.bookYearValidity = 'invalid';
          } else {
            this.bookYearValidity = 'valid';
          }
        },
        
        onChangeFileUpload(event) {
          this.file = event.target.files[0];
      }
        
    }
  }
  </script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-group.invalid input {
  border-color: red;
}

.form-group.invalid label, .form-group.invalid p {
  color: red;
}
.form-group.invalid p {
    font-size: 80%;
}
label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>