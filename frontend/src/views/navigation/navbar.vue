<template>
  <v-row no-gutters class="shorted">

    <v-col cols="3">
      <div class="navbar justify-center" style="margin-left: 20%">
        <v-list style="background: none">
          <v-list-item link @click="user_store.UserList" title="ANIME" height="5" href="#" class="nav-el rounded-pill d-flex justify-center text-h5" style="margin-top: 48px; border: solid #DB00FF 2px;"/>
          <v-list-item link title="MANGA" height="5" href="#" class="nav-el rounded-pill d-flex justify-center" style="margin-top: 48px; border: solid #DB00FF 2px;"/>
          <v-list-item link title="FILMS" height="5" href="#" class="nav-el rounded-pill d-flex justify-center" style="margin-top: 48px; border: solid #DB00FF 2px;"/>
          <v-list-item link title="FORUM" height="5" href="#" class="nav-el rounded-pill d-flex justify-center" style="margin-top: 48px; border: solid #DB00FF 2px;"/>
          <v-list-item link title="PERSONAGES" height="5" href="#" class="nav-el rounded-pill d-flex justify-center" style="margin-top: 48px; border: solid #DB00FF 2px;"/>
        </v-list>
      </div>
      <v-divider/>
    </v-col>

    <v-divider vertical/>

    <v-col cols="4">
      <div class="mt-11">
        <v-img src="./src/views/navigation/line.png" width="100" height="100" style="margin-left: 1em"></v-img>
        <a href="#"><v-img src="https://www.w3schools.com/howto/img_paris.jpg" width="200" height="200" style="top: -5.5em; left: 2em"></v-img></a>
        <a href="#"><v-img src="https://www.w3schools.com/howto/img_paris.jpg" width="200" height="200" style="top: -7.5em; left: 2em"></v-img></a>
        <a href="#"><v-img src="https://www.w3schools.com/howto/img_paris.jpg" width="200" height="200" style="top: -30.5em; left: 20em"></v-img></a>
        <a href="#"><v-img src="https://www.w3schools.com/howto/img_paris.jpg" width="200" height="200" style="top: -32.5em; left: 20em"></v-img></a>
        <v-img src="./src/views/navigation/line.png" width="100" height="100" style="transform: scale(-1); margin: -38em 0 0 27em"></v-img>
      </div>

      <v-divider/>
    </v-col>

    <v-divider vertical/>
  </v-row>

  <v-card width="1000" class="ma-8" style="background: none">
    <v-list style="background: none; border: solid #DB00FF 2px" class="rounded-xl">
      <v-list-item class="d-flex justify-center">123123</v-list-item>

      <v-divider/>
      <v-list-item class="d-flex justify-center">123</v-list-item>
      <v-divider/>
      <v-list-item class="d-flex justify-center">123</v-list-item>
      <v-divider/>
    </v-list>
  </v-card>


  <v-row no-gutters style="margin-right: 0; position:absolute; right: 0">
    <v-col cols="4">
123
    </v-col>

    <v-col cols4>
123
    </v-col>
  </v-row>

</template>



<script setup lang="ts">
import {UsersStore} from "../../store/user";

const user_store = UsersStore()
</script>

<style scoped lang="scss">
  .navbar {
    max-width: 10em;
  }

  .shorted {
    max-height: 32em;
  }
  .recom-categories {
    height: 32em;
  }

</style>