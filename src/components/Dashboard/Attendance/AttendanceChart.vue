<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import CardHeadline from '@/components/Card/CardHeadline.vue';
import CustomCard from '@/components/Card/CustomCard.vue';

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ['Complete', 'Not Complete'],
  datasets: [
    {
      backgroundColor: ['#0796E5', '#E53935'],
      data: [50, 50]
    }
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
  rotation: 180
}
</script>

<template>
    <div class="attendance-chart">
        <CustomCard>
            <CardHeadline headline="Attendance Completeness"/>
            <div class="pa-5">
                <Pie :data="data" :options="options"/>
            </div>
        </CustomCard>
    </div>
</template>

<style>
.attendance-chart {
    width: 50%;
    height: fit-content;
}

@media screen and (max-width: 768px) {
    .attendance-chart {
        width: 100%;
    }
}
</style>