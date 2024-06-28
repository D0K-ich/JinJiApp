<template style="background-color: mediumpurple">
  <Preloader/>
</template>

<script lang="ts" setup>
import Preloader from "./preloader/Preloader.vue";
import {onMounted} from "vue";
import {CreateWebsocket} from "./network/websocket";

onMounted(() => {
  CreateWebsocket("ws://localhost:8080/ws")
})



</script>

<style>
</style>
