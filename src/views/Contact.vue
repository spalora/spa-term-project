<template>
 <div class="container">
  <form class="message-container">
    <div class="input-container">
      <label class="input-label"> NAME </label><br/>
      <input type="text" id="name" class="input-field" required />
    </div>
    <div class="input-container">
      <label class="input-label"> EMAIL </label><br/>
      <input type="text" id="email" class="input-field" required />
    </div>
      <div class="input-container">
        <label class="input-label"> MESSAGE </label><br/>
        <textarea rows="6" id="msg"  class="text-area" />
      </div>

      <button v-on:click="validateForm()">SEND</button>
   
  </form>
<div class="contact-container">
<div class="contact-item">
    <img v-bind:src="location" alt="location" />
    <p>35, Commons DR, Shrewsbury,MA</p>
    <br />
    </div>
    <div class="contact-item">
    <img v-bind:src="contact" alt="location" />
    <p>508-395-3089</p>
    <br />
    </div>
    <div class="contact-item">
    <img v-bind:src="mail" alt="location" />
    <p>spalora@bu.edu</p>
    <br />
    </div>
  </div>
 </div>
 
</template>

<script>
export default {
  data() {
    return {
      location: require("../assets/location.svg"),
       mail: require("../assets/mail.svg"),
       contact: require("../assets/contact.svg"),
        reg: '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/'
    };
  },
  methods:{
    validateForm:function(){
      var name=document.getElementById('name');
      var email=document.getElementById('email');
      var message=document.getElementById('msg');
      if(!(this.reg.test(this.email))) {
          alert('invalid')
     }
    }
  }
};
</script>

<style >

.contact-item{
  display: flex;
  margin-top: 1rem;
}
.container{
    display: flex;
    text-align: left;
}
.contact-item img{
    width:3rem;
    height:3rem;
}

.input-container{
    margin-bottom: 20px;
    text-align: left;
    margin-left: 5rem;
}

.message-container{
  width: 50%;
  margin-left: 1rem;
  margin-top: 3rem;
 
}

.contact-container{
  margin-left: 10rem;
  margin-top:2rem;
}

input[type=text],textarea { 
  padding:10px;
  border-radius:0.5rem;
  box-shadow: white;
  width: 60%;
 box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
 border: 2px solid #eee;


}

textarea{
  resize:vertical;
}

.contact-item img,.contact-item p {
  padding:10px;
  color:white;
}
.container button{
 /* usual styles */
  padding:10px;
  border:none;
  background-color:#fdcd3b;
  color:#1d1c12;
  border: 1px solid #ddd;
  font-weight:600;
  border-radius:5px;
  width:30%;
  margin-left: 5rem;
 
}

</style>
