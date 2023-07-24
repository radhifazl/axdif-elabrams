<script setup>
import CustomCard from '@/components/Card/CustomCard.vue';
import ClockCard from '@/components/Dashboard/Attendance/ClockCard.vue';
import CardHeadline from '@/components/Card/CardHeadline.vue';
</script>

<template>
    <div class="dashboard-info attendance">
        <CustomCard>
            <CardHeadline headline="Today's Attendance"/>
            <div class="d-flex align-center justify-space-between mt-3" style="gap: 1rem;">
                <ClockCard status="In" time="07:07"/>
                <ClockCard status="Out" time="18:00"/>
            </div>
        </CustomCard>
    </div>
</template>

<style>

</style>