import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false
let id = 0

let data = {
  products: mock,
  cart: [],
  reviews: [{name: "Raeda Mukattash", email: "Raedamukattash@gmail.com", message:"My family and I had so much fun during this trip. Rand is a great traveling agent."}],
  getReviews(){
    return this.reviews;
  },
  addReviews(name, email, message){
    id = id + 1;
    this.reviews.push({id: id, name: name, email: email, message: message});
  },
  deleteReviews(name, email, message){
    for(let i = 0; i < this.reviews.length; i++){
      if(this.reviews[i].message == message){
        this.reviews.splice(i,1)
      }
    }
  },
  editReviews(name, email, message){
    for(let i = 0; i < this.reviews.length; i++){
      if(this.reviews[i].message == message){
        this.reviews[i].contentEditable = true;
      }
    }
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
