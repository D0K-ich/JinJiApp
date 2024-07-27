<template>
  <v-app style="background: none">

    <main-page/>



  </v-app>
</template>

<script lang="ts" setup>

import {onMounted, ref} from "vue";

const percent_loaded  = ref<number>(0)
const ready = ref<boolean>(false)

onMounted(() => {
  CreateWebsocket("ws://localhost:8080/ws")

  setInterval(() => {
    percent_loaded.value += Math.floor( Math.random() * 10)
    if (percent_loaded.value >= 100) {ready.value = true; CloseWebsocket()}
  }, 100)


})


import MainPage from "./views/pages/MainPage.vue";
import {CloseWebsocket, CreateWebsocket} from "./network/websocket";
</script>

<style lang="scss">

</style>
