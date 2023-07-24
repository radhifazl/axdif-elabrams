<script setup>
import CustomCard from '@/components/Card/CustomCard.vue'
import CardHeadline from '@/components/Card/CardHeadline.vue'
import TotalTaskCard from './TotalTaskCard.vue'
import { ref } from 'vue'

import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement, Filler)

const chartData = ref({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Data One',
            borderColor: '#0796E5',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            radius: 0,
            fill: true,
            pointBorderColor: 'white',
            backgroundColor: '#0796E526',
            tension: 0.25,
            data: [50, 125, 75, 125, 175, 65, 50, 100, 140, 90, 175, 145]
          },{
            label: 'Data Two',
            borderColor: '#FF9800',
            pointBackgroundColor: 'white',
            pointBorderColor: 'white',
            borderWidth: 1,
            radius: 0,
            fill: true,
            backgroundColor: '#FF980026',
            tension: 0.25,
            data: [25, 50, 100, 75, 125, 100, 150, 70, 100, 145, 50, 100]
          }
        ]
})

const chartOptions = ref({
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true, // Start the Y-axis from 0
            // Customize the Y-axis ticks to be multiples of 50
            ticks: {
              stepSize: 50
            }
          }
        }
})
</script>

<template>
    <div class="task-completion-chart">
        <CustomCard>
            <CardHeadline headline="Overall Task Progress"/>
            <div class="line-chart pa-5">
                <Line class="w-100"
                    :data="chartData"
                    :options="chartOptions"
                />
            </div>
            <div class="total-task-wrapper d-flex align-center">
              <TotalTaskCard 
                title="Total Task Completed"
                total="2400"
                detail="Last Year : 2000 Task"
                changes="20%" status="increased"
              />
              <TotalTaskCard 
                title="Most Completed Tasks At"
                total="185"
                detail="May 2022"
              />
              <TotalTaskCard 
                title="Total Task Created"
                total="1600"
                detail="Last Year : 1800 Task"
                changes="20%" status="decreased"
              />
              <TotalTaskCard 
                title="Most Completed Tasks At"
                total="UI/UX Design"
                detail="240 Task"
              />
            </div>
        </CustomCard>
    </div>
</template>

<style>
.task-completion-chart {
    width: 50%;
    height: fit-content;
}

.line-chart {
  width: 100%;
  height: 65%;
}

@media screen and (max-width: 768px) {
    .task-completion-chart {
        width: 100%;
    }

    .total-task-wrapper {
      flex-wrap: wrap;
    }
}
</style>