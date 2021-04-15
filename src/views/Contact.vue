<template>
  <div class="box">
  <div class="contact-title">
      <h1>Kindly write a review below, let us know your thoughts about our trips</h1>
      <h2>Click on save after editing your review</h2>
  </div>
  <div class="contact-form">
      <form id="contact-form" method="post" action="">
        <input v-model ="name" name="name" type="text" class="form-control" placeholder="Your Name" required><br>
        <input v-model = "email" name="email" type="email" class="form-control" placeholder="Your Email" required><br>
        <textarea v-model = "message" name="message" class="form-control" placeholder="Your Review" rows="4" required></textarea><br>
        <button type = "button" class="form-control submit" @click = "addReviews">Submit Review</button>
      </form>
  </div>
  <div v-for = "review in getReviews" v-bind:key = "review.id" class = "Review">
  <div v-if = "editable">
    <input v-model = "review.name" type="text">
    <input v-model = "review.email" type="text">
    <input v-model = "review.message" type="text">
    </div>
    <div v-else>
      <p>Name: {{review.name}}</p>
      <p>Email: {{review.email}}</p>
      <p>Review: {{review.message}}</p>
    </div>
    <button type = "button" class = "deleteButton" @click = "deleteReview(review)">Delete</button><button v-if = "!editable" type = "button" class = "editButton"  @click = "editReview()">Edit</button><button v-else type = "button" class = "saveButton" @click = "saveReview()">Save</button>
  </div>
  </div>
</template>
<script>
export default {
  name: 'addReviews',
  data() {
    return {
      creating: true,
      name: '',
      email: '',
      message: '',
      editable: false
    }
  },
  methods: {
    addReviews() {
      this.$root.$data.addReviews(this.name, this.email, this.message);
      this.name = "";
      this.email = "";
      this.message ="";
      this.creating = false;
    },
    deleteReview(review){
      this.$root.$data.deleteReviews(review.name, review.email, review.message);
    },
    editReview(){
      this.editable = true;
    },
    saveReview(){
      this.editable = false;
    }
  },
  computed: {
    getReviews() {
      return this.$root.$data.getReviews();
    }
  }
}
</script>

<style>
  .box{
  text-align: center;
  }
  .content-title{
    margin-top: 100px;
    color: #fff;
    text-transform: uppercase;
  }
  .content-title h1{
    font-size: 32px;
  }
  .content-title h2{
    font-size: 32px;
  }
  form{
    margin-top: 50px;
    transition: all 4s ease-in-out;
  }
  .form-control{
    width: 600px;
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid gray;
    color: #000000;
    font-size: 18px;
    margin-bottom: 16px;
  }
  input{
    height: 45px;
  }
  form .submit{
    background: #66b5ff;
    padding: 15px;
  }
  .deleteButton{
    background: #66b5ff;
    padding: 5px;
    border: transparent;
  }
  .editButton{
    background: #66b5ff;
    padding: 5px;
    margin: 5px;
    border: transparent;
  }
  .saveButton{
    background: #66b5ff;
    padding: 5px;
    margin: 5px;
    border: transparent;
  }

</style>
