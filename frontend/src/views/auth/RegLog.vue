<template>
	<fon class="d-flex justify-center align-center grddd" style="height: 100%; width: 100%">


		<v-row class="d-flex"
		       style="background-color: #3A114D; border-radius: 30px; height: calc(80vh - 100px); max-width: calc(110vh - 100px)" no-gutters>
			<v-col class="d-flex" style="height: fit-content; max-width: calc(110vh - 100px)">
				<v-btn :class="reglog == 'REG' ? 'active' : 'inactive'" @click="reglog = 'REG'" class="ma-10"
				       style="background: none"> REG
				</v-btn>
				<v-btn :class="reglog == 'Forgot your password?' ? 'active3' : 'inactive3'" class="mt-10"
				       @click="reglog = 'Forgot your password?'" style="background: none"> Forgot your password?
				</v-btn>
				<v-btn :class="reglog == 'LOG' ? 'active2' : 'inactive2'" @click="reglog = 'LOG'" class="mt-10"
				       style="background: none"> LOG
				</v-btn>
			</v-col>
			<div v-if="reglog == 'REG'">
				<v-col class="d-flex"  style="height: fit-content; width: calc(110vh - 100px)">
					<div style="color: #cfd9df; font-size: 50px; height: fit-content" class="ml-8"> NAME </div>
					<v-text-field v-model="name_user" variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-2 ml-8 cusron"/>
				</v-col>
				<v-col class="d-flex" cols="12" style="height: fit-content">
					<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 1%" class="ml-8">
						MAIL
					</div>
					<v-text-field variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-4 ml-14 cursron" v-model="mail"/>
					<v-btn @click="inMail()" :height="50" :width="10"  class="mt-5 mr-3"> send </v-btn>
				</v-col>
				<v-col class="d-flex" cols="12" style="height: fit-content">
					<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 1%" class="ml-8">
						CODE
					</div>
					<v-text-field variant="solo" bg-color="rgba(219, 0, 255, 1)" v-model="code" class="mt-4 ml-12 cursron"/>
					<v-btn @click="checkCode()" :height="50" :width="10"  class="mt-5 mr-3"> check </v-btn>
				</v-col>
				<v-col class="d-flex" cols="12" style="height: fit-content">
					<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 1%" class="ml-8">
						PASS
					</div>
					<v-text-field v-model="password" variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-4 ml-15 cusron"/>
				</v-col>
				<v-col style="width: fit-content; height: fit-content; margin-left: 86%" @click="lockIn = !lockIn; newProfile()">
						<svg width="60" height="60" viewBox="0 0 70 70" fill="none" class="mt-2"
						     xmlns="http://www.w3.org/2000/svg">
							<path :class="{'noe' : lockIn}"
							      d="M35 70C15.6695 70 0 54.3305 0 35C0 15.6695 15.6695 0 35 0C54.3305 0 70 15.6695 70 35C70 54.3305 54.3305 70 35 70ZM31.5 37.772V49H38.5V37.772C40.3424 36.9679 41.8518 35.554 42.7743 33.7679C43.6968 31.9818 43.9761 29.9326 43.5654 27.9648C43.1547 25.997 42.079 24.2306 40.5191 22.9626C38.9591 21.6947 37.0102 21.0025 35 21.0025C32.9898 21.0025 31.0409 21.6947 29.4809 22.9626C27.921 24.2306 26.8453 25.997 26.4346 27.9648C26.0239 29.9326 26.3032 31.9818 27.2257 33.7679C28.1482 35.554 29.6576 36.9679 31.5 37.772Z"
							      fill="#DB00FF"/>
							<path :class="{'noe' : !lockIn}"
							      d="M35 70C15.6695 70 0 54.3305 0 35C0 15.6695 15.6695 0 35 0C54.3305 0 70 15.6695 70 35C70 54.3305 54.3305 70 35 70ZM35 63C42.4261 63 49.548 60.05 54.799 54.799C60.05 49.548 63 42.4261 63 35C63 27.5739 60.05 20.452 54.799 15.201C49.548 9.94999 42.4261 7 35 7C27.5739 7 20.452 9.94999 15.201 15.201C9.94999 20.452 7 27.5739 7 35C7 42.4261 9.94999 49.548 15.201 54.799C20.452 60.05 27.5739 63 35 63ZM31.5 37.772C29.6576 36.9679 28.1482 35.554 27.2257 33.7679C26.3032 31.9818 26.0239 29.9326 26.4346 27.9648C26.8453 25.997 27.921 24.2306 29.4809 22.9626C31.0409 21.6947 32.9898 21.0025 35 21.0025C37.0102 21.0025 38.9591 21.6947 40.5191 22.9626C42.079 24.2306 43.1547 25.997 43.5654 27.9648C43.9761 29.9326 43.6968 31.9818 42.7743 33.7679C41.8518 35.554 40.3424 36.9679 38.5 37.772V49H31.5V37.772Z"
							      fill="#DB00FF"/>
						</svg>
				</v-col>
			</div>

			<div v-if="reglog == 'LOG'">
				<v-col class="d-flex" style="height: fit-content; width: calc(110vh - 100px)">
					<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 2%" class="ml-16">
						NIK
					</div>
					<v-text-field v-model="old_nick" variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-7 ml-14 cusron"/>
				</v-col>
				<v-col class="d-flex" cols="12" style="height: fit-content">
					<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 3%" class="ml-8">
						PASS
					</div>
					<v-text-field v-model="old_password" variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-7 ml-14 cursron"/>
				</v-col>
				<v-col style="width: fit-content; height: fit-content; margin-left: 86%" @click="lockIn = !lockIn; oldUser()">
					<svg width="60" height="60" viewBox="0 0 70 70" fill="none" style=" margin-top: 20%"
					     xmlns="http://www.w3.org/2000/svg">
						<path :class="{ 'noe' : lockIn }"
						      d="M39.4522 1.80643e-05C45.3 -0.00525766 51.0756 1.14512 56.3596 3.36758C61.6436 5.59005 66.3032 8.82878 70 12.8485L45.0307 35L70 57.1515C66.3032 61.1712 61.6436 64.41 56.3596 66.6324C51.0756 68.8549 45.3 70.0053 39.4522 70C17.6627 70 0 54.3305 0 35C0 15.6695 17.6627 1.80643e-05 39.4522 1.80643e-05ZM39.4522 7.00001C34.473 7.0008 29.5647 8.04667 25.1283 10.0522C20.6919 12.0577 16.8533 14.9659 13.9261 18.5392C10.9989 22.1125 9.06626 26.2495 8.28599 30.6122C7.50571 34.9748 7.89999 39.4394 9.4366 43.6411C10.9732 47.8427 13.6086 51.6622 17.1273 54.7875C20.6461 57.9128 24.9484 60.2551 29.6827 61.6232C34.417 62.9913 39.449 63.3463 44.3676 62.6591C49.2861 61.972 53.9516 60.2622 57.9829 57.6695L58.8035 57.12L33.8697 35L58.8035 12.8765L57.9829 12.3305C52.9282 9.07068 46.8926 7.22209 40.6476 7.02102L39.4522 7.00001ZM39.4522 10.5C41.0217 10.5 42.5269 11.0531 43.6367 12.0377C44.7465 13.0223 45.37 14.3576 45.37 15.75C45.37 17.1424 44.7465 18.4778 43.6367 19.4623C42.5269 20.4469 41.0217 21 39.4522 21C37.8827 21 36.3774 20.4469 35.2676 19.4623C34.1578 18.4778 33.5344 17.1424 33.5344 15.75C33.5344 14.3576 34.1578 13.0223 35.2676 12.0377C36.3774 11.0531 37.8827 10.5 39.4522 10.5Z"
						      fill="#DB00FF"/>
						<path :class="{'noe' : !lockIn}"
						      d="M39.4522 1.80643e-05C45.3 -0.00525766 51.0756 1.14512 56.3596 3.36758C61.6436 5.59005 66.3032 8.82878 70 12.8485L45.0307 35L70 57.1515C66.3032 61.1712 61.6436 64.41 56.3596 66.6324C51.0756 68.8549 45.3 70.0053 39.4522 70C17.6627 70 0 54.3305 0 35C0 15.6695 17.6627 1.80643e-05 39.4522 1.80643e-05ZM39.4522 10.5C37.8827 10.5 36.3774 11.0531 35.2676 12.0377C34.1578 13.0223 33.5344 14.3576 33.5344 15.75C33.5344 17.1424 34.1578 18.4778 35.2676 19.4623C36.3774 20.4469 37.8827 21 39.4522 21C41.0217 21 42.5269 20.4469 43.6367 19.4623C44.7465 18.4778 45.37 17.1424 45.37 15.75C45.37 14.3576 44.7465 13.0223 43.6367 12.0377C42.5269 11.0531 41.0217 10.5 39.4522 10.5Z"
						      fill="#DB00FF"/>
					</svg>
				</v-col>
			</div>
			<div v-if="reglog == 'Forgot your password?'">
				<v-col class="d-flex" style="height: fit-content; width: calc(110vh - 100px)">
					<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 2%" class="ml-8">
						EMAIL
					</div>
					<v-text-field variant="solo" bg-color="rgba(219, 0, 255, 1)" class="mt-7 ml-8 cursron"/>
					<v-btn @click="inMail()" :height="50" :width="10"  class="mt-8 mr-3"> send </v-btn>
				</v-col>
				<v-col class="d-flex" cols="12" style="height: fit-content">
					<div style="color: #cfd9df; font-size: 50px; height: fit-content;margin-top: 1%" class="ml-8">
						CODE
					</div>
					<v-text-field variant="solo" bg-color="rgba(219, 0, 255, 1)" v-model="code" class="mt-4 ml-12 cursron"/>
					<v-btn @click="checkCode()" :height="50" :width="10"  class="mt-6 mr-3"> check </v-btn>
				</v-col>
				<v-col style="width: fit-content; height: fit-content; margin-left: 86%" @click="lockIn = !lockIn; recoverParol()">
					<svg width="60" height="100" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path :class="{ 'noe' : !lockIn }"
						      d="M8.11029 0.983887L66.711 77.6199C67.6256 78.8153 68.1395 80.4367 68.1398 82.1276C68.1401 83.8185 67.6268 85.4403 66.7127 86.6363C65.7986 87.8322 64.5586 88.5043 63.2656 88.5047C61.9725 88.5051 60.7323 87.8337 59.8178 86.6384L44.8808 67.1011L33.3888 82.1249L19.9988 64.6149V75.7499C19.9988 76.8771 19.6564 77.9581 19.0469 78.7551C18.4374 79.5521 17.6107 79.9999 16.7488 79.9999C15.8868 79.9999 15.0602 79.5521 14.4507 78.7551C13.8412 77.9581 13.4988 76.8771 13.4988 75.7499V58.7499C13.4979 57.6666 13.1807 56.6247 12.612 55.8371C12.0434 55.0494 11.2662 54.5754 10.4393 54.5119C9.61232 54.4484 8.79806 54.8003 8.16284 55.4955C7.52761 56.1908 7.11938 57.177 7.02154 58.2526L6.99879 58.7499V62.9999C6.99879 64.1271 6.65638 65.2081 6.04689 66.0051C5.4374 66.8021 4.61075 67.2499 3.74879 67.2499C2.88684 67.2499 2.06019 66.8021 1.45069 66.0051C0.841201 65.2081 0.498792 64.1271 0.498792 62.9999V25.6594C0.363781 16.7892 2.89344 8.2033 7.54479 1.74464L8.11029 0.983887ZM8.89354 14.0314L8.72779 14.4989C7.75171 17.3186 7.17681 20.3473 7.03129 23.4366L6.99879 24.7499L6.99554 25.2599C7.03465 31.5673 8.86477 37.6307 12.1305 42.2726L12.7058 43.0589L33.3855 70.1016L42.5798 58.0826L8.89354 14.0314Z"
						      fill="#00FFFF"/>
						<path :class="{'noe' : lockIn}"
						      d="M7.61664 0L66.2174 76.636C67.1319 77.8314 67.6459 79.4529 67.6462 81.1438C67.6465 82.8347 67.1331 84.4564 66.219 85.6524C65.3049 86.8483 64.065 87.5204 62.7719 87.5208C61.4789 87.5212 60.2387 86.8499 59.3241 85.6545L44.3871 66.1172L32.8951 81.141L19.5051 63.631V74.766C19.5051 75.8932 19.1627 76.9742 18.5532 77.7712C17.9437 78.5682 17.1171 79.016 16.2551 79.016C15.3932 79.016 14.5665 78.5682 13.957 77.7712C13.3475 76.9742 13.0051 75.8932 13.0051 74.766V57.766C13.0042 56.6828 12.687 55.6409 12.1184 54.8532C11.5497 54.0655 10.7725 53.5915 9.94561 53.528C9.11867 53.4645 8.30441 53.8164 7.66918 54.5116C7.03396 55.2069 6.62573 56.1931 6.52789 57.2688L6.50514 57.766V62.016C6.50514 63.1432 6.16273 64.2242 5.55324 65.0212C4.94374 65.8182 4.11709 66.266 3.25514 66.266C2.39319 66.266 1.56654 65.8182 0.957042 65.0212C0.347549 64.2242 0.00513928 63.1432 0.00513928 62.016V24.6755C-0.129871 15.8053 2.39979 7.21941 7.05114 0.76075L7.61664 0ZM8.39989 13.0475L8.23414 13.515C7.25806 16.3347 6.68316 19.3635 6.53764 22.4527L6.50514 23.766L6.50189 24.276C6.541 30.5834 8.37111 36.6468 11.6369 41.2887L12.2121 42.075L32.8919 69.1178L42.0861 57.0988L8.39989 13.0475Z"
						      fill="#DB00FF"/>
					</svg>
				</v-col>
			</div>
		</v-row>


	</fon>
</template>


<script setup lang="ts">

import {ref} from "vue";
import {UsersStore} from "../../store/user";
import router from "../../router/router";

const lockIn = ref(false)

const reglog = ref<string>('LOG')

const user_store = UsersStore()

const mail = ref<string>('')

const inMail = () => {
	user_store.SendMailCode(mail.value)
}

const code = ref()

const checkCode = () => {
	user_store.SendCodeCheck(code.value)
}



const recoverParol = () => {
	user_store.RecoverPass().then(() => {
		lockIn.value = !lockIn.value
		reglog.value = 'LOG'
	})
	setTimeout(() => {
		lockIn.value = !lockIn.value
		reglog.value = 'LOG'
	}, 1000)
}

const password = ref<string>('')
const name_user = ref<string>('')

const newProfile = () => {
	user_store.NewProfile(mail.value, password.value, name_user.value).then(() => {
		router.push("/")
	})
	setTimeout(() => {
		router.push("/")
	}, 1000)
}

const old_password = ref<string>('')
const old_nick = ref<string>('')

const oldUser = () => {
	user_store.OldUser(old_nick.value, old_password.value).then(() => {
		router.push("/")
	})
	setTimeout(() => {
		router.push("/")
	}, 1000)
}


</script>


<style scoped lang="scss">
.grddd {
	background: none;
	//background: linear-gradient(167deg, #000000, 70%, #3A114D);
}

.cusron * {
	border-radius: 30px;
	width: calc(75vh);
}

.cursron * {
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
	margin-left: 22%
}

.inactive2 {
	color: #DB00FF;
	font-size: 40px;
	height: fit-content;
	margin-left: 22%
}

.active3 {
	color: #cfd9df;
	font-size: 15px;
	height: fit-content;
	margin-left: 19%
}

.inactive3 {
	color: #DB00FF;
	font-size: 15px;
	height: fit-content;
	margin-left: 19%
}


</style>