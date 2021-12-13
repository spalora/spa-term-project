<template>
  <header>
    <h2 class="logo">{{ logoname }}</h2>
    <!--nav setup using router-link, looping through the "navs" array to display-->
    <nav id="nav">
      <router-link
        v-for="nav in navs"
        class="nav"
        v-bind:key="nav"
        :to="nav.routeUrl"
      >
        {{ nav.name }}
      </router-link>
    </nav>
  </header>
  <router-view />

  <footer >
    <span>{{footertext}}</span>
  </footer>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      /* Logo name data  */
      logoname: "SP.",
      footertext:'Copyright © spalora@bu.edu 2021',
      /* navigation tab names and route url */
      navs: [
        {
          name: "Home | ",
          routeUrl: "/",
        },
        {
          name: "About | ",
          routeUrl: "/about",
        },
        {
          name: "Contact | ",
          routeUrl: "/contact",
        },
        {
          name: "Skills | ",
          routeUrl: "/skills",
        },
        {
          name: "Experience",
          routeUrl: "/experience",
        },
      ],
    };
  },
};
</script>

<!--global styles goes here-->
<style >
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

body {
  height: 100%;
}

#app {
  width: 90%;
  color: white;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
  text-align: center;
  color: white;
  margin: 1rem;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
}

.theme_1 {
  background: linear-gradient(90deg, #1d1c12 10%, #fdcd3b 90%);
  min-height: 30rem;
}

.theme_2 {
  background: #1d1c12;
  min-height: 30rem;
}

body {
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex: 1 0 auto;
}

#nav {
  margin-top: -4rem;
  margin-bottom: 3rem;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
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

.logo {
  text-align: left;
  color: grey;
}

p {
  color: white;
  font-size: 0.9rem;
  text-align: left;
  padding: 0;
}

footer {
  margin-top: 2rem;
  font-size: 0.9rem;
}

/*BreakPoint prefix :md for medium device resolution*/
@media (min-width: 768px) {
  p {
    font-size: 1rem;
  }
}
</style>
