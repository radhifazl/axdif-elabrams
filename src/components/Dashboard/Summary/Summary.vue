<script setup>
import CustomCard from '@/components/Card/CustomCard.vue';
import SummaryCard from '@/components/Dashboard/Summary/SummaryCard.vue';
import CardHeadline from '@/components/Card/CardHeadline.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import { ref } from 'vue';

const month = ref({
  month: new Date().getMonth(),
  year: new Date().getFullYear()
});

</script>

<template>
    <div class="dashboard-info summary">
        <CustomCard>
            <div class="header-card mb-4 w-100 d-flex align-center justify-space-between">
                        <CardHeadline headline="Summary"/>

                        <div class="date-period d-flex align-center">
                            <span class="mr-5">Periode</span>

                            <VueDatePicker v-model="month" month-picker></VueDatePicker>
                        </div>
            </div>
            <div class="summary-container">
                <div class="working-days">
                    <SummaryCard status="Working Day(s)" time="2 Hari"/>
                </div>
                <div class="working-hours">
                    <SummaryCard status="Working Hour(s)" time="13 hr 4 min"/>
                </div>
                <div class="exceptional-attendance">
                    <SummaryCard status="Exceptional Attendance" time="0 hari"/>
                </div>
                <div class="leave-taken">
                    <SummaryCard status="Leave Taken" time="0 hari"/>
                </div>
                <div class="overtime">
                    <SummaryCard status="Overtime" time="00 hr 00 min"/>
                </div>
                <div class="claim">
                    <SummaryCard status="Claim" time="IDR 0"/>
                </div>
            </div>
        </CustomCard>
    </div>
</template>

<style>
.summary { margin-bottom: 1rem; }
.summary-container {  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  grid-auto-flow: row;
  grid-template-areas:
    "working-days working-hours exceptional-attendance"
    "leave-taken overtime claim";
}

.working-days { grid-area: working-days; }

.working-hours { grid-area: working-hours; }

.exceptional-attendance { grid-area: exceptional-attendance; }

.leave-taken { grid-area: leave-taken; }

.overtime { grid-area: overtime; }

.claim { grid-area: claim; }

@media screen and (max-width: 768px) {
    .summary-container {  
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas:
            "working-days working-hours"
            "exceptional-attendance leave-taken"
            "overtime claim";
    }

}

.header-card {
    border-bottom: 2px solid #9ba4a881;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
}
</style>