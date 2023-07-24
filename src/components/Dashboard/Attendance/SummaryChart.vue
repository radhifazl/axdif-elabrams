<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import CustomCard from '@/components/Card/CustomCard.vue';
import CardHeadline from '@/components/Card/CardHeadline.vue';
import TotalWorkCard from './TotalWorkCard.vue';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    datasets: [
        {
            label: 'Data One',
            backgroundColor: '#0796E5',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
    },

}
</script>

<template>
    <div class="summary-chart">
        <CustomCard class="relative">
            <CardHeadline headline="Attendance Summary"/>
            <div class="pa-5 mt-5">
                <Bar :data="data" :options="options" />
            </div>

            <div class="total-work d-flex align-center ">
                <TotalWorkCard status="Total Working Days" total="237"/>
                <TotalWorkCard status="Actual Working Hours" total="2126 hr 14 min"/>
                <TotalWorkCard status="Total Working Hours" total="2930 hr 26 min"/>
                <TotalWorkCard status="Total Late Coming" total="0"/>
            </div>
        </CustomCard>
    </div>
</template>

<style>

.summary-chart {
    width: 50%;
    height: 400px;
}

.total-work {
    gap: 0.5rem;
}

@media screen and (max-width: 768px) {
    .summary-chart {
        width: 100%;
        height: 400px;
    }

    .total-work {
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}

@media screen and (min-width: 768px) {
    .total-work {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        padding: 1rem;
    }
}

</style>

  