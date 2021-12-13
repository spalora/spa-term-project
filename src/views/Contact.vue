<template>
<!-- Contact page  includes 
left side :Form where visitor of the page can fill in the name, email ID , message and send button.
right side: contact details such as address, phone number and email id . -->
  <main class="main-contact-container">
    <!-- form validation is performed and display the error  and prevents form submission if validation fails using v-on:submit.prevent directive.
      NOTE: action url is not a relavant one, just added here to show the proper form usage. However I will continue to work on this page and Expecting to Host a site and have a ful fledge flow.-->
    <form class="message-container"  action="https://bucs601.com/submit.php" method="post" novalidate  v-on:submit.prevent=validateForm>
      <section class="input-container">
        <label class="input-label"> {{name}} </label><br />
        <input type="text" id="name" class="input-field" required  v-model="guestname"/>
        <div id="ename" class="error"></div>
      </section>
      <section class="input-container">
        <label class="input-label"> {{email}} </label><br />
        <input type="text" id="email" class="input-field" required  v-model="guestemail"/>
        <div id="eemail" class="error"></div>
      </section>
      <section class="input-container">
        <label class="input-label"> {{msg}} </label><br />
        <textarea rows="6" id="msg" class="text-area"  v-model="guestmsg"/>
        <div id="emsg" class="error"></div>
      </section>
      <button>{{send}}</button>
    </form>

<!-- section to display the contact me details.-->
    <section class="contact-container">
      <div class="contact-item">
        <img v-bind:src="location" alt="location" />
        <p>{{address}}</p>
        <br />
      </div>
      <div class="contact-item">
        <img v-bind:src="contact" alt="location" />
        <p>{{phnum}}</p>
        <br />
      </div>
      <div class="contact-item">
        <img v-bind:src="mail" alt="location" />
        <p>{{emailid}}</p>
        <br />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  /* data property */
  data() {
    return {
      name:'NAME',
      email:'EMAIL',
      guestemail:'',
      guestname:'',
      guestmsg:'',
      msg:'MESSAGE',
      send:'SEND',
      address:'35, Commons DR, Shrewsbury,MA',
      phnum:'508-395-3089',
      emailid:'spalora@bu.edu',
      location: require("../assets/location.svg"),
      mail: require("../assets/mail.svg"),
      contact: require("../assets/contact.svg"),
      emailRegEx: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    };
  },

  /* method which performs form validation */
  methods: {
    validateForm: function () {
       emsg.innerHTML = '';
        eemail.innerHTML = '';
         ename.innerHTML = '';
      if (this.guestmsg.length<1 ) {
         emsg.innerHTML = 'Please enter message';
    }
    if (!this.emailRegEx.test(this.guestemail)) {
         eemail.innerHTML = 'Please enter valid email address';
    }
    if (this.guestname.length<2) {
         ename.innerHTML = 'Please enter name';
    }
      
    },

  },
};
</script>

<!--Page specific styles goes here.-->
<style scoped>
.contact-container .contact-item {
  display: flex;
  margin-top: 1rem;
}
.main-contact-container {
  display: flex;
  text-align: left;
}
.contact-item img {
  width: 3rem;
  height: 3rem;
}

.input-container {
  margin-bottom: 20px;
  text-align: left;
  margin-left: 5rem;
}

.message-container {
  width: 50%;
  margin-left: 1rem;
  margin-top: 3rem;
}

.contact-container {
  margin-left: 10rem;
  margin-top: 2rem;
}

input[type="text"],
textarea {
  padding: 10px;
  border-radius: 0.5rem;
  width: 60%;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border: 2px solid #eee;
}

textarea {
  resize: vertical;
}

.contact-item img,
.contact-item p {
  padding: 10px;
  color: white;
}
.main-contact-container button {
  padding: 10px;
  border: none;
  background-color: #fdcd3b;
  color: #1d1c12;
  border: 1px solid #ddd;
  font-weight: 600;
  border-radius: 5px;
  width: 30%;
  margin-left: 5rem;
}
</style>
