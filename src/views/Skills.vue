<template>
<div id="skill-content">
 <h2>My Skills</h2>
 <hr/>
 <p>The scope of my work is a large part of backend and native app development. I also have some UI experience.</p>
<div class="skill-container">
    <div class="circle-wrap">
        <div class="circle">
          <div class="mask full90">
            <div class="fill90"></div>
          </div>
          <div class="mask half">
            <div class="fill90"></div>
          </div>
          <div class="inside-circle"> 90%  </div>
          
     
        </div>
      </div>

    <div class="circle-wrap">
        <div class="circle">
          <div class="mask full75">
            <div class="fill75"></div>
          </div>
          <div class="mask half">
            <div class="fill75"></div>
          </div>
          <div class="inside-circle"> Android </div>
        </div>
      </div>

    <div class="circle-wrap">
        <div class="circle">
          <div class="mask full65">
            <div class="fill65"></div>
          </div>
          <div class="mask half">
            <div class="fill65"></div>
          </div>
          <div class="inside-circle"> DB </div>
        </div>
      </div>

    <div class="circle-wrap">
        <div class="circle">
          <div class="mask full50">
            <div class="fill50"></div>
          </div>
          <div class="mask half">
            <div class="fill50"></div>
          </div>
          <div class="inside-circle"> UI</div>
        </div>
      </div>
    </div>
    </div>
</template>

<style scoped>
hr {
       
        margin-top: 0.7rem;
        border: none;
        height: 0.3rem;
        width: 10%;
        margin-left: 3rem;
        background: #fdcd3b;
       
    }
    
.skill-container{
    display: flex;
    margin-top:-5rem;
    margin-left:-2rem;
    flex-wrap: wrap;
    align-content: stretch;
}

 h2{
    text-align: left;
    margin-left:3rem;
}
#skill-content p{
    font-size: 1rem;
     margin-top:2rem;
    color: white;
    text-align: left;
     margin-left:3rem;
}
.circle-wrap {
  margin: 150px auto;
  width: 150px;
  height: 150px;
  background: #fefcff;
  border-radius: 50%;
  border: 1px solid #cdcbd0;
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill90 ,
.circle-wrap .circle .fill75,
.circle-wrap .circle .fill65,
.circle-wrap .circle .fill50{
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}

.circle-wrap .circle .mask {
  clip: rect(0px, 150px, 150px, 75px);
}

.circle-wrap .inside-circle {
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



/* color animation */

/* 3rd progress bar */
.mask .fill90 ,
.mask .fill75,
.mask .fill65,
.mask .fill50
 {
  clip: rect(0px, 75px, 150px, 0px);
  background-color: #fdcd3b;
}


.mask.full90,
.circle .fill90 {
  animation: fill90 ease-in-out 3s;
  transform: rotate(170deg);
}

.mask.full65,
.circle .fill65 {
  animation: fill65 ease-in-out 3s;
  transform: rotate(110deg);
}

.mask.full75,
.circle .fill75 {
  animation: fill75 ease-in-out 3s;
  transform: rotate(135deg);
}

.mask.full50,
.circle .fill50 {
  animation: fill50 ease-in-out 3s;
  transform: rotate(90deg);
}


@keyframes fill90{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(170deg);
  }
}

/* 170:90%,135:75%,110:65%,90:50% */

@keyframes fill75{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(135deg);
  }
}


@keyframes fill65{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(110deg);
  }
}


@keyframes fill50{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}


</style>