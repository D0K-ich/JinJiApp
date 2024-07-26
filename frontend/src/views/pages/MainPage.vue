<template >
  <fon class="grddd d-flex" style="height: 100%; width: 100%">

    <levo style="display: inline-block; width: 40em; height: 30em; border: #cfd9df 3px solid">
      <div class="d-flex" style="width: 100%; height: 100%">
        <div class="hohline"/>
        <div class="hahline"/>
      </div>

    </levo>


    <osnova class="main-div">

      <div class="d-flex">
       <v-img src="./src/views/pages/fhkg.jpg"  class="imag mt-4"/>

        <div style="display: inline-block; width: 45%">

          <div class="lvl d-flex align-content-end align-center justify-center mt-4 ml-4">lvl. {{lvl}}</div>

          <div class="lvl d-flex align-content-end align-center justify-center ml-4" style="margin-top: 12%">sub. {{sub}}</div>

          <div style="display: inline-block" class="imag">

            <div class="d-flex">
              <v-img src="./src/views/pages/goblet.png"  class="goblet ml-4"/>

              <div class="achievements">{{ achi }}</div>
            </div>

          </div>

        </div>
      </div>

      <div class="nick-class d-flex align-content-center align-center justify-center">{{ nick }}</div>
      <div class="line"/>

    </osnova>

    <pravo style="display: inline-block; width: 45em; height: 30em; border: #cfd9df 3px solid">


    </pravo>


  </fon>
</template>


<script setup lang="ts">

import {ref} from "vue";

const lvl = ref<number>(0)

const sub = ref<string>('baza')

const achi = ref<number>(0)

const nick = ref<string>('nickname')
</script>

<style scoped lang="scss">
 .grddd {
   background: linear-gradient(167deg, #000000, 70%, #3A114D);
 }

 .main-div {

   height: 27em;
   width: 30em;
   margin-left: 2%;
   margin-top: 3%;
   display: inline-block;
 }

 .nick-class {
   font-size: 50px;
   text-align: center;
   width: 100%;
   margin-top: 5%;
   color: #dfdfdf;
   font-family: 'Inria Sans', sans-serif;

 }

 .line {
   height: 3px;
   width: 80%;
   margin-left: 10%;
   margin-top: 3%;
   background-color: #DB00FF
 }

 .imag {
   width: 40%;
   height: 40%;
   display: inline-block;
 }

 .lvl {
   border: #DB00FF 3px solid;
   border-radius: 30px;
   height: 20%;
   width: 85%;
   color: #dfdfdf;
   font-family: 'Inria Sans', sans-serif;
   font-size: 30px;

 }

 .goblet {
   margin-top: 11%;
   width: 9em;
   height: 9em;
   display: inline-block;
 }

 .achievements {
 display: inline-block;
 height: fit-content;
 margin-top: 70%;
 margin-left: 20%;
 font-size: 30px;
 }

 .hahline {
   width: 40%;
   height: 35%;
   margin: 48% 0 0 45%;
   border-bottom-right-radius: 30px;
   border-bottom: #DB00FF 3px solid;
   border-right: #DB00FF 3px solid;
   display: inline-block;
 }


 .hohline {
   width: 40%;
   height: 35%;
   margin-left: 5%;
   margin-top: 5%;
   border-top-left-radius: 30px;
   border-top: #DB00FF 3px solid;
   border-left: #DB00FF 3px solid;
   display: inline-block;
 }
</style>