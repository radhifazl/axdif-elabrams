<template>
    <div class="h-25">
        <CustomCard>
            <CardHeadline headline="Leave Recap"/>
            <v-table
                fixed-header class="mt-3"
            >
            <thead class="table-header">
                <tr>
                <th class="text-left">
                    Leave Code
                </th>
                <th class="text-left">
                    Requested On
                </th>
                <th class="text-left">
                    Leave Type
                </th>
                <th class="text-left">
                    Start Date
                </th>
                <th class="text-left">
                    End Date
                </th>
                <th class="text-left">
                    Duration
                </th>
                <th class="text-left">
                    Day Type
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="recap in recaps"
                :key="recap.name"
                >
                    <td>{{ recap.code }}</td>
                    <td>{{ recap.requestDate }}</td>
                    <td>{{ recap.type }}</td>
                    <td>{{ recap.startDate }}</td>
                    <td>{{ recap.endDate }}</td>
                    <td>{{ recap.duration }}</td>
                    <td>{{ recap.dayType }}</td>
                </tr>
            </tbody>
            </v-table>
        </CustomCard>
    </div>
</template>

<script setup>
import CustomCard from '@/components/Card/CustomCard.vue';
import CardHeadline from '@/components/Card/CardHeadline.vue';
import {ref} from 'vue';
const recaps = ref([
    {
            code: 'LV-PTES-PT-CV10435-01-23-001',
            requestDate: 'Mon, 02 Jan 2023',
            type: 'Annual Leave',
            startDate: 'Tue, 03 Jan 2023',
            endDate: 'Tue, 03 Jan 2023',
            duration: '1 Day',
            dayType: 'Full Day',
    },
    {
            code: 'LV-PTES-PT-CV10435-01-23-001',
            requestDate: 'Mon, 02 Jan 2023',
            type: 'Annual Leave',
            startDate: 'Tue, 03 Jan 2023',
            endDate: 'Tue, 03 Jan 2023',
            duration: '1 Day',
            dayType: 'Full Day',
    },
    {
            code: 'LV-PTES-PT-CV10435-01-23-001',
            requestDate: 'Mon, 02 Jan 2023',
            type: 'Annual Leave',
            startDate: 'Tue, 03 Jan 2023',
            endDate: 'Tue, 03 Jan 2023',
            duration: '1 Day',
            dayType: 'Full Day',
    },
    {
            code: 'LV-PTES-PT-CV10435-01-23-001',
            requestDate: 'Mon, 02 Jan 2023',
            type: 'Annual Leave',
            startDate: 'Tue, 03 Jan 2023',
            endDate: 'Tue, 03 Jan 2023',
            duration: '1 Day',
            dayType: 'Full Day',
    },
    {
            code: 'LV-PTES-PT-CV10435-01-23-001',
            requestDate: 'Mon, 02 Jan 2023',
            type: 'Annual Leave',
            startDate: 'Tue, 03 Jan 2023',
            endDate: 'Tue, 03 Jan 2023',
            duration: '1 Day',
            dayType: 'Full Day',
    },
    {
            code: 'LV-PTES-PT-CV10435-01-23-001',
            requestDate: 'Mon, 02 Jan 2023',
            type: 'Annual Leave',
            startDate: 'Tue, 03 Jan 2023',
            endDate: 'Tue, 03 Jan 2023',
            duration: '1 Day',
            dayType: 'Full Day',
    },
    {
            code: 'LV-PTES-PT-CV10435-01-23-001',
            requestDate: 'Mon, 02 Jan 2023',
            type: 'Annual Leave',
            startDate: 'Tue, 03 Jan 2023',
            endDate: 'Tue, 03 Jan 2023',
            duration: '1 Day',
            dayType: 'Full Day',
    },
    {
            code: 'LV-PTES-PT-CV10435-01-23-001',
            requestDate: 'Mon, 02 Jan 2023',
            type: 'Annual Leave',
            startDate: 'Tue, 03 Jan 2023',
            endDate: 'Tue, 03 Jan 2023',
            duration: '1 Day',
            dayType: 'Full Day',
    },
])
</script>


<style>
.table-header tr th {
    background: #EAEAEA !important;
    color: #212121 !important;
    font-weight: bold !important;
    font-size: 0.7rem;
}
</style>