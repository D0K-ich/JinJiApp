<template>
	<Bar :data="chartData" :options="options"/>
</template>

<script>
// DataPage.vue
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {ref} from "vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const genre_example_1  = ('sosat1')
const genre_example_2  = ('sosat2')
const genre_example_3  = ('sosat3')
const genre_example_4  = ('sosat4')

const color_example_1  = (20)
const color_example_2  = (40)
const color_example_3  = (60)
const color_example_4  = (80)

function genreColor(value) {
	switch(true) {
		case value <= 20 &&     value >= 0  : {return '#4f005a'}
		case value <= 40 &&     value > 20  : {return '#98277e'}
		case value <= 60 &&     value > 40  : {return '#9264b6'}
		case value <= 80 &&     value > 60  : {return '#DB00FF'}
		case value <= 100 &&    value > 80  : {return '#8400ff'}
	}
	return ''
}

const options1 = {
	responsive: true,
	maintainAspectRatio: true,
	aspectRatio: 1,
	plugins: {
		legend: {
			display: false,
			position: 'top'
		},
		datalabels: {
			color: '#DB00FF',
			anchor: 'end',
			align: 'top',
			font: {
				size: 19,
			},
		},
	},
	scales: {
		x: {
			display: true,
			ticks: {
				minRotation: 90,
				maxRotation: 90,
				autoSkip: false,
			},
			grid: {
				color: '#323232',
				borderDash: [5, 5],
			},
		},
		y: {
			display: true,
			ticks: {
				minRotation: 90,
				maxRotation: 90,
				autoSkip: false,
			},
			grid: {
				color: '#101010',
				borderDash: [5, 5],
			},
		},
	},
}

export default {
	name: 'DiagramBar',
	components: { Bar },
	computed: {
		chartData() { return {
			labels: [
				genre_example_1,
				genre_example_2,
				genre_example_3,
				genre_example_4,
			],
			datasets: [
				{
					label: false,
					backgroundColor: [
						genreColor(color_example_1),
						genreColor(color_example_2),
						genreColor(color_example_3),
						genreColor(color_example_4),
					],
					data: [color_example_1, color_example_2, color_example_3, color_example_4],
				}
			] }
		},
		options() {return {
			responsive: true,
			maintainAspectRatio: true,
			aspectRatio: 1,
			plugins: {
				legend: {
					display: false,
					position: 'top'
				},
				datalabels: {
					color: '#DB00FF',
					anchor: 'end',
					align: 'top',
					font: {
						size: 19,
					},
				},
			},
			scales: {
				x: {
					display: true,
					ticks: {
						minRotation: 90,
						maxRotation: 90,
						autoSkip: false,
					},
					grid: {
						color: '#323232',
						borderDash: [5, 5],
					},
				},
				y: {
					display: true,
					ticks: {
						minRotation: 90,
						maxRotation: 90,
						autoSkip: false,
					},
					grid: {
						color: '#101010',
						borderDash: [5, 5],
					},
				},
			},
		}}
}}
</script>

<style scoped lang="scss">

</style>