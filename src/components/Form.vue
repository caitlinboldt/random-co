<template>
  <div>
    <div id="form" style="display: none">
      <form @submit.prevent="submitForm">
        <h2>Registration Form</h2>
        <p>First name:</p>
        <input type="text" name="firstname" v-model="firstname" v-validate="'alpha'">
        <p class="alert" v-if="errors.has('firstname')"> {{errors.first('firstname') }} </p>
        <p>Last name:</p>
        <input type="text" name="lastname" v-model="lastname" v-validate="'alpha'">
        <p class="alert" v-if="errors.has('lastname')"> {{errors.first('lastname') }} </p>
        <p>Email:</p>
        <input type="text" name="email" v-model="email" v-validate="'required|email'">
        <p class="alert" v-if="errors.has('email')"> {{errors.first('email') }} </p>
        <br>
        <button id="btn" type="submit">Submit</button>
      </form>
    </div>
    <div id="success" style="display: none">
      <h2>Your registration imformation has been recieved successfully. Thank you!</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      firstname: '',
      lastname: '',
      email: ''
    }
  },
  methods:{
    sendRequest(){
      this.$http.post('https://helios-request-bin.herokuapp.com/1geskjb1', {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email
      }).then(function(data){
        console.log(data);
      });
    },
    submitForm() {
      this.$validator.validateAll().then((result) => {
        if(result) {
          this.sendRequest();
          document.getElementById('form').style.display = 'none';
          document.getElementById('success').style.display = '';
        } else {
          console.log("Not valid");
        }
      })
    }
  }
}
</script>

<style scoped>
#form {
    margin: 50px;
    padding: 50px;
    text-align: center;
}
#form p {
    font-size: 20px;
    font-weight: 300;
    margin: 0;
    padding: 5px;
}
#form input {
    margin: 5px;
    padding: 3px;
    width: 230px;
}
#form button {
    font-size: 16px;
    margin: 8px;
    padding: 10px;
}
#form button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    cursor: pointer;
}
#success {
    text-align: center;
}
</style>
