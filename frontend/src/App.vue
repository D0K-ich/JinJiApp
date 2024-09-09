<template>
<!--	<preloader :percent_loaded=percent_loaded />-->
	<v-app class="main_styles" v-if="state_store.connection.Name == ConnectionStateName.Online">
		<router-view/>
	</v-app>

	<error502 v-if="state_store.connection.Name != ConnectionStateName.Online"/>
</template>

<script lang="ts" setup>

import {gsap} from "gsap";

import {CustomEase} from "gsap/CustomEase";
import {ExpoScaleEase, RoughEase, SlowMo} from "gsap/EasePack";

import {Flip} from "gsap/Flip";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Observer} from "gsap/Observer";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {Draggable} from "gsap/Draggable";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {EaselPlugin} from "gsap/EaselPlugin";
import {PixiPlugin} from "gsap/PixiPlugin";
import {TextPlugin} from "gsap/TextPlugin";
import {onMounted, ref} from "vue";
import {StateStore} from "./store/state";
import {ConnectionStateName} from "./store/events";
import Error502 from "./views/general/errors/Error502.vue";

gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);

const state_store = StateStore()

const percent_loaded  = ref<number>(0)
const ready = ref<boolean>(false)

onMounted(() => {
    // CreateWebsocket("ws://localhost:54321/sync-timings")

    // setInterval(() => {
    //     percent_loaded.value += Math.floor( Math.random() * 10)
    //     if (percent_loaded.value >= 100) {
	// 		ready.value = true; SendWsMessage(percent_loaded.value); percent_loaded.value = 0
	// 	}
    // }, 100)
})

// import {CloseWebsocket, CreateWebsocket, SendWsMessage} from "./network/websocket";
// import Preloader from "./views/preloader/Preloader.vue";
</script>

<style lang="scss">
  .main_styles {
    background: transparent !important;
    width: 100% ;
    height: 100%;
  }
</style>
