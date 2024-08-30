<template>
	<section class="container body-section">
		<div class="animation-wrapper">
			<div class="animation-content">
				<aside></aside>
				<aside></aside>
				<div><span></span><span></span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li>PH0</li>
					</ul>
				</div>
				<div><span></span><span></span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li>PH1</li>
					</ul>
				</div>
				<div><span></span><span></span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li>PH2</li>
					</ul>
				</div>
				<div><span></span><span></span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li>PH3</li>
					</ul>
				</div>
				<div><span></span><span></span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li>PH4</li>
					</ul>
				</div>
				<div><span></span><span></span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li>PH5</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {Element} from "chart.js";

const count_green_panels = ref<number>(0)
const green_panels = ref<HTMLLIElement[]>([])

const setColors = () : string => {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

onMounted(() => {
	document.querySelectorAll('div span:nth-child(1)').forEach((element) => {
		(element as HTMLElement).style.backgroundColor = setColors();
	})

	document.querySelectorAll('div span:nth-child(2)').forEach((element) => {
		(element as HTMLElement).style.backgroundColor = setColors();
	})

	green_panels.value = Array.from(document.querySelectorAll("li:last-child"))

	document.querySelectorAll("li:last-child").forEach((element) => {
		element.addEventListener(("click"), () => {
			if (element.classList.contains("turn-on-server")) {element.classList.remove("turn-on-server"); count_green_panels.value--; return}
			if (!element.classList.contains("turn-on-server")) {
				element.classList.add("turn-on-server");
				count_green_panels.value++;
				if (count_green_panels.value == 6) {
					green_panels.value[Math.round(Math.random()*10/2)].classList.remove("turn-on-server")
					count_green_panels.value--;
				}
				return
			}
		})
	})
})

</script>

<style scoped lang="scss">
// Color Variables
$primary-color: #80b941;
$err-color: red;
$secondary-color: #47515d;
$secondary-light-color: #cccccc;
$orange: #f49534;

.turn-on-server {
	transition: 1000ms linear;
	box-shadow: 0 0 15px $primary-color !important;
	background: $primary-color !important;
}

// Animations
@keyframes blink {
	50% {
		opacity: 0;
	}
}

@keyframes blinkHalf {
	50% {
		opacity: 0.4;
	}
}

@keyframes fade {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

p,
i {
	color: $secondary-light-color;
}

ul {
	padding-left: 0;
}

// Body Section
.body-section {
	top: 0;
	left: 0;
	position: absolute;
	min-height: 100vh;
	min-width: 100%;
	//z-index: -1;
	display: flex;
	justify-content: center;
	align-items: center;
}

// Animation Wrapper and Content
.animation-wrapper {
	text-align: center;
	width: 100%;
	//z-index: -1;
}

@mixin random-color() {
	background: if(random(2) == 1, $primary-color, $err-color);
}

.animation-content {
	height: 370px;
	margin: auto;
	position: relative;
	width: 250px;

	aside {
		background: #232323;
		height: 350px;
		position: absolute;
		width: 20px;
		//z-index: 1;

		&:nth-child(1) {
			right: 5px;
		}
		&:nth-child(2) {
			left: 5px;
		}
	}

	div {
		background: #202730;
		box-shadow: 10px 0 15px #2d3540, -10px 0 15px #2d3540;
		height: 50px;
		margin: 14px auto;
		position: relative;
		width: 100%;
		//z-index: 2;

		//span:nth-child(1) {
		//	@include random-color();
		//	//background: $primary-color;
		//}

		//span:nth-child(2) {
		//	background: $orange;
		//	animation: blinkHalf 0.2s linear alternate infinite;
		//}
	}

	li {
		background: #818993;
		display: inline-block;
		height: 30px;
		left: -10px;
		margin: 0 4px;
		position: relative;
		top: -39px;
		width: 14px;

		&:last-child {
			transition: 1000ms linear;
			background-color: $err-color;
			box-shadow: 0 0 15px $err-color;
			color: white;
			font-family: Courier New, Courier, monospace;
			font-size: 14px;
			left: initial;
			line-height: 30px;
			position: absolute;
			right: 4px;
			text-align: center;
			top: 10px;
			width: 30px;
			cursor: pointer;
		}
	}

	span {
		border-radius: 100%;
		display: block;
		height: 8px;
		left: 10px;
		margin: 0 0 15px 0;
		position: relative;
		top: 10px;
		width: 8px;
	}

	// Fade Animations
	//@for $div from 3 through 8 {
	//	div:nth-child(#{$div}) {
	//		li {
	//			@for $i from 1 through 6 {
	//				&:nth-child(#{$i}) {
	//					animation: fade #{random(2) + 0.5}s #{random(2)}s infinite alternate backwards;
	//				}
	//			}
	//			// Additional li for specific div
	//			@if $div == 5 {
	//				&:nth-child(7) {
	//					animation: fade 1.11s 1.11s infinite alternate backwards;
	//				}
	//			}
	//		}
	//	}
	//}

	@for $div from 3 through 8 {
		div:nth-child(#{$div}) {
			li {
				@for $i from 1 through 6 {
					&:nth-child(#{$i}) {
						animation: fade #{random(2) + 0.5}s #{random(2)}s infinite alternate backwards;
					}
				}
			}
			span {
				@for $i from 1 through 2 {
					&:nth-child(#{$i}) {
						//@include random-color();
						animation: blink #{random(2) + 0.2}s #{random(2)}s infinite alternate;
					}
				}
			}
		}
	}
}

// Grid Utility
.container,
.container-fluid {

	top: 0;
	left: 0;

	position: absolute;
	//z-index: -1;

	@media (min-width: 576px) {
		max-width: 540px;
	}

	@media (min-width: 768px) {
		max-width: 720px;
	}

	@media (min-width: 992px) {
		max-width: 960px;
	}

	@media (min-width: 1200px) {
		max-width: 1140px;
	}
}
</style>