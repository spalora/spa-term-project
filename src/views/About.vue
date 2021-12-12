<template>
  <!-- this page displays the bio pic and short paragrapgh description about me-->
  <main id="about-container">
    <h2>About Me</h2>
    <hr />
    <img v-bind:src="bio_pic" alt="biopic" />
    <p>
      {{ about_me_line1 }}
    </p>

    <p>
      {{ about_me_line2 }}
    </p>
    <div id="button">
      <button v-on:click="download">{{ downloadbtn }}</button>
    </div>
  </main>
</template>


<script>
export default {
  name: "App",
  /* data property */
  data() {
    return {
      bio_pic: require("../assets/bio_pic.jpeg"),
      downloadbtn: "Download CV",
      about_me_line1:
        "I am a full stack and Android developer ,Currently living in Boston,MA.Graduated in 2009 with Bachelor’s from VTU India. I am pursuing my masters in Software development from Boston University.I have over 10 years of experience as a software engineer .",
      about_me_line2:
        "My Current responsibilities include not only developing but also leading project . My main expertise is with Server side programming, PL/SQL, Android development .",
    };
  },
  /* method which invoked when click on "download" button  */
  methods: {
    download() {
      const url = "/files/SeemaPalora_CV.docx";
      window.location.href = url;
    },
  },
};
</script>

<!--Page specific styles goes here.-->
<style scoped >
hr {
  margin-top: 0.7rem;
  border: none;
  height: 0.3rem;
  width: 10%;
  margin-left: 20rem;
  background: #fdcd3b;
  margin-bottom: 0.7rem;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
  text-align: left;
  margin-left: 20rem;
}

p {
  margin-left: 20rem;
}

button {
  margin-top: 3rem;
  margin-right: 10px;
  padding: 10px 20px;
  border: 1px solid #ddd;
  color: #333;
  border-radius: 4px;
  font-size: 14px;
  background-color: #fdcd3b;
  color: #1d1c12;
  font-weight: 600;
}

#button {
  text-align: left;
  margin-left: 20rem;
}

#about-container img {
  border-radius: 50%;
  margin-top: -2rem;
  margin-left: -5rem;
  float: left;
  margin-left: 3rem;
  width: 20%;
}
</style>