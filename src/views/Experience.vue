<template>
    <div id="experience-container">
       <div class="left"> 
        <img v-bind:src="experience" alt="experience" />
        <p>Experience</p>
        </div>
        <div class="right">
             <section class="experience-row">
                                        <p> Technical Lead</p>
                                        <p class="small">Jan 2017- Present</p>
                                        <p class="normal"> Scoped functional & technical work units required to implement proposed solutions and extensively involved in writing technical designs, and did feasibility study for functional requirements.</p><br/>
                                    </section>
                                    <section class="experience-row">
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
                                    </section>
            </div>
        </div>
</template>

<script>
export default {
  data() {
    return {
      experience: require("../assets/work.svg")
    };
  },
};
</script>

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