<template>
	<Sky/>

	<div class="d-flex justify-center align-center" style="min-height: 100vh">
		<div class="neon-text-container">
			<div class="neon-text">
		        <span v-for="(letter, index) in letters" :key="index" class="letter">
		          {{ letter }}
		        </span>
			</div>
		</div>
	</div>

</template>
<!--:class="is_on ? 'off-anim' : ''"-->
<script setup lang="ts">
import Sky from "./sky.vue";
import {onMounted, ref} from "vue";

const letters = ref(('404 PAGE NOT FOUNT').split(''));

const is_on = ref<boolean>(false)

const changeAnimation = () => {

	setInterval(() => {
		const lettersElements = document.querySelectorAll('.letter');

		lettersElements.forEach(letter => {
			if (Math.round(Math.random())) {
				if (letter.classList.contains('off-anim')) {letter.classList.remove('off-anim'); return}
				if (!letter.classList.contains('off-anim')) {letter.classList.add('off-anim'); return}
			}
		});
		is_on.value = true

	}, 500)
}

onMounted(() => {
	changeAnimation()
})
</script>

<style scoped lang="scss">
.letter {
	font-size: 4.2em;
	animation: Flicker #{random(5)}s ease-in-out infinite alternate;
	color: #0050ff;
}

.off-anim {
	animation: none;
}

@keyframes Flicker {

	0%, 18%, 22%, 25%, 53%, 57%, 100% {

		text-shadow:
			0 0 4px #211b36,
			0 0 4px #211b36,
			0 0 4px #211b36,
			0 0 20px #bc02f0,
			0 0 20px #bc02f0,
			0 0 20px #bc02f0,
			0 0 20px #bc02f0,
			0 0 20px #bc02f0;

	}
	20%, 24%, 55% {
		text-shadow: none;
	}
}

</style>