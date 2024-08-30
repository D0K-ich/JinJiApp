<template>
  <div class="model">
    <div class="ml-7">
      Загружаем {{percent_loaded}} %
    </div>
    <model/>
  </div>

</template>

<script setup lang="ts">

import Model from "./model.vue";

defineProps<{
  percent_loaded : number
}>();

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