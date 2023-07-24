<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import CardHeadline from '@/components/Card/CardHeadline.vue';
import CustomCard from '@/components/Card/CustomCard.vue';

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ['Complete', 'Overdue', 'Unscheduled'],
  datasets: [
    {
      backgroundColor: ['#0796E5', '#FF9800', '#D4DFE7'],
      data: [80, 40, 40]
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
    <div class="task-chart">
        <CustomCard>
            <CardHeadline headline="Overall Task Progress"/>
            <div class="pa-5">
                <Pie :data="data" :options="options"/>
            </div>
        </CustomCard>
    </div>
</template>

<style>
.task-chart {
    width: 50%;
    height: 400px;
}

@media screen and (max-width: 768px) {
    .task-chart {
        width: 100%;
    }
}
</style>