
<template>



  <fon class="grdd d-flex align-content-end align-center justify-center" style="height: 100%; width: 100%">



    <div style="height: 100%; width: 11%; position: absolute; top: 0; left: 1%">

      <v-virtual-scroll
          :height="990"
          :width="220"
          style="scrollbar-width: none"
          :items="['1','2','3','4','1','2','3','4','1','1','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4']"
      >
        <template v-slot:default="{ item }">
          <v-card
              :height="110"
              class="ma-4"
              style="word-wrap: break-word; background-color: rgba(219, 0, 255, 1); border-radius: 30px">
            <v-card-text class="ma-2" style="font-size: 20px; font-family: 'Inria Sans', sans-serif; color: black"> {{item}} </v-card-text>



          </v-card>
        </template>
      </v-virtual-scroll>

    </div>


    <div class="centered-content" style=" position: absolute; background-color: #3A114D; width: 75%; height: 90%; border: rgba(219, 0, 255, 0.5) 2px solid ; border-radius: 30px; box-shadow: 0 0 15px rgba(219, 0, 255, 1)">

      <v-text-field variant="solo"
                    style="background-color: rgba(219, 0, 255, 0.5); width: 95%; height: 6%; position: absolute; bottom: 2%; left: 2.5%; border-radius: 30px" class="rounded-castom">

        <v-img src="./src/views/pages/lapa.png"  style="width: 3%; height: 50%; display: inline-block; position: absolute; right: 1%"/>

      </v-text-field>

      <div>
<!--        <vue-advanced-chat-->
<!--            height="calc(100vh - 20px)"-->
<!--            :current-user-id="currentUserId"-->
<!--            :rooms="rooms"-->
<!--            :rooms-loaded="roomsLoaded"-->
<!--        />-->
        <!--            :messages="JSON.stringify(messages)"-->
        <!--            :messages-loaded="messagesLoaded"-->
        <!--            @send-message="sendMessage($event.detail[0])"-->
        <!--            @fetch-messages="fetchMessages($event.detail[0])"-->
      </div>




<div style="position: absolute; top: 1%; font-size: 20px; font-family: 'Inria Sans', sans-serif; color: #cfd9df; left: 45%"> 1 september 1941 </div>

    </div>


    <v-img  @click="OfOnIc = !OfOnIc" src="./src/views/pages/Djinneir.png"  style="width: 10%; height: 10%; display: inline-block; position: absolute; right: 1%; bottom: 5%"/>


    <iconBab  v-if="OfOnIc" >

    <v-img src="./src/views/pages/nastroiki.png"  style="width: 5%; height: 4%; display: inline-block; position: absolute; right: 3.5%; bottom: 25%"/>


    <v-img src="./src/views/pages/favourites.png"  style="width: 5%; height: 4%; display: inline-block; position: absolute; right: 3.5%; bottom: 35%"/>


    <v-img src="./src/views/pages/stata.png"  style="width: 5%; height: 4%; display: inline-block; position: absolute; right: 3.5%; bottom: 45%"/>


    <v-img src="./src/views/pages/poisk.png"  style="width: 5%; height: 4%; display: inline-block; position: absolute; right: 3.5%; bottom: 55%"/>


    <v-img src="./src/views/pages/friends.png"  style="width: 4%; height: 4%; display: inline-block; position: absolute; right: 4%; bottom: 65%"/>


    <v-img src="./src/views/pages/profil.png"  style="width: 5%; height: 4%; display: inline-block; position: absolute; right: 3.5%; bottom: 75%"/>


      <router-link to="/">
    <v-img src="./src/views/pages/home.png"  style="width: 5%; height: 4%; display: inline-block; position: absolute; right: 3.5%; bottom:85%"/>
      </router-link>



    </iconBab>




  </fon>



</template>



<script setup lang="ts">


const OfOnIc = ref(true)

import {register, Room, RoomUser, VueAdvancedChat} from 'vue-advanced-chat'
register()
import { ref, onMounted } from 'vue';

const currentUserId = ref<number>(1);
const rooms = ref<Room[]>(<Room[]>[]);
const roomsLoaded = ref<boolean>(false);

onMounted((): void => {
  rooms.value = [
    <Room>{roomName:"asd", roomId:"12"},
  ];
  roomsLoaded.value = true;
});
</script>





<style scoped lang="scss">

.grdd {
  background: linear-gradient(167deg, #000000, 70%, #3A114D);
}

.rounded-castom * {
  border-radius: 30px;
  background: none;
}



</style>