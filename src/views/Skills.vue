<template>
<!--Skills related informations are displayed here,
  Skills details are retrieved from profiledata.json using fetch. -->
  <main id="skill-content">
    <h2>{{ skill_title }}</h2>
    <hr />
    <p>{{ skill_desc }}</p>
    <!--below section is for circular progress bar display of skillset, iterated through the "skills" array and easch circlular progress bar is displayed, code repetation is avoided with this approach.-->
    <section class="skill-container">
      <div v-for="skill in skills" :key="skill.id" class="outer-circle">
        <div class="circle">
          <div v-bind:class="skill.full">
            <div v-bind:class="skill.fill"></div>
          </div>
          <div v-bind:class="skill.half">
            <div v-bind:class="skill.fill"></div>
          </div>
          <div class="inside-circle">{{ skill.skill_perct }}</div>
        </div>
        <div class="skill-name">{{ skill.skill_name }}</div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      skill_desc:
        "The scope of my work is a large part of backend and native app development. I also have some UI experience.",
      skill_title: "My Skills",
      /* this empty array will be updated from the JSON data. */
     skills: [],
    };
  },
  /* Local JSOndata is hosted in Json-server using the command , 
  npx json-server --watch src/data/profiledata.json --port 3000 */
  mounted() {
    fetch("https://spalora.github.io/profiledata/data/skills.json")
      .then((res) => res.json())
      .then((data) => (this.skills = data.skills))
      .catch((err) => console.log(err));
  },

 
};
</script>

<!--Page specific styles goes here.-->
<style scoped>
hr {
  margin-top: 0.7rem;
  border: none;
  height: 0.3rem;
  width: 10%;
  margin-left: 3rem;
  background: #fdcd3b;
}

.skill-container {
  display: flex;
  margin-top: -5rem;
  margin-left: -2rem;
}

h2 {
  text-align: left;
  margin-left: 3rem;
}
#skill-content p {
  font-size: 1rem;
  margin-top: 2rem;
  color: white;
  text-align: left;
  margin-left: 3rem;
}
.outer-circle {
  margin: 150px auto;
  width: 150px;
  height: 150px;
  background: #fefcff;
  border-radius: 50%;
  border: 1px solid #cdcbd0;
}

.outer-circle .circle .cover,
.outer-circle .circle .fill90,
.outer-circle .circle .fill75,
.outer-circle .circle .fill65,
.outer-circle .circle .fill50 {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}

.outer-circle .circle .cover {
  clip: rect(0px, 150px, 150px, 75px);
}

.outer-circle .inside-circle {
  width: 122px;
  height: 122px;
  border-radius: 50%;
  background: #d2eaf1;
  line-height: 120px;
  text-align: center;
  margin-top: 14px;
  margin-left: 14px;
  color: #1d1c12;
  position: absolute;
  z-index: 100;
  font-weight: 700;
  font-size: 1em;
}

.skill-name {
  width: 122px;
  height: 122px;
  line-height: 120px;
  margin-top: 8rem;
  margin-left: 1rem;
  color: white;
  font-weight: 700;
  font-size: 1em;
}

.cover .fill90,
.cover .fill75,
.cover .fill65,
.cover .fill50 {
  clip: rect(0px, 75px, 150px, 0px);
  background-color: #fdcd3b;
}

.cover.full90,
.circle .fill90 {
  animation: fill90 ease-in-out 3s;
  transform: rotate(170deg);
}

.cover.full65,
.circle .fill65 {
  animation: fill65 ease-in-out 3s;
  transform: rotate(110deg);
}

.cover.full75,
.circle .fill75 {
  animation: fill75 ease-in-out 3s;
  transform: rotate(135deg);
}

.cover.full50,
.circle .fill50 {
  animation: fill50 ease-in-out 3s;
  transform: rotate(90deg);
}

@keyframes fill90 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(170deg);
  }
}

/* 170:90%,135:75%,110:65%,90:50% */

@keyframes fill75 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(135deg);
  }
}

@keyframes fill65 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(110deg);
  }
}

@keyframes fill50 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}
</style>