<template>
<!--  <Bar :data="data" :options="options"/>-->
	<DiagramBar/>

</template>

<script setup lang="ts">
import {ref} from "vue"
import ChartDataLabels from 'chartjs-plugin-datalabels'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import DiagramBar from "./DiagramBar.vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ChartDataLabels,)
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,)

const genre_example_1  = ref<string>('sosat1')
const genre_example_2  = ref<string>('sosat2')
const genre_example_3  = ref<string>('sosat3')
const genre_example_4  = ref<string>('sosat4')

const color_example_1  = ref<number>(20)
const color_example_2  = ref<number>(40)
const color_example_3  = ref<number>(60)
const color_example_4  = ref<number>(80)

const genreColor = (sas :number):string  => {
  switch(true) {
    case sas <= 20 && sas >= 0  : {return '#4f005a'}
    case sas <= 40 && sas > 20  : {return '#98277e'}
    case sas <= 60 && sas > 40  : {return '#9264b6'}
    case sas <= 80 && sas > 60  : {return '#DB00FF'}
    case sas <= 100 && sas > 80 : {return '#8400ff'}
  }
  return ''
}

const data = {
  labels: [
	genre_example_1.value,
    genre_example_2.value,
    genre_example_3.value,
    genre_example_4.value,
  ],
  datasets: [
    {
      label: false,
      backgroundColor: [
        genreColor(color_example_1.value),
        genreColor(color_example_2.value),
        genreColor(color_example_3.value),
        genreColor(color_example_4.value),
      ],
      data: [color_example_1.value, color_example_2.value, color_example_3.value, color_example_4.value],
    }
  ]
}

const options = {
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
</script>

<style scoped lang="scss">
</style>