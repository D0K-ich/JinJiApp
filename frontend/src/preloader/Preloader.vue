<template>
  <div class="model" v-if="!ready">
    <v-card style="margin-left: 15%">
      <v-card-title>
        Загружаем {{percent_loaded}} %
      </v-card-title>
    </v-card>
    <model/>
  </div>
</template>

<script setup lang="ts">

import Model from "./model.vue";
import {onMounted, ref} from "vue";

const ready           = ref<boolean>(false)
const percent_loaded  = ref<number>(0)





onMounted(() => {//TODO only for debug, wait ws
  setInterval(() => {
    percent_loaded.value += 10
    if (percent_loaded.value >= 100) {ready.value = true}
  }, 1000)
})


</script>













<style lang="scss" scoped>
 .model {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   padding: 10px;
 }
</style>