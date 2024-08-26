<template>
	<div class="d-flex" style="height: 100%; width: 100%; background: none">
		<v-row no-gutters>
			<v-col cols="3" class="ml-4 mt-4 lines" style="max-height: 30em">

				<v-row no-gutters class="fill-height">
					<v-col cols="12">

						<div class="custom-switch ml-14 mt-6" @click="is_checked = !is_checked">
							<div class="custom-switch-track">
								<div class="custom-switch-thumb" :class="{ 'is-checked': is_checked }"></div>
							</div>
							<input type="checkbox" v-model="is_checked" style="display: none;">
						</div>

						<v-btn class="textAI"><a :href="textAiChecked().href">{{ textAiChecked().name }}</a></v-btn>
					</v-col>

					<v-col cols="12" style="height: 75%">

						<img src="./imgs/kot.jpg" class="ml-10 mt-14" style="width: 17em; height: 14em"/>

						<svg
							:width="100"
							:height="100"
							viewBox="0 0 24 24"
							@click="is_rotated = !is_rotated" style="fill: currentColor;" :class="{'rotated': is_rotated}"
							type="mdi" class="arrows">
							<path :d="iconPath"/>
						</svg>

					</v-col>
				</v-row>
			</v-col>

<!--			<v-col cols="4" class="d-flex" style="position: relative; height: 36em">-->
<!--				<v-img src="./src/views/pages/imgs/fhkg.jpg" class="avatar mt-4"/>-->

<!--				<v-btn class="level-subscription" style="margin-top: 3%">lvl. {{ level }}</v-btn>-->

<!--				<v-btn class="level-subscription" style="position: absolute; top: 17%; right: 0">sub. {{ subscription }}</v-btn>-->

<!--				<v-img src="./src/views/pages/imgs/goblet.png" height="100" width="100" class="goblet" style="position: absolute; top: 35%; right: 34%"/>-->

<!--				<div class="achievements">{{ achievements_count }}</div>-->

<!--				<router-link to="/auth"  class="nick-class"><div> {{ nickname }} </div></router-link>-->

<!--				<router-link to="/jin-chat">-->
<!--					<v-btn class="d-flex align-center" style="display: inline-block; width: 28em; height: 7em; position: absolute; bottom: 0; left: 18%">-->

<!--						<v-img src="./src/views/pages/imgs/Djinneir.png" style="width: 20%; height: 70%; display: inline-block; position: absolute; left: 6%;"/>-->

<!--						<div style="font-size: 60px; letter-spacing: 10px; margin-left: 45%">DJIN</div>-->

<!--					</v-btn>-->
<!--				</router-link>-->

<!--			</v-col>-->

<!--			<v-col cols="4" class="d-flex" style="height: 60%; position: relative; top: 2%; transform: rotate(90deg)"><DiagramBar/></v-col>-->

<!--			<v-btn  style="background: #3A114D; display: inline-block; width: 50em; height: 23em; position: absolute; top: 65%; left: 1%">-->

<!--				<div style="display: inline-block; width: 100%; height: 100%; background-color: #3A114D; border-radius: 30px">-->

<!--					<div style="font-size: 35px; position: absolute; top: 7%; left: 50%"> HEADER HEADER	</div>-->
<!--					<div style="font-size: 20px; position: absolute; top: 40%; left: 30%">-->
<!--						<p> text text text text text text text </p>-->
<!--						<p> text text text text text text text </p>-->
<!--						<p> text text text text text text text </p>-->
<!--						<p> text text text text text text text </p>-->
<!--						<p> text text text text text text text </p></div>-->
<!--					<v-img src="./src/views/pages/imgs/di.jpg" style="width: 20%; height: 70%; display: inline-block; position: absolute; top: 11%; left: 4%; border: #DB00FF 1px solid"/>-->

<!--				</div>-->
<!--			</v-btn>-->


<!--			<v-col style="display: inline-block; width: 60em; height: 17em; position: absolute; top: 68%; left: 47%">-->
<!--				<router-link to="/anime">-->
<!--					<v-btn class="d-flex justify-center align-center" style="background: none; display:inline-block; position: absolute; top: 0; left: 0; width: 30%; height: 30%">-->
<!--						<div style="font-size: 40px"> ANIME</div>-->
<!--					</v-btn>-->
<!--				</router-link>-->

<!--				<v-btn class="d-flex justify-center align-center" style="background: none; display:inline-block; position: absolute; top: 0; left: 35%; width: 30%; height: 30%">-->
<!--					<div style="font-size: 40px"> MANGA</div>-->
<!--				</v-btn>-->

<!--				<v-btn class="d-flex justify-center align-center" style="background: none; display:inline-block; position: absolute; top: 0; right: 0; width: 30%; height: 30%">-->
<!--					<div style="font-size: 40px"> FILMS</div>-->
<!--				</v-btn>-->

<!--				<v-btn class="d-flex justify-center align-center" style="background: none; display:inline-block; position: absolute; bottom: 0; left: 0; width: 30%; height: 30%">-->
<!--					<div style="font-size: 40px"> SETTINGS</div>-->
<!--				</v-btn>-->

<!--				<v-btn class="d-flex justify-center align-center" style="background: none; display:inline-block; position: absolute; bottom: 0; left: 35%; width: 30%; height: 30%">-->
<!--					<div style="font-size: 25px"> COLLECTIVE VIEWING</div>-->
<!--				</v-btn>-->

<!--				<v-btn class="d-flex justify-center align-center" style="background: none; display:inline-block; position: absolute; bottom: 0; right: 0; width: 30%; height: 30%">-->
<!--					<div style="font-size: 40px"> MY CHOICE	</div>-->
<!--				</v-btn>-->

<!--			</v-col>-->

		</v-row>
	</div>
</template>


<script setup lang="ts">
import {onMounted, ref, computed} from "vue";
import {mdiAutorenew} from '@mdi/js';
import {UsersStore} from "../../store/user";
import DiagramBar from "./DiagramBar.vue";

//todo rename
const level                 = ref<number>(0)
const achievements_count    = ref<number>(0)
const subscription          = ref<string>('baza')
const nickname              = ref<string>('nickname')
const is_rotated            = ref<boolean>(false)
const is_checked            = ref<boolean>(false)

const user_store    = UsersStore()
const iconPath      = computed(() => mdiAutorenew)

const textAiChecked = () : {name : string, href : string} => {//todo
	if (!is_checked.value) {return {name : 'Your AI selection', href : "#"}}
	return {name : 'Our AI selection', href : "#"}
}

onMounted(() => {
	user_store.UserInfo()
		.then(() => {
			nickname.value  = user_store.User.name
			level.value     = user_store.User.level
		})
})

</script>

<!--//todo need refactor -->
<style scoped lang="scss">
 .fon {
	 background: none;
   //background: linear-gradient(167deg, #000000, 70%, #3A114D);
 }

 .lines {
	 background-image:
		 linear-gradient(#DB00FF, #DB00FF), linear-gradient(#DB00FF, #DB00FF),
		 linear-gradient(#DB00FF, #DB00FF), linear-gradient(#DB00FF, #DB00FF);
	 background-position: 0 0, 0 0, 100% 100%, 100% 100%;
	 background-size: 40% 3px, 3px 40%;
 }

.main-div {
	height: 27em;
	width: 30em;
	margin-left: 2%;
	margin-top: 3%;
	display: inline-flex;
}

.nick-class {
	font-size: 50px;
	text-align: center;
	width: 100%;
	position: absolute;
	bottom: 30%;
}

.nick-class:after {
	content: '';

	width: 50%;
	position: absolute;
	left: 25%;
	bottom: -25%;

	border-width: 0 0 3px;
	border-style: solid;
	border-color: #DB00FF;
}

.middle-line {
	height: 3px;
	width: 80%;
	position: absolute;
	bottom: 25%;
	left: 10%;
	background-color: #DB00FF
}

.avatar {
	width: 50%;
	height: 50%;
	//display: inline-block;
}

.level-subscription {
	background: none;
	border: #DB00FF 3px solid;
	border-radius: 30px;
	height: 2em;
	width: 10em;
	color: #dfdfdf;
	font-family: 'Inria Sans', sans-serif;
	font-size: 30px;
}

.achievements {
	height: fit-content;
	position: absolute;
	top: 40%;
	right: 23%;
	font-size: 30px;
}

//.right-line {
//	width: 10em;
//	height: 10em;
//
//	position: absolute;
//
//	border-bottom-right-radius: 30px;
//	border-bottom: #DB00FF 3px solid;
//	border-right: #DB00FF 3px solid;
//}
//
//.left-line {
//	width: 10em;
//	height: 10em;
//
//	position: absolute;
//
//	border-top-left-radius: 30px;
//	border-top: #DB00FF 3px solid;
//	border-left: #DB00FF 3px solid;
//}

.custom-switch {
	height: 5px;
	width: 5px;
	cursor: pointer;
	transform: rotate(90deg);
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
	font-size: 25px;
	margin-left: 3.5em;
}

.rotated {
	transform: rotate(180deg);
}

.arrows {
	cursor: pointer;
	transition: transform 0.3s ease-in-out;
	color: #DB00FF;
	width: 13%;
	height: 13%;
}

</style>

