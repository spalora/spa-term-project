<template>

 <h2 class="logo">SP.</h2>
  <div id="nav">
    
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
     <router-link to="/contact">Contact</router-link> |
     <router-link to="/skills">Skills</router-link> |
      <router-link to="/experience">Experience</router-link>

  <router-view/>
</div>
</template>

<style >
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

html, body {
  height: 100%;
}

#app {
  /*fdcd3b */
  /**/
  width:90%;
  color: white;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
  text-align: center;
  color: white;
  display: flex; flex-direction: column;
  height: 100%;
  font-family: "Poppins", sans-serif;
}

.theme_1 {
 background: linear-gradient(90deg,#1d1c12 30%, #fdcd3b 90%);
}

.theme_2 {
  background: #1d1c12;
}

body {
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
 overflow: auto;
 flex-wrap: wrap;
 align-content: stretch;
  
}

#nav {
  margin-top:-3rem;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: white;
  
}

#nav a.router-link-exact-active {
  color: #fdcd3b;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.logo{
  text-align: left;
  color: grey;
}

</style>
