<template>
	<v-row no-gutters>

		<v-col cols="2">
			<div class="ml-10 mt-8">
				<svg width="54" height="50" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 21.0526H9.77778V40H0V21.0526ZM34.2222 12.6316H44V40H34.2222V12.6316ZM17.1111 0H26.8889V40H17.1111V0Z" fill="#DB00FF"/>
				</svg>
			</div>

			<v-btn class="ml-6 mt-3 textAI"><a :href="textAiChecked().href">{{ textAiChecked().name }}</a></v-btn>

			<div class="ml-6 mt-16 custom-switch" @click="is_checked = !is_checked">
				<div class="custom-switch-track">
					<div class="custom-switch-thumb" :class="{ 'is-checked': is_checked }"></div>
				</div>
				<input type="checkbox" v-model="is_checked" style="display: none;">
			</div>


				<Filtres />

		</v-col>



		<v-col cols="9">


			<v-virtual-scroll class="Vvs" style="scrollbar-width: none" :items="ai_anime" :width="1436" :height="991">

				<template v-slot:default="{item}">
					<AiScroll :ai_anime="item" />
				</template>

			</v-virtual-scroll>


		</v-col>





		<v-col cols="1">

			<router-link v-for="(image, idx) in images" :key="idx" :to="image.redirect_path">

				<v-img v-if="show_options" :height="55" :width="55" class="mt-14 ml-9" :src="image.path_image"/>

			</router-link>

			<router-link to="/jin-chat">
				<v-img @click="show_options = !show_options; startRotate()" class="mt-10" :class="is_rotating ? 'rotate' : '' " src="./src/views/pages/imgs/Djinneir.png"/>
			</router-link>

		</v-col>

	</v-row>


</template>


<script setup lang="ts">


import {ref} from "vue";
import {AiAnime, Image, TimePost} from "../../models/users/users";
import AiScroll from "./AiScroll.vue";
import Filtres from "./Filtres.vue";

const scroll = ref<string>('')

const show_options  = ref(true)
const images = ref<Image[]>([
	{redirect_path: "/", path_image: './src/views/pages/imgs/nastroiki.png'},
	{redirect_path: "/", path_image: './src/views/pages/imgs/favourites.png'},
	{redirect_path: "/AIselection", path_image: './src/views/pages/imgs/stata.png'},
	{redirect_path: "/search-anime", path_image: './src/views/pages/imgs/poisk.png'},
	{redirect_path: "/", path_image: './src/views/pages/imgs/friends.png'},
	{redirect_path: "/", path_image: './src/views/pages/imgs/profil.png'},
	{redirect_path: "/", path_image: './src/views/pages/imgs/home.png'},
])

const is_rotating   = ref<boolean>(false)

const startRotate   = () => {
	is_rotating.value = true
	setTimeout(() => {is_rotating.value = false}, 2000)
}

const is_checked            = ref<boolean>(false)
const textAiChecked = () : {name : string, href : string} => {//todo
	if (!is_checked.value) {return {name : 'Your AI selection', href : "/AIselection"}}
	return {name : 'Our AI selection', href : "/AIselection"}
}


const ai_anime = ref<AiAnime[]>([])

</script>



<style scoped lang="scss">

.custom-switch {
	max-width: 70px;
	height: 34px;
}

.custom-switch-track {
	width: 70px;
	height: 34px;
	background-color: #310E37;
	border-radius: 34px;
}

.custom-switch-thumb {
	width: 30px;
	height: 30px;
	background-color: #DB00FF;
	border-radius: 50%;
	transition: transform 0.3s;
}

.custom-switch-thumb.is-checked {
	transform: translateX(36px);
}

.textAI {
	background: none;
	border: #DB00FF 3px solid;
	border-radius: 30px;
	width: 11em;
	height: 2em;
	text-align: center;
	display: inline-block;
	position: absolute;
	font-family: 'Inria Sans', sans-serif;
	font-size: 20px
}

.Vvs * {
	display: inline-block;
	flex-direction: row;
	flex-wrap: nowrap;
}

</style>