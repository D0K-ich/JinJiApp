
<template>

  <Bar :data="data" :options="options"/>




</template>



<script setup lang="ts">


import {ref} from "vue";
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ChartDataLabels);

const janr  = ref<string>('sosat')

const dv    = ref<number>(20)
const sor   = ref<number>(40)
const hst   = ref<number>(60)
const vsmd  = ref<number>(80)
const sto   = ref<number>(100)

const janrColor = (sas :number):string  => {
  switch(true) {
    case sas <= 20 && sas >= 0 : {return '#4f005a';}
    case sas <= 40 && sas > 20 : {return '#98277e';}
    case sas <= 60 && sas > 40 : {return '#9264b6';}
    case sas <= 80 && sas > 60 : {return '#DB00FF';}
    case sas <= 100 && sas > 80: {return '#8400ff';}
  }

  return ''
}



const data = {
  labels: [
    janr.value,
    janr.value,
    janr.value,
    janr.value,
    janr.value,
  ],
  datasets: [
    {
      label: false,
      backgroundColor: [
        janrColor(vsmd.value),
        janrColor(sor.value),
        janrColor(dv.value),
        janrColor(hst.value),
        janrColor(sto.value),
      ],
      data: [vsmd.value, sor.value, dv.value, hst.value, sto.value],
    }
  ]
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
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