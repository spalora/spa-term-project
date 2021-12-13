<template>
  <!-- Contact page  includes 
left side :Form where visitor of the page can fill in the name, email ID , message and send button.
right side: contact details such as address, phone number and email id . -->
  <main class="main-contact-container">
    <!-- form validation is performed using v-on:submit.prevent directive
    Success: display the success popup(alert)
    Fails: display the error  and prevents form submission if validation fails .-->
    <form 
      class="message-container"
      novalidate
      v-on:submit.prevent="validateForm"
    >
      <section class="input-container">
        <label class="input-label"> {{ name }} </label><br />
        <input
          type="text"
          id="name"
          class="input-field"
          required
          v-model="guestname"
        />
        <section id="ename" class="error"></section>
      </section>
      <section class="input-container">
        <label class="input-label"> {{ email }} </label><br />
        <input
          type="text"
          id="email"
          class="input-field"
          required
          v-model="guestemail"
        />
        <section id="eemail" class="error"></section>
      </section>
      <section class="input-container">
        <label class="input-label"> {{ msg }} </label><br />
        <textarea rows="6" id="msg" class="text-area" v-model="guestmsg" />
        <section id="emsg" class="error"></section>
      </section>
      <button>{{ send }}</button>
    </form>

    <!-- section to display the contact me details.-->
    <section class="contact-container">
      <article class="contact-item">
        <img v-bind:src="location" alt="location" />
        <p>{{ address }}</p>
        <br />
      </article>
      <article class="contact-item">
        <img v-bind:src="contact" alt="location" />
        <p>{{ phnum }}</p>
        <br />
      </article>
      <article class="contact-item">
        <img v-bind:src="mail" alt="location" />
        <p>{{ emailid }}</p>
        <br />
      </article>
    </section>
  </main>
</template>

<script>
export default {
  /* data property */
  data() {
    return {
      name: "NAME",
      email: "EMAIL",
      guestemail: "",
      guestname: "",
      guestmsg: "",
      msg: "MESSAGE",
      send: "SEND",
      address: "35, Commons DR, Shrewsbury,MA",
      phnum: "508-395-3089",
      emailid: "spalora@bu.edu",
      location: require("../assets/location.svg"),
      mail: require("../assets/mail.svg"),
      contact: require("../assets/contact.svg"),
      emailRegEx: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
    };
  },

  /* method which performs form validation */
  methods: {
    validateForm: function () {
      emsg.innerHTML = "";
      eemail.innerHTML = "";
      ename.innerHTML = "";
      var error = false;
      if (this.guestmsg.length < 1) {
        emsg.innerHTML = "Please enter message";
        error = true;
      }
      if (!this.emailRegEx.test(this.guestemail)) {
        eemail.innerHTML = "Please enter valid email address";
        error = true;
      }
      if (this.guestname.length < 2) {
        ename.innerHTML = "Please enter name";
        error = true;
      }
      /* If there is no form validation error then proceed with form submission */
      if (!error) {
        fetch("https://hur-form-api.herokuapp.com/api", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.guestname,
            email: this.guestemail,
            msg: this.guestmsg,
          }),
        })
          .then((res) => {
            if (res.status != 200) {
              throw "Failed to send message.Please try again.";
            } else {
              alert("Message sent successfully");
            }
          })
          .catch((err) => console.log(err));
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
