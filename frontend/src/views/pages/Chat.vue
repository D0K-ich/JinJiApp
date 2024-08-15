<template>
	<div class="back-color d-flex align-content-end align-center justify-center" style="height: 100%; width: 100%">

		<v-row>
			<v-col cols="1" class="d-flex justify-center" style="min-width: calc(30vh - 60px); margin-left: 1%">

				<v-virtual-scroll
					:width="220"
					style="scrollbar-width: none; height: calc(100vh - 28px)"
					:items="user_dialogs"
				>
					<template v-slot:default="{ item }">
						<v-card
							:height="110"
							class="ma-4"
							style="word-wrap: break-word; background-color: rgba(219, 0, 255, 1); border-radius: 30px">

							<v-card-text class="ma-2" style="font-size: 20px; color: black">{{ item.header }}</v-card-text>
						</v-card>
					</template>
				</v-virtual-scroll>

			</v-col>

			<v-col cols="9" style=" background-color: #3A114D; margin-left: 1%; margin-top: 3%; height: calc(100vh - 67px); border: rgba(219, 0, 255, 0.5) 2px solid ; border-radius: 30px; box-shadow: 0 0 15px rgba(219, 0, 255, 1)">

				<div class="d-flex justify-center" style="font-size: 20px">1 september 1941</div>

				<v-virtual-scroll style="scrollbar-width: none" :width="1500" :height="795" :items="messages">

					<template class="d-flex" v-slot:default="{item}">

						<div :class="item.sender == 'me' ? 'our-message' : 'back-message' "> {{item.content}} </div>

					</template>

				</v-virtual-scroll>

				<div class="d-flex" style="width: 100%">
					<v-text-field @keyup.enter="sendMessage" v-model="user_message" variant="solo" bg-color="rgba(219, 0, 255, 0.5)" class="ml-15 input-field">

						<template v-slot:append-inner>
							<v-btn @click="sendMessage">
								<v-img src="./src/views/pages/imgs/lapa.png" :height="30" :width="30"/>
							</v-btn>
						</template>

					</v-text-field>

				</div>

			</v-col>

			<v-col cols="1"  style=" margin-left: 1%">
				<router-link v-for="(image, idx) in images" :key="idx" :to="image.redirect_path">

					<v-img v-if="show_options" :height="55" :width="55" class="mt-14 ml-9" :src="image.path_image"/>

				</router-link>

				<v-img @click="show_options = !show_options; startRotate()" class="mt-10" :class="is_rotating ? 'rotate' : '' " src="./src/views/pages/imgs/Djinneir.png"/>

			</v-col>
		</v-row>
	</div>

</template>

<script setup lang="ts">
import {register} from 'vue-advanced-chat'
import {onMounted, ref} from 'vue'
import { UsersStore } from '../../store/user';
import { Image, Message } from '../../models/users/users';
import { DialogDjin } from '../../models/users/responses';

register()

const show_options  = ref(true)

const user_message  = ref<string>('')
const messages      = ref<Message[]>([])
const user_store    = UsersStore()

const is_rotating   = ref<boolean>(false)

const user_dialogs  = ref<DialogDjin[]>([])

const startRotate   = () => {
	is_rotating.value = true
	setTimeout(() => {is_rotating.value = false}, 2000)
}

const sendMessage = () => {
	messages.value.push({
		content : user_message.value,
		sender  : "me",
		time    : 1,
	})

	user_store.NewMessageDjin(user_message.value)
		.then((r) => {{
			messages.value.push({
				content : r.context,
				sender  : "back",
				time    : r.date_time,
			})
		}})

	user_message.value = ''
}

//todo
const images = ref<Image[]>([
	{redirect_path: "/", path_image: './src/views/pages/imgs/nastroiki.png'},
	{redirect_path: "/", path_image: './src/views/pages/imgs/favourites.png'},
	{redirect_path: "/", path_image: './src/views/pages/imgs/stata.png'},
	{redirect_path: "/", path_image: './src/views/pages/imgs/poisk.png'},
	{redirect_path: "/", path_image: './src/views/pages/imgs/friends.png'},
	{redirect_path: "/", path_image: './src/views/pages/imgs/profil.png'},
	{redirect_path: "/", path_image: './src/views/pages/imgs/home.png'},
])

onMounted(() => {
	// user_store.DialogList()
	// 	.then((r) => {
	// 		user_dialogs.value = r
	// 	})
})

</script>

<style scoped lang="scss">

.back-color {
	background: linear-gradient(167deg, #000000, 70%, #3A114D);
}

.input-field *{
	border-radius: 30px;
}

.our-message {
	background-color: rgba(137, 121, 255, 0.6);
	border-radius: 30px;
	margin-bottom: 30px;
	margin-left: auto;
	min-width: calc(30vh - 250px);
	max-width: 100vh;
	width: fit-content;
	min-height: calc(30vh - 250px);
	max-height: 100vh;
	height: fit-content;
	padding: 10px;
	box-sizing: border-box;
}

.back-message {
	background-color: rgba(219, 0, 255, 0.6);
	margin-bottom: 30px;
	border-radius: 30px;
	min-width: calc(30vh - 250px);
	max-width: 100vh;
	width: fit-content;
	min-height: calc(30vh - 250px);
	max-height: 100vh;
	height: fit-content;
	padding: 10px;
	box-sizing: border-box;
}

.rotate {
	animation: rotate 2s linear infinite;
}

@keyframes rotate {
	from {transform: rotate(0deg)}
	to {transform: rotate(360deg)}
}
</style>