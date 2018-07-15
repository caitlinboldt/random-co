<template>
  <div id="app">
    <div class="header">
        <h1>Random Co</h1>
    </div>
    <div id="main">
         <a id="mainimg" v-on:click="toForm"> <img src="./assets/randomimg.jpg"></a>
    </div>
    <Form/>
  </div>
</template>

<script>
import Form from './components/Form.vue'

export default {
  name: 'app',
  components: {
    Form
  },
  methods: {
    toForm() {
      document.getElementById("main").style.display = "none";
      document.getElementById("form").style.display = "";
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700');

body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
}
.header {
    background-color: #AB6174;
    height: 100px;
    margin: 0;
}
.header h1 {
    color: whitesmoke;
    float: right;
    font-size: 40px;
    font-weight: 300;
    margin: 10px;
    padding: 18px;
}
#main{
    margin: 0 auto;
    text-align: center;
}
#mainimg:hover {
    cursor: pointer;
}
#main img {
    height: 600px;
    margin: 50px 100px;
    width: 900px;
}
</style>
