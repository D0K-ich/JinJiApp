<template>
  <v-app style="background: none">
      <navbar v-if="ready"/>
      <Preloader :percent_loaded="percent_loaded" v-if="!ready"/>
  </v-app>

</template>

<script lang="ts" setup>
import Preloader from "./views/preloader/Preloader.vue";
import {onMounted, ref} from "vue";
import {CloseWebsocket, CreateWebsocket} from "./network/websocket";
import Navbar from "./views/navigation/navbar.vue";

const percent_loaded  = ref<number>(0)
const ready = ref<boolean>(false)


onMounted(() => {
  CreateWebsocket("ws://localhost:8080/ws")

  setInterval(() => {
    percent_loaded.value += Math.floor( Math.random() * 10)
    if (percent_loaded.value >= 100) {ready.value = true; CloseWebsocket()}
  }, 100)


})

</script>

<style lang="scss">
  html {
    overflow: hidden!important;
    background: linear-gradient(#000000, #310E37)
  }

  a {
    color: #013a54;
    text-decoration: none;
    &:hover {
      color: #0579a8;
    }
  }

</style>
