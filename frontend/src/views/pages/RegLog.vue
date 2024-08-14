<template>
	<fon class="grddd d-flex" style="height: 100%; width: 100%">
		<v-row no-gutters class="d-flex justify-center align-center">

			<div style="background-color: #3A114D; border-radius: 30px; height: calc(70vh); width: calc(100vh)">
				<v-row no-gutters>
				<v-col cols="12" class="d-flex" style="height: fit-content">
				<v-btn :class="reglog == 'REG' ? 'active' : 'inactive'" @click="reglog = 'REG'" class="ma-10" style="background: none"> REG </v-btn>
				<v-btn :class="reglog == 'LOG' ? 'active2' : 'inactive2'" @click="reglog = 'LOG'" class="mt-10" style="background: none"> LOG </v-btn>
				</v-col>
					<div v-if="reglog == 'REG'">
						<v-col class="d-flex" cols="12" style="height: fit-content">
							<div style="color: #cfd9df; font-size: 50px; height: fit-content" class="ml-16"> NIK </div>
							<v-text-field  variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-2 ml-14 cusron"/>
						</v-col>
						<v-col class="d-flex" cols="12" style="height: fit-content">
							<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 1%" class="ml-12"> MAIL </div>
							<v-text-field variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-4 ml-10 cusron"/>
						</v-col>
						<v-col class="d-flex" cols="12" style="height: fit-content">
							<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 1%" class="ml-8"> CODE </div>
							<v-text-field variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-4 ml-8 cusron"/>
						</v-col>
						<v-col class="d-flex" cols="12" style="height: fit-content">
							<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 1%" class="ml-8"> PAROLE </div>
							<v-text-field variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-4 ml-14 cursron"/>
						</v-col>
						<v-col @click="lockIn = !lockIn">
							<svg width="60" height="60" viewBox="0 0 70 70" fill="none" class="mt-2" style="margin-left: 89%" xmlns="http://www.w3.org/2000/svg">
								<path :class="{ 'noe' : lockIn }" d="M35 70C15.6695 70 0 54.3305 0 35C0 15.6695 15.6695 0 35 0C54.3305 0 70 15.6695 70 35C70 54.3305 54.3305 70 35 70ZM31.5 37.772V49H38.5V37.772C40.3424 36.9679 41.8518 35.554 42.7743 33.7679C43.6968 31.9818 43.9761 29.9326 43.5654 27.9648C43.1547 25.997 42.079 24.2306 40.5191 22.9626C38.9591 21.6947 37.0102 21.0025 35 21.0025C32.9898 21.0025 31.0409 21.6947 29.4809 22.9626C27.921 24.2306 26.8453 25.997 26.4346 27.9648C26.0239 29.9326 26.3032 31.9818 27.2257 33.7679C28.1482 35.554 29.6576 36.9679 31.5 37.772Z" fill="#DB00FF"/>
								<path :class="{'noe' : !lockIn}" d="M35 70C15.6695 70 0 54.3305 0 35C0 15.6695 15.6695 0 35 0C54.3305 0 70 15.6695 70 35C70 54.3305 54.3305 70 35 70ZM35 63C42.4261 63 49.548 60.05 54.799 54.799C60.05 49.548 63 42.4261 63 35C63 27.5739 60.05 20.452 54.799 15.201C49.548 9.94999 42.4261 7 35 7C27.5739 7 20.452 9.94999 15.201 15.201C9.94999 20.452 7 27.5739 7 35C7 42.4261 9.94999 49.548 15.201 54.799C20.452 60.05 27.5739 63 35 63ZM31.5 37.772C29.6576 36.9679 28.1482 35.554 27.2257 33.7679C26.3032 31.9818 26.0239 29.9326 26.4346 27.9648C26.8453 25.997 27.921 24.2306 29.4809 22.9626C31.0409 21.6947 32.9898 21.0025 35 21.0025C37.0102 21.0025 38.9591 21.6947 40.5191 22.9626C42.079 24.2306 43.1547 25.997 43.5654 27.9648C43.9761 29.9326 43.6968 31.9818 42.7743 33.7679C41.8518 35.554 40.3424 36.9679 38.5 37.772V49H31.5V37.772Z" fill="#DB00FF"/>
							</svg>
						</v-col>
					</div>

					<div v-if="reglog == 'LOG'">
						<v-col class="d-flex" cols="12" style="height: fit-content">
							<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 2%" class="ml-16"> NIK </div>
							<v-text-field  variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-7 ml-14 cusron"/>
						</v-col>
						<v-col class="d-flex" cols="12" style="height: fit-content">
							<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 3%" class="ml-8"> PAROLE </div>
							<v-text-field variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-7 ml-14 cursron"/>
						</v-col>
						<v-col @click="lockIn = !lockIn">
							<svg width="60" height="60" viewBox="0 0 70 70" fill="none" style="margin-left: 89%; margin-top: 20%" xmlns="http://www.w3.org/2000/svg">
								<path :class="{ 'noe' : lockIn }" d="M39.4522 1.80643e-05C45.3 -0.00525766 51.0756 1.14512 56.3596 3.36758C61.6436 5.59005 66.3032 8.82878 70 12.8485L45.0307 35L70 57.1515C66.3032 61.1712 61.6436 64.41 56.3596 66.6324C51.0756 68.8549 45.3 70.0053 39.4522 70C17.6627 70 0 54.3305 0 35C0 15.6695 17.6627 1.80643e-05 39.4522 1.80643e-05ZM39.4522 7.00001C34.473 7.0008 29.5647 8.04667 25.1283 10.0522C20.6919 12.0577 16.8533 14.9659 13.9261 18.5392C10.9989 22.1125 9.06626 26.2495 8.28599 30.6122C7.50571 34.9748 7.89999 39.4394 9.4366 43.6411C10.9732 47.8427 13.6086 51.6622 17.1273 54.7875C20.6461 57.9128 24.9484 60.2551 29.6827 61.6232C34.417 62.9913 39.449 63.3463 44.3676 62.6591C49.2861 61.972 53.9516 60.2622 57.9829 57.6695L58.8035 57.12L33.8697 35L58.8035 12.8765L57.9829 12.3305C52.9282 9.07068 46.8926 7.22209 40.6476 7.02102L39.4522 7.00001ZM39.4522 10.5C41.0217 10.5 42.5269 11.0531 43.6367 12.0377C44.7465 13.0223 45.37 14.3576 45.37 15.75C45.37 17.1424 44.7465 18.4778 43.6367 19.4623C42.5269 20.4469 41.0217 21 39.4522 21C37.8827 21 36.3774 20.4469 35.2676 19.4623C34.1578 18.4778 33.5344 17.1424 33.5344 15.75C33.5344 14.3576 34.1578 13.0223 35.2676 12.0377C36.3774 11.0531 37.8827 10.5 39.4522 10.5Z" fill="#DB00FF"/>
								<path :class="{'noe' : !lockIn}" d="M39.4522 1.80643e-05C45.3 -0.00525766 51.0756 1.14512 56.3596 3.36758C61.6436 5.59005 66.3032 8.82878 70 12.8485L45.0307 35L70 57.1515C66.3032 61.1712 61.6436 64.41 56.3596 66.6324C51.0756 68.8549 45.3 70.0053 39.4522 70C17.6627 70 0 54.3305 0 35C0 15.6695 17.6627 1.80643e-05 39.4522 1.80643e-05ZM39.4522 10.5C37.8827 10.5 36.3774 11.0531 35.2676 12.0377C34.1578 13.0223 33.5344 14.3576 33.5344 15.75C33.5344 17.1424 34.1578 18.4778 35.2676 19.4623C36.3774 20.4469 37.8827 21 39.4522 21C41.0217 21 42.5269 20.4469 43.6367 19.4623C44.7465 18.4778 45.37 17.1424 45.37 15.75C45.37 14.3576 44.7465 13.0223 43.6367 12.0377C42.5269 11.0531 41.0217 10.5 39.4522 10.5Z" fill="#DB00FF"/>
							</svg>
						</v-col>
					</div>
				</v-row>
			</div>









		</v-row>
	</fon>
</template>



<script setup lang="ts">

import {ref} from "vue";

const lockIn = ref(false)

const reglog = ref<string>('LOG')


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

.active {
	color: #cfd9df;
	font-size: 40px;
	height: fit-content
}

.inactive {
	color: #DB00FF;
	font-size: 40px;
	height: fit-content
}

.active2 {
	color: #cfd9df;
	font-size: 40px;
	height: fit-content;
	margin-left: 62%
}

.inactive2 {
	color: #DB00FF;
	font-size: 40px;
	height: fit-content;
	margin-left: 62%
}



</style>