
<template>
	<v-select placeholder="voice acting" style="background-color: rgba(219, 0, 255, 0.3); height: 6%; width: 90%" class="ml-3 mt-5" :items="voice_acting"> </v-select>
	<v-select placeholder="genre" style="background-color: rgba(219, 0, 255, 0.3); height: 6%; width: 90%" class="ml-3 mt-5" :items="genre"> </v-select>
	<v-select placeholder="tipe" style="background-color: rgba(219, 0, 255, 0.3); height: 6%; width: 90%" class="ml-3 mt-5" :items="tipe"> </v-select>
	<v-select placeholder="status" style="background-color: rgba(219, 0, 255, 0.3); height: 6%; width: 90%" class="ml-3 mt-5" :items="status"> </v-select>

	<div class=" ml-3 mt-5 range-container" style="font-size: 25px">
		age
		<label style="color: #DB00FF" class="range-labels" :style="{ left: `${labelPosition}%` }" for="age">{{Math.floor(age_selected)}}</label>
		<input type="range" min="0" @input="updateLabelPosition" max="18" v-model="age_selected" id="age" name="age" step="any" class="mt-3" style="height: fit-content; width: 90%" />
	</div>

	<div class=" ml-3 mt-5 range-container" style="font-size: 25px">
		by year
		<label style="color: #DB00FF" class="range-labels" :style="{ left: `${labelPositions}%` }" for="year">{{Math.floor(year)}}</label>
		<input type="range" min="1980" @input="updateLabelPositions" max="2024" v-model="year" id="year" name="year" step="any" class="mt-3" style="height: fit-content; width: 90%" />
	</div>

	<div class=" ml-3 mt-5 range-container" style="font-size: 25px">
		until year
		<label style="color: #DB00FF" class="range-labels" :style="{ left: `${labelPositionss}%` }" for="year">{{Math.floor(years)}}</label>
		<input type="range" min="1980" @input="updateLabelPositionss" max="2024" v-model="years" id="year" name="year" step="any" class="mt-3" style="height: fit-content; width: 90%; background-color: #DB00FF" />
	</div>

</template>

<script setup lang="ts">
import {ref} from "vue";
import {Genre, Status, Tipe, VoiceActing} from "../../models/users/users";

const age_selected = ref<number>(1);
const year         = ref<number>(2005)
const years         = ref<number>(2024)

const labelPosition = ref<number>(1);
const updateLabelPosition = () => {
	labelPosition.value = (age_selected.value / 18) * 90;
};

const labelPositions = ref<number>(2005);
const updateLabelPositions = () => {
	labelPositions.value = (((1980 - year.value) * -1) / 44) * 90;
};

const labelPositionss = ref<number>(2005);
const updateLabelPositionss = () => {
	labelPositions.value = (((1980 - years.value) * -1) / 44) * 90;
};


const voice_acting = ref<VoiceActing[]>([])
const genre = ref<Genre[]>([])
const tipe = ref<Tipe[]>([])
const status = ref<Status[]>([])
</script>

<style scoped lang="scss">

</style>