

<template>
<!--Below set of lines are to display the Bio pic on left side. Right side name, role  , hireme button displayed.-->
<main class="home-content">
  <section class="bio-pic-section">
    <img v-bind:src="bio_pic" alt="Bio Pic" />
  </section>
    <section class="intro-section">
        <p>{{welcome_text}}</p>
        <p class="name">{{name}}</p>
        <p>{{role}}</p>
        <button v-on:click="hireme">{{hiremebtn}}</button>      
    </section>
  </main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      /* data property for the home page*/
      bio_pic:require('../assets/bio_pic_cutout.png'),
      welcome_text:"Hello",
      name:"I'm Seema",
      role:"FullStack & Android Developer",
      hiremebtn:'Hire Me'
    };
  },
  /* Function invoked on click of "Hire me" button which opens mail app with predefined subject, To and message body. */
  methods:{
    hireme:function(event){
      window.open("mailto:spalora@bu.edu?subject=Reg:Job Opening&body=Job Description and some more content goes here......");
    }
  }
};
</script>

<!--Page specific styles goes here.-->
<style scoped>

.home-content{
  overflow-x: hidden;
 
}

 .home-content .intro-section {
  margin-right: 45rem;
  height: 300px;
  margin-top: 10rem;
  margin-left: 5rem;
  text-align: left;
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
  font-weight:600;
}

#button{
  text-align: left;
  margin-left: 20rem;
}

 .home-content .intro-section p{
   margin:0 
}


.home-content .bio-pic-section {
  margin-left: -10rem;
}


.home-content .bio-pic-section img {
  position: absolute;
  height: 525px;
  width: 525px;
  margin-top: -2.8rem;
}

.home-content .intro-section .name{
  color: #fdcd3b;
  font-size: 2rem;
}

.logo{
  text-align: start;
}
</style>