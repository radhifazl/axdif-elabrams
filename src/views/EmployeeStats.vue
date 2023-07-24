<script setup>
import LeaveRecapTable from '@/components/Dashboard/LeaveRecapTable.vue';
import TaskChart from '@/components/Dashboard/Task/TaskChart.vue';
import TaskCompletionChart from '@/components/Dashboard/Task/TaskCompletionChart.vue';
import AttendanceChart from '@/components/Dashboard/Attendance/AttendanceChart.vue';
import SummaryChart from '@/components/Dashboard/Attendance/SummaryChart.vue';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import useIsMobile from '@/utils/useIsMobile';

const { isMobile } = useIsMobile()

import { ref } from 'vue';
const year = ref(new Date().getFullYear());
</script>

<template>
    <div class="employee-stats"
        :class="[isMobile ? 'mobile-stats' : '']"
    >
        <div class="stats-header justify-space-between mb-5"
            :class="[!isMobile ? 'flex' : '']"
        >
            <h1 :class="[isMobile ? 'text-h6 mb-5 font-weight-bold' : '']">Employee Stats</h1>

            <div class="stats-filter flex"
                :class="[isMobile ? 'align-start' : '']"
            >
                <div class="monthly-yearly flex" style="gap: 1rem;"
                    :class="[isMobile ? 'align-start' : '']"
                >
                    <span class="display-title">
                        Display Data in : 
                    </span>

                    <div class="my-buttons">
                        <button class="btn btn-primary">Monthly</button>
                        <button class="btn active">Yearly</button>
                    </div>
                </div>

                <div class="date-period d-flex align-center">
                    <span class="mr-lg-5 mr-2">Periode</span>

                    <VueDatePicker v-model="year" year-picker></VueDatePicker>
                </div>
            </div>
        </div>

        <div class="flex justify-space-between my-5" style="gap: 1rem;"
            :class="{'flex-column': isMobile}"
        >
            <SummaryChart />
            <AttendanceChart />
        </div>

        <div class="flex justify-space-between my-5" style="gap: 1rem;"
            :class="{'flex-column': isMobile}"
        >
            <TaskChart />
            <TaskCompletionChart />
        </div>
        <LeaveRecapTable />
    </div>
</template>

<style>
.flex {
    display: flex;
    align-items: center;
}

.employee-stats {
    padding: 7rem 1rem;
}

.stats-filter {
    gap: 2rem;
}

.my-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
}

.my-buttons button {
    border: 1px solid #D4D4D4;
    padding: 0.5rem 1rem;
}

.my-buttons button:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.my-buttons button:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.my-buttons button.active {
    background: #0796E5;
    color: #FFF;
    border: 1px solid #0796E5;
}

.mobile-stats .display-title, .mobile-stats .date-period span {
    font-size: 0.8rem;
}

.mobile-stats .my-buttons {
    font-size: 0.8rem;
}
</style>