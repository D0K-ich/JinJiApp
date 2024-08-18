<template>

	<v-row no-gutters>

		<v-col cols="3">

			<v-text-field :width="450" class="ml-3" v-model="serch" @keydown.enter="SearchUser">
				<svg width="19" height="20" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.25 14.698C4.215 14.698 0.9375 11.6026 0.9375 7.79175C0.9375 3.98091 4.215 0.885498 8.25 0.885498C12.285 0.885498 15.5625 3.98091 15.5625 7.79175C15.5625 11.6026 12.285 14.698 8.25 14.698ZM8.25 1.948C4.8375 1.948 2.0625 4.56883 2.0625 7.79175C2.0625 11.0147 4.8375 13.6355 8.25 13.6355C11.6625 13.6355 14.4375 11.0147 14.4375 7.79175C14.4375 4.56883 11.6625 1.948 8.25 1.948Z" fill="#DB00FF"/>
					<path d="M15.1198 16.1429C15.0598 16.1429 14.9998 16.1358 14.9473 16.1287C14.5948 16.0862 13.9573 15.8596 13.5973 14.8467C13.4098 14.3154 13.4773 13.7842 13.7848 13.3804C14.0923 12.9767 14.6098 12.75 15.2023 12.75C15.9673 12.75 16.5673 13.0263 16.8373 13.515C17.1073 14.0037 17.0323 14.6271 16.6048 15.2292C16.0723 15.9871 15.4948 16.1429 15.1198 16.1429ZM14.6698 14.5137C14.7973 14.8821 14.9773 15.0662 15.0973 15.0804C15.2173 15.0946 15.4423 14.96 15.6748 14.6413C15.8923 14.3367 15.9073 14.1171 15.8548 14.0179C15.8023 13.9187 15.5923 13.8125 15.2023 13.8125C14.9698 13.8125 14.7973 13.8833 14.6998 14.0037C14.6098 14.1242 14.5948 14.3083 14.6698 14.5137Z" fill="#DB00FF"/>
				</svg>
			</v-text-field>

			<v-select placeholder="voice acting" style="background-color: rgba(219, 0, 255, 0.3); height: 6%" class="ml-3" :width="450" :items="voice_acting"> </v-select>
			<v-select placeholder="genre" style="background-color: rgba(219, 0, 255, 0.3); height: 6%" class="ml-3 mt-5" :width="450" :items="genre"> </v-select>
			<v-select placeholder="tipe" style="background-color: rgba(219, 0, 255, 0.3); height: 6%" class="ml-3 mt-5" :width="450" :items="tipe"> </v-select>
			<v-select placeholder="status" style="background-color: rgba(219, 0, 255, 0.3); height: 6%" class="ml-3 mt-5" :width="450" :items="status"> </v-select>

			<div class=" ml-3 mt-5 range-container" style="font-size: 25px">
				age
				<label style="color: #DB00FF" class="range-labels" :style="{ left: `${labelPosition}%` }" for="age">{{Math.floor(age_selected)}}</label>
				<input type="range" min="0" @input="updateLabelPosition" max="18" v-model="age_selected" id="age" name="age" step="any" class="mt-3" style="height: fit-content; width: 90%" />
			</div>

			<div class=" ml-3 mt-5 range-container" style="font-size: 25px">
				year
				<label style="color: #DB00FF" class="range-labels" :style="{ left: `${labelPositions}%` }" for="year">{{Math.floor(year)}}</label>
				<input type="range" min="1980" @input="updateLabelPositions" max="2024" v-model="year" id="year" name="year" step="any" class="mt-3" style="height: fit-content; width: 90%" />
			</div>


		</v-col>



		<v-col cols="8">

			<v-virtual-scroll style="scrollbar-width: none" :items="anime_info" :width="1276" :height="991">

				<template v-slot:default="{item}" class="d-flex">
					<v-card :height="300" class="mt-5" style="word-wrap: break-word; background: none; border: #cfd9df 1px solid">

						<div class="d-flex">
						<v-card-text class="ml-3 d-flex  align-center" style="font-size: 15px; height: 2vh; width: fit-content; border: #cfd9df 1px solid">
							{{ item.genre }}
						</v-card-text>

						<v-card-text class="ml-3 d-flex align-center" style="font-size: 15px; height: 2vh; width: fit-content; border: #cfd9df 1px solid">
							{{ item.rating }}
						</v-card-text>
						</div>


						<div class="d-flex ml-3 mt-2" style="width: fit-content; height: fit-content">
							<v-card-text style="font-size: 20px; height: 21vh; width: 100vh; border: #cfd9df 1px solid">
							{{ item.content }}
							</v-card-text>

							<v-img class="ml-11" style="border: #cfd9df 1px solid;" :width="170" :height="230">
								{{item.img_path}}
							</v-img>
						</div>

						<div>
							<v-card-text class="ml-3 d-flex justify-center align-center" style="font-size: 20px; height: 2vh; width: fit-content; border: #cfd9df 1px solid">
								{{ item.age }}
							</v-card-text>
						</div>

					</v-card>

				</template>



			</v-virtual-scroll>

		</v-col>

		<v-col cols="1">

			<router-link v-for="(image, idx) in images" :key="idx" :to="image.redirect_path">

				<v-img v-if="show_options" :height="55" :width="55" class="mt-14 ml-9" :src="image.path_image"/>

			</router-link>

			<router-link to="//jin-chat">
				<v-img @click="show_options = !show_options; startRotate()" class="mt-10" :class="is_rotating ? 'rotate' : '' " src="./src/views/pages/imgs/Djinneir.png"/>
			</router-link>
		</v-col>




	</v-row>
</template>


<script setup lang="ts">

import {ref} from "vue";
import {UsersStore} from "../../store/user"
import {AnimeDescription, Genre, Image, Status, Tipe, VoiceActing} from "../../models/users/users";

const users_store = UsersStore()

const age_selected = ref<number>(1);
const year         = ref<number>(2005)

const labelPosition = ref<number>(1);
const updateLabelPosition = () => {
	labelPosition.value = (age_selected.value / 18) * 90;
};

const labelPositions = ref<number>(2005);
const updateLabelPositions = () => {
	labelPositions.value = (((1980 - year.value) * -1) / 44) * 90;
};

const show_options  = ref(true)
const images = ref<Image[]>([
	{redirect_path: "/", path_image: './src/views/pages/imgs/nastroiki.png'},
	{redirect_path: "/", path_image: './src/views/pages/imgs/favourites.png'},
	{redirect_path: "/", path_image: './src/views/pages/imgs/stata.png'},
	{redirect_path: "/anime", path_image: './src/views/pages/imgs/poisk.png'},
	{redirect_path: "/", path_image: './src/views/pages/imgs/friends.png'},
	{redirect_path: "/", path_image: './src/views/pages/imgs/profil.png'},
	{redirect_path: "/", path_image: './src/views/pages/imgs/home.png'},
])

const is_rotating   = ref<boolean>(false)

const startRotate   = () => {
	is_rotating.value = true
	setTimeout(() => {is_rotating.value = false}, 2000)
}

const anime_info = ref<AnimeDescription[]>([])
const voice_acting = ref<VoiceActing[]>([])
const genre = ref<Genre[]>([])
const tipe = ref<Tipe[]>([])
const status = ref<Status[]>([])

const serch = ref<string>('')
const SearchUser = () => {
	users_store.SearchUser(serch.value)
}

</script>



<style scoped lang="scss">




</style>