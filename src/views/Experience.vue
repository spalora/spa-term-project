<template>
<!--Below set of lines are to display the experience content, which includes left side image, right side Experience details like Role, duration, role description.-->
    <main id="experience-container">
       <section class="left"> 
        <img v-bind:src="exp_pic" alt="experience" />
        <p>{{exp_title}}</p>
        </section>
       <section class="right">
           <!-- Looping over array to display the experience data.-->
        <section class="exp" v-for="exp in experience" :key="exp.id">
             <article class="experience-row">
                                        <p> {{exp.role}}</p>
                                        <p class="small">{{exp.duration}}</p>
                                        <p class="normal"> {{exp.work_desc}}</p><br/>
                                    </article>
                                  <!--  <section class="experience-row">
                                        <p> Sr. Technical Developer</p>
                                         <p class="small">April 2014 -Jan 2017 </p>
                                        <p class="normal">Participated in project planning sessions to analyze business requirements and outlined proposed solutions based on SCRUM (Agile methodology).</p><br/>
                                    </section>

                                    
                                    <section class="experience-row">
                                        <p> Technical Developer</p>
                                        <p class="small">Oct 2012 - April 2014</p>
                                        <p class="normal">Developing and testing of quality product and supporting during production migration.</p><br/>
                                    </section>
                                    
                                    <section class="experience-row">
                                        <p> Junior Developer </p>
                                        <p class="small">Aug 2010 - Oct 2012</p>
                                        <p class="normal">Actively resolved bugs, handled enhancements and Production Support.</p>
                                    </section>-->
            </section>
            </section>
        </main>
</template>

<script>
export default {
  data() {
    return {
    /* data property to display in experience page */
      exp_pic: require("../assets/work.svg"),
      /* this empty array will be updated from the JSON data. */
      experience:[],
      exp_title:'Experience'
    };
  },
   /* JSOndata is hosted in github pages */
  mounted(){
   fetch('https://spalora.github.io/profiledata/data/experience.json')
        .then(res => res.json())
        .then(data => this.experience=data.experience)
        .catch(err => console.log(err))
        
  }
};
</script>

<!--Page specific styles goes here.-->
<style scoped>

.experience-row .small{
    font-size: 0.7rem;
     color: grey;
}

.experience-row .normal{
    font-weight: lighter;
    font-size: 0.8rem;
    
}
.experience-row p{
    font-size: 0.9rem;
    font-weight: bold;
    margin:0;
}
#experience-container{
    display: flex;
    margin-top: 0.6rem;
    margin-left:7rem;
    width: 100%;
}
#experience-container .left img{
    width:5rem;
    margin-top: 10rem;
    margin-right: 3rem;
}

#experience-container .left p{
    margin-right: 2.5rem;
    font-weight: bold;
}
#experience-container .right{
    text-align: left;
    border: 0.1rem solid #fdcd3b;
    border-radius: 1rem;
    width: 70%;
    margin-top: 1.5rem;
    padding-left: 1rem;
    margin-left: 2rem;
    padding: 2rem;
}

</style>