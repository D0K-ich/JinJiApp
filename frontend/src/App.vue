<template style="background-color: mediumpurple">
  <div v-if="ready">
    <navbar/>
  </div>

  <div v-if="!ready">
    <Preloader :percent_loaded="percent_loaded"/>
  </div>
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

<style>
</style>
