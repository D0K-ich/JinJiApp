<template>


	<fon class="grdd d-flex align-content-end align-center justify-center" style="height: 100%; width: 100%">

		<v-row no-gutters>

			<v-col cols="1" class="d-flex justify-center" style="min-width: calc(30vh - 60px); margin-left: 1%">

				<v-virtual-scroll
					:width="220"
					style="scrollbar-width: none; height: calc(100vh - 28px)"
					:items="['1','2','3','4','1','2','3','4','1','1','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4','1','2','3','4']"
				>
					<template v-slot:default="{ item }">
						<v-card
							:height="110"
							class="ma-4"
							style="word-wrap: break-word; background-color: rgba(219, 0, 255, 1); border-radius: 30px">
							<v-card-text class="ma-2"
							             style="font-size: 20px; font-family: 'Inria Sans', sans-serif; color: black">
								{{ item }}
							</v-card-text>


						</v-card>
					</template>
				</v-virtual-scroll>

			</v-col>


			<v-col cols="9"
			       style=" background-color: none; margin-left: 1%; margin-top: 3%; height: calc(100vh - 67px); border: rgba(219, 0, 255, 0.5) 2px solid ; border-radius: 30px; box-shadow: 0 0 15px rgba(219, 0, 255, 1)">

				<div
					class="d-flex justify-center" style="font-size: 20px; font-family: 'Inria Sans', sans-serif; color: #cfd9df">
					1 september 1941

				</div>

				<v-virtual-scroll :width="1500" :height="795" :items="messages">

					<template class="d-flex" v-slot:default="{item}">

						<div :class="item.sender == 'me' ? 'memeseng' : 'backmeseng' "> {{item.content}} </div>

					</template>

				</v-virtual-scroll>

				<div class="d-flex" style="width: 100%">
				<v-text-field v-model="user_message" variant="solo" bg-color="rgba(219, 0, 255, 0.5)" class="ml-15 cusron">

					<template v-slot:append-inner>
						<v-btn style="background: none;" @click="sendmesage">

						<v-img src="./src/views/pages/lapa.png" :height="30" :width="30" />

						</v-btn>
					</template>


					</v-text-field>

					</div>


			</v-col>




			<v-col cols="1"  style=" margin-left: 1%">
				<router-link v-for="(image, idx) in imageg" :key="idx" :to="image.path" >

					<v-img v-if="OfOnIc" :height="55" :width="55" class="mt-14 ml-9" :src="image.path_image"/>

				</router-link>

				<v-img @click="OfOnIc = !OfOnIc" class="mt-10" src="./src/views/pages/Djinneir.png"/>

			</v-col>


		</v-row>

	</fon>


</template>


<script setup lang="ts">


const OfOnIc = ref(true)

import {register} from 'vue-advanced-chat'

register()
import {ref} from 'vue';

const imageg = ref<Image[]>([
	{path: "/", path_image: './src/views/pages/nastroiki.png'},
	{path: "/", path_image: './src/views/pages/favourites.png'},
	{path: "/", path_image: './src/views/pages/stata.png'},
	{path: "/", path_image: './src/views/pages/poisk.png'},
	{path: "/", path_image: './src/views/pages/friends.png'},
	{path: "/", path_image: './src/views/pages/profil.png'},
	{path: "/", path_image: './src/views/pages/home.png'},
])

interface Image {
	path: string
	path_image: string
}

interface Message {
	content: string
	sender: string
	time: number
}

const messages =ref<Message[]>([
	{content: 'dsj.dkl', sender: "me", time: 1},
	{content: 'vnjiklvhnilgvhjivhjgligjlsrikvgjsikdrgjuiedzfogjuiorkfjguierh`rohgierohgeerohgeiorhgoшвара щшв оашщвоашщ кщшгщшво ао а оащуыа вerohgeiorhgoшвара щшв оашщвоашщ кщшгщшво ао а оащуыа вerohgeiorhgoшвара щшв оашщвоашщ кщшгщшво ао а оащуыа вiorhgoшвара щшв оашщвоашщ кщшгщшво ао а оащуыа вшащшыуоагыуагы а воаыоаршгв швощшуо шрвщша вщшщыашвыаэшы шуагыща lirhgiergheiorhg', sender: "me", time: 1},
	{content: 'dsj.dkl', sender: "djin", time: 1},
	{content: 'dsj.dkl', sender: "me", time: 1},
	{content: 'dsj.dkl', sender: "me", time: 1},
	{content: 'dsj.dkl', sender: "me", time: 1},
	{content: 'dsj.dkl', sender: "me", time: 1},
])


import { UsersStore } from '../../store/user';


const mesangeDgin = ref('');
const user_message = ref<string>('')
const sendmesage = () => {
	user_store.MessengNeiro(user_message.value)
}

const user_store = UsersStore()


</script>


<style scoped lang="scss">

.grdd {
	background: none;
}

.cusron *{
	border-radius: 30px;
}

.memeseng {
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

.backmeseng {
	background-color: rgba(219, 0, 255, 0.6);
	margin-bottom: 30px;
	max-width: 40%;
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

</style>