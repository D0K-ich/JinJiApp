<template>
	<div class="main-container">
		<div class="sub-container">
			<div class="sky">
				<div class="stars"></div>
				<div class="stars2"></div>
				<div class="stars3"></div>
				<div class="comet"></div>
				<div class="comet2"></div>
				<div class="comet3"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
$starFieldWidth: 8096;
$starFieldHeight: 8096;
$starStartOffset: 600px;

$starOneScrollDuration: 100s;
$starTwoScrollDuration: 130s;
$starThreeScrollDuration: 180s;
$numStarOneStars: 1700;
$numStarTwoStars: 700;
$numStarThreeStars: 200;
$numComet: 10;


@function create-stars($n) {
	$stars: "#{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF";

	@for $i from 2 through $n {
		$stars: "#{$stars} , #{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF";
	}
	@return unquote($stars);
}

.main-container {
	position: fixed;
	top: 0;
	left: 0;
	min-width: 100%;
	height: 100vh;
	background: linear-gradient(to bottom, #201c2f 0%, #100751 100%);
	z-index: -1; // Задний слой
}
@mixin star-template($numStars, $starSize, $scrollSpeed) {
	z-index: 10;
	width: $starSize;
	height: $starSize;
	border-radius: 50%;
	background: transparent;
	box-shadow: create-stars($numStars);
	animation: animStar $scrollSpeed linear infinite;
	&:after {
		content: " ";
		top: -$starStartOffset;
		width: $starSize;
		height: $starSize;
		border-radius: 50%;
		position: absolute;
		background: transparent;
		box-shadow: create-stars($numStars);
	}
}

@mixin shooting-star-template($numStars, $starSize, $speed, $color) {
	z-index: 10;
	width: $starSize;
	height: $starSize + 80px;
	border-top-left-radius: 50%;
	border-top-right-radius: 50%;
	position: absolute;
	bottom: 0;
	right: 0;
	background: linear-gradient(
			to top,
			rgba(255, 255, 255, 0),
			$color
	);
	animation: animShootingStar $speed linear infinite;
}

@mixin shooting-star-template2($numStars, $starSize, $speed, $color) {
	z-index: 10;
	width: $starSize;
	height: $starSize + 80px;
	border-top-left-radius: 50%;
	border-top-right-radius: 50%;
	position: absolute;
	bottom: 0;
	right: 0;
	background: linear-gradient(
			to top,
			rgba(255, 255, 255, 0),
			$color
	);
	animation: animShootingStarW $speed linear infinite;
}

@mixin shooting-star-template3($numStars, $starSize, $speed, $color) {
	z-index: 10;
	width: $starSize;
	height: $starSize + 80px;
	border-top-left-radius: 50%;
	border-top-right-radius: 50%;
	position: absolute;
	bottom: 0;
	right: 0;
	background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0),
			$color
	);
	animation: animShootingStarZ $speed linear infinite;
}

.stars {
	@include star-template($numStarOneStars, 1px, $starOneScrollDuration);
}
.stars2 {
	@include star-template($numStarTwoStars, 2px, $starTwoScrollDuration);
}
.stars3 {
	@include star-template($numStarThreeStars, 3px, $starThreeScrollDuration);
}
.comet {
	@include shooting-star-template($numComet, 5px, #{random(5)+1}s, rgb(255, 255, 255));
}

.comet2 {
	@include shooting-star-template2($numComet, 5px, #{random(5)+1}s, rgb(188, 2, 240));
}

.comet3 {
	@include shooting-star-template3($numComet, 5px, #{random(5)+1}s, rgb(0, 80, 255));
}


@keyframes animStar {
	from {
		transform: translateY(0px);
	}
	to {
		transform: translateY(-#{$starFieldHeight}px)
		translateX(-#{$starFieldWidth}px);
	}
}

@keyframes animShootingStar {
	from {
		transform: translateY(0px) translateX(0px) rotate(-90deg);
		opacity: 1;
		height: 5px;
	}
	to {
		transform: translateY(-#{calc($starFieldHeight/10)}px)	translateX(-#{$starFieldWidth}px) rotate(-90deg);
		opacity: 1;
		height: 800px;
	}
}

@keyframes animShootingStarW {
	from {
		transform: translateY(0px) translateX(0px) rotate(-45deg);
		opacity: 1;
		height: 5px;
	}
	to {
		transform: translateX(-#{$starFieldWidth}px) translateY(-#{$starFieldHeight}px) rotate(-45deg);
		opacity: 1;
		height: 800px;
	}
}

@keyframes animShootingStarZ {
	from {
		transform: translateY(0px) translateX(-#{$starFieldWidth}px) rotate(-120deg);
		opacity: 1;
		height: 5px;
	}
	to {
		transform: translateX(#{$starFieldWidth}px)	translateY(-#{calc($starFieldHeight/6)}px) rotate(-120deg);
		opacity: 1;
		height: 800px;
	}
}
</style>