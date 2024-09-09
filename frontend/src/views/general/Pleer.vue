<template>
	<v-container>
		<v-card>
			<!-- Видеоплеер -->
			<video
				poster="../../imgs/knife.svg"
				ref="videoPlayer"
				@timeupdate="updateProgress"
			@loadedmetadata="initializePlayer"
			width="100%"
			>
				<!--				:src="videoSrc"-->
				<source src="../../imgs/v.mp4">
			</video>

			<!-- Панель управления плеером -->
			<v-card-actions>
				<v-btn icon @click="togglePlayPause">
					<v-icon>{{ isPlaying ? 'mdi-pause' : 'mdi-play' }}</v-icon>
				</v-btn>
				<v-btn icon @click="stopVideo">
					<v-icon>mdi-stop</v-icon>
				</v-btn>

				<!-- Прогресс-бар -->
				<v-slider
					v-model="progress"
					@input="seek"
					min="0"
					:max="duration"
					step="0.1"
					class="flex-grow-1 mx-4"
				></v-slider>

				<!-- Таймер -->
				<div>{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</div>
			</v-card-actions>
		</v-card>
	</v-container>

	</template>

<script setup lang="ts">
import {ref} from "vue";
const isPlaying     = ref(false);
const progress      = ref(0);
const duration      = ref(0);
const currentTime   = ref(0);
const videoPlayer   = ref<HTMLVideoElement>(<HTMLVideoElement>{});

const initializePlayer = () => {
	duration.value = videoPlayer.value.duration;
};

const togglePlayPause = () => {
	if (videoPlayer.value) {
		if (videoPlayer.value.paused) {
			videoPlayer.value.play();
			isPlaying.value = true;
		} else {
			videoPlayer.value.pause();
			isPlaying.value = false;
		}
	}
};

const stopVideo = () => {
	if (videoPlayer.value) {
		videoPlayer.value.pause();
		// videoPlayer.value.currentTime = 0;
		isPlaying.value = false;
	}
};

const updateProgress = () => {
	if (videoPlayer.value) {
		currentTime.value = videoPlayer.value.currentTime;
		progress.value = (currentTime.value / duration.value) * 100;
	}
};

const seek = (value: number) => {
	if (videoPlayer.value) {
		videoPlayer.value.currentTime = (value / 100) * duration.value;
	}
};

const formatTime = (time : number) => {
	const minutes = Math.floor(time / 60)
		.toString()
		.padStart(2, '0');
	const seconds = Math.floor(time % 60)
		.toString()
		.padStart(2, '0');
	return `${minutes}:${seconds}`;
};
</script>

<style scoped lang="scss">

</style>

