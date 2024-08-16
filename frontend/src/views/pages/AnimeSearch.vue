<template>

	<v-row no-gutters>

		<v-col style="border: #cfd9df 1px solid" cols="3">

			<v-text-field :width="450" class="ml-3">
				<svg width="19" height="20" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.25 14.698C4.215 14.698 0.9375 11.6026 0.9375 7.79175C0.9375 3.98091 4.215 0.885498 8.25 0.885498C12.285 0.885498 15.5625 3.98091 15.5625 7.79175C15.5625 11.6026 12.285 14.698 8.25 14.698ZM8.25 1.948C4.8375 1.948 2.0625 4.56883 2.0625 7.79175C2.0625 11.0147 4.8375 13.6355 8.25 13.6355C11.6625 13.6355 14.4375 11.0147 14.4375 7.79175C14.4375 4.56883 11.6625 1.948 8.25 1.948Z" fill="#DB00FF"/>
					<path d="M15.1198 16.1429C15.0598 16.1429 14.9998 16.1358 14.9473 16.1287C14.5948 16.0862 13.9573 15.8596 13.5973 14.8467C13.4098 14.3154 13.4773 13.7842 13.7848 13.3804C14.0923 12.9767 14.6098 12.75 15.2023 12.75C15.9673 12.75 16.5673 13.0263 16.8373 13.515C17.1073 14.0037 17.0323 14.6271 16.6048 15.2292C16.0723 15.9871 15.4948 16.1429 15.1198 16.1429ZM14.6698 14.5137C14.7973 14.8821 14.9773 15.0662 15.0973 15.0804C15.2173 15.0946 15.4423 14.96 15.6748 14.6413C15.8923 14.3367 15.9073 14.1171 15.8548 14.0179C15.8023 13.9187 15.5923 13.8125 15.2023 13.8125C14.9698 13.8125 14.7973 13.8833 14.6998 14.0037C14.6098 14.1242 14.5948 14.3083 14.6698 14.5137Z" fill="#DB00FF"/>
				</svg>
			</v-text-field>

			<v-select placeholder="voice acting" style="background-color: rgba(219, 0, 255, 0.3); height: 6%" class="ml-3" :width="450" :items="['Anidab', 'Anilibria', 'Anistar']"> </v-select>
			<v-select placeholder="genre" style="background-color: rgba(219, 0, 255, 0.3); height: 6%" class="ml-3 mt-5" :width="450" :items="['Иссекай', 'Хоррор', 'Яой']"> </v-select>
			<v-select placeholder="tipe" style="background-color: rgba(219, 0, 255, 0.3); height: 6%" class="ml-3 mt-5" :width="450" :items="['OVA', 'ONA', 'Спешл', 'Фильм', 'ТВ сериал']"> </v-select>
			<v-select placeholder="status" style="background-color: rgba(219, 0, 255, 0.3); height: 6%" class="ml-3 mt-5" :width="450" :items="['Онгоинг', 'Вышел', 'Анонс']"> </v-select>

			<div class=" ml-3 mt-5 range-container" style="font-size: 25px">
				age
				<label class="range-labels" :style="{ left: `${labelPosition}%` }" for="age">{{Math.floor(age_selected)}}</label>
				<input type="range" min="0" @input="updateLabelPosition" max="18" v-model="age_selected" id="age" name="age" step="any" class="mt-3" style="height: fit-content; width: 90%" />
			</div>

			<div class=" ml-3 mt-5 range-container" style="font-size: 25px">
				year
				<label class="range-labels" :style="{ left: `${labelPositions}%` }" for="year">{{Math.floor(year)}}</label>
				<input type="range" min="1980" @input="updateLabelPositions" max="2024" v-model="year" id="year" name="year" step="any" class="mt-3" style="height: fit-content; width: 90%" />
			</div>


		</v-col>

		<v-col style="border: #cfd9df 1px solid" cols="8">

		</v-col>

		<v-col style="border: #cfd9df 1px solid" cols="1">

		</v-col>




	</v-row>
</template>


<script setup lang="ts">

import {ref} from "vue";

const age_selected = ref<number>(1);
const year = ref<number>(2005)

const labelPosition = ref<number>(1);
const updateLabelPosition = () => {
	labelPosition.value = (age_selected.value / 18) * 90;
};

const labelPositions = ref<number>(2005);
const updateLabelPositions = () => {
	labelPositions.value = (((1980 - year.value) * -1) / 44) * 90;

	// 2024 / (x) = 1
	// 1980 / (x) = 0
};

</script>



<style scoped lang="scss">




</style>