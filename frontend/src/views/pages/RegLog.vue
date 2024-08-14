<template>
	<fon class="grddd d-flex" style="height: 100%; width: 100%">
		<v-row no-gutters class="d-flex justify-center align-center">

			<div style="background-color: #3A114D; border-radius: 30px; height: calc(70vh); width: calc(100vh)">
				<v-row no-gutters>
				<v-col cols="12" class="d-flex" style="height: fit-content">
				<div style="color: #DB00FF; font-size: 40px; height: fit-content" class="ma-10"> REG </div>
				<div style="font-size: 40px; height: fit-content; margin-left: 70%" class="mt-10"> LOG </div>
				</v-col>
				<v-col class="d-flex" cols="12" style="height: fit-content">
					<div style="font-size: 50px; height: fit-content;margin-top: 2%" class="ml-16"> NIK </div>
					<v-text-field  variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-7 ml-14 cusron"/>
				</v-col>
				<v-col class="d-flex" cols="12" style="height: fit-content">
					<div style="font-size: 50px; height: fit-content;margin-top: 3%" class="ml-12"> MAIL </div>
					<v-text-field variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-7 ml-10 cusron"/>
				</v-col>
				<v-col class="d-flex" cols="12" style="height: fit-content">
					<div style="font-size: 50px; height: fit-content;margin-top: 3%" class="ml-8"> CODE </div>
					<v-text-field variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-7 ml-8 cusron"/>
				</v-col>
				<v-col class="d-flex" cols="12" style="height: fit-content">
					<div style="font-size: 50px; height: fit-content;margin-top: 3%" class="ml-8"> PAROLE </div>
					<v-text-field variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-7 ml-14 cursron"/>
				</v-col>
				<v-col>
					<
				</v-col>
				</v-row>
			</div>










		</v-row>
	</fon>
</template>



<script setup lang="ts">

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



</style>