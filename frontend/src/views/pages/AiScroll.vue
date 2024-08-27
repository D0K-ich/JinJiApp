

<template>
	<v-card class="mt-4 mr-12 ml-2 d-inline-block justify-center" :height="300" :width="300" style="background: none">


				<div class="d-flex justify-center mt-2" style=" height: 20vh">
					<v-img class="d-flex justify-center align-center" style=" max-width: fit-content; max-height: fit-content">
						{{ ai_anime.img_path }}
					</v-img>
				</div>

				<v-card-text class="d-flex justify-center mt-5">
					{{ ai_anime.name }}
				</v-card-text>

	</v-card>
</template>

<script setup lang="ts">

import {AiAnime} from "../../models/users/users";

defineProps<{
	ai_anime: AiAnime
}>()

</script>

<style scoped lang="scss">

</style>