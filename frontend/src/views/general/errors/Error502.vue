<template>
	<v-overlay
		:model-value="!state_store.isConnect"
		autofocus
		:absolute="true"
		:persistent="true"
		scroll-strategy="block"
		content-class="conn-state-overlay"
		scrim="black"
		opacity="0.85"
		class="ov"
	>
		<div class="overlay-content fill-height" style="min-height: 100vh; width: 100% !important;">
			<div style="margin-left: 10%; width: 100%">ОШИБКА 502</div>
<!--			<v-row class="fill-height" no-gutters style="width: 100% !important;">-->
<!--				<v-col cols="6" class="d-flex align-center justify-center" style="min-height: 100%">-->

<!--				</v-col>-->

<!--				<v-col cols="6" class="d-flex align-center justify-center" style="min-height: 100%">-->
<!--					<div>ЧТО-ТО РАБОТАЕТ НЕ ТАК, КАК НУЖНО</div>-->
<!--				</v-col>-->
<!--			</v-row>-->
		</div>
	</v-overlay>


</template>

<script setup lang="ts">

import Server from "./server.vue";
import {StateStore} from "../../../store/state";

const state_store = StateStore()
</script>

<style scoped lang="scss">

.v-overlay__content, .conn-state-overlay {
	min-width: 100% !important;
	min-height: 100vh !important;
	display: flex;
	align-items: center;
	justify-content: center;
}

.overlay-content {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

</style>