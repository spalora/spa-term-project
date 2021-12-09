<template>
<main class="home-content">
  <section class="right">
    <img v-bind:src="bio_pic" alt="Bio Pic" />
  </section>
    <section class="left">
        <p>{{welcome_text}}</p>
        <p class="name">{{name}}</p>
        <p>{{role}}</p>
        <button v-on:click="hireme">Hire Me</button>
    </section>
  </main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      bio_pic:require('../assets/bio_pic_cutout.png'),
      welcome_text:"Hello",
      name:"I'm Seema",
      role:"FullStack & Android Developer"
    };
  },
  methods:{
    hireme:function(event){
      window.open("mailto:spalora@bu.edu?subject=Reg:Job Opening&body=Job Description and some more content goes here......");
    }
  }
};
</script>


<style scoped>


 .left {
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

 .left p{
   margin:0 
}

.home-content .right {
  margin-left: -10rem;
}

.home-content .right img {
  position: absolute;
  height: 525px;
  width: 525px;
  margin-top: -13.5rem;
}

.left .name{
  color: #fdcd3b;
  font-size: 2rem;
}

.logo{
  text-align: start;
}
</style>