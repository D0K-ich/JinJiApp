<template>
	<fon class="grddd d-flex" style="height: 100%; width: 100%">
		<v-row no-gutters class="d-flex justify-center align-center">

			<div style="background-color: #3A114D; border-radius: 30px; height: calc(70vh); width: calc(100vh)">
				<v-row no-gutters>
				<v-col cols="12" class="d-flex" style="height: fit-content">
				<div style="color: #cfd9df; font-size: 40px; height: fit-content" class="ma-10"> REG </div>
				<div style="color: #DB00FF; font-size: 40px; height: fit-content; margin-left: 70%" class="mt-10"> LOG </div>
				</v-col>
				<v-col class="d-flex" cols="12" style="height: fit-content">
					<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 2%" class="ml-16"> NIK </div>
					<v-text-field  variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-7 ml-14 cusron"/>
				</v-col>
				<v-col class="d-flex" cols="12" style="height: fit-content">
					<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 3%" class="ml-12"> MAIL </div>
					<v-text-field variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-7 ml-10 cusron"/>
				</v-col>
				<v-col class="d-flex" cols="12" style="height: fit-content">
					<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 3%" class="ml-8"> CODE </div>
					<v-text-field variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-7 ml-8 cusron"/>
				</v-col>
				<v-col class="d-flex" cols="12" style="height: fit-content">
					<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 3%" class="ml-8"> PAROLE </div>
					<v-text-field variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-7 ml-14 cursron"/>
				</v-col>
				<v-col @click="lockIn = !lockIn">
					<svg width="60" height="60" viewBox="0 0 70 70" fill="none" class="mt-3" style="margin-left: 89%" xmlns="http://www.w3.org/2000/svg">
						<path :class="{ 'noe' : lockIn }" d="M35 70C15.6695 70 0 54.3305 0 35C0 15.6695 15.6695 0 35 0C54.3305 0 70 15.6695 70 35C70 54.3305 54.3305 70 35 70ZM31.5 37.772V49H38.5V37.772C40.3424 36.9679 41.8518 35.554 42.7743 33.7679C43.6968 31.9818 43.9761 29.9326 43.5654 27.9648C43.1547 25.997 42.079 24.2306 40.5191 22.9626C38.9591 21.6947 37.0102 21.0025 35 21.0025C32.9898 21.0025 31.0409 21.6947 29.4809 22.9626C27.921 24.2306 26.8453 25.997 26.4346 27.9648C26.0239 29.9326 26.3032 31.9818 27.2257 33.7679C28.1482 35.554 29.6576 36.9679 31.5 37.772Z" fill="#DB00FF"/>
						<path :class="{'noe' : !lockIn}" d="M35 70C15.6695 70 0 54.3305 0 35C0 15.6695 15.6695 0 35 0C54.3305 0 70 15.6695 70 35C70 54.3305 54.3305 70 35 70ZM35 63C42.4261 63 49.548 60.05 54.799 54.799C60.05 49.548 63 42.4261 63 35C63 27.5739 60.05 20.452 54.799 15.201C49.548 9.94999 42.4261 7 35 7C27.5739 7 20.452 9.94999 15.201 15.201C9.94999 20.452 7 27.5739 7 35C7 42.4261 9.94999 49.548 15.201 54.799C20.452 60.05 27.5739 63 35 63ZM31.5 37.772C29.6576 36.9679 28.1482 35.554 27.2257 33.7679C26.3032 31.9818 26.0239 29.9326 26.4346 27.9648C26.8453 25.997 27.921 24.2306 29.4809 22.9626C31.0409 21.6947 32.9898 21.0025 35 21.0025C37.0102 21.0025 38.9591 21.6947 40.5191 22.9626C42.079 24.2306 43.1547 25.997 43.5654 27.9648C43.9761 29.9326 43.6968 31.9818 42.7743 33.7679C41.8518 35.554 40.3424 36.9679 38.5 37.772V49H31.5V37.772Z" fill="#DB00FF"/>
					</svg>
				</v-col>
				</v-row>
			</div>









		</v-row>
	</fon>
</template>



<script setup lang="ts">

import {ref} from "vue";

const lockIn = ref(false)




</script>



<style scoped lang="scss">
.grddd {
	background: linear-gradient(167deg, #000000, 70%, #3A114D);
}

.cusron *{
	border-radius: 30px;
	width: calc(75vh);
}
.cursron *{
	border-radius: 30px;
	width: calc(67vh);
}

.noe {
	display: none;
}



</style>