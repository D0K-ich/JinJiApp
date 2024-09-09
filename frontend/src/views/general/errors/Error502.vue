<template>
	<div style="width: 100%; height: 100vh; background-color: #211b36">
		<v-row class="fill-height d-flex" no-gutters>
			<v-col cols="6" class="d-flex align-center justify-center" style="min-height: 100%">
				<div>Ошибка 502</div>
			</v-col>


			<v-col cols="6" class="d-flex align-center justify-center" style="min-height: 100%">
				<div class="d-flex align-center justify-center">ЧТО-ТО РАБОТАЕТ НЕ ТАК, КАК НУЖНО</div>
			</v-col>

			<server/>
		</v-row>
	</div>

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