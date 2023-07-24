<script setup>
import Summary from '@/components/Dashboard/Summary/Summary.vue';
import AllTask from '@/components/Dashboard/Task/AllTask.vue';
import Profile from '@/components/Dashboard/Profile/Profile.vue';
import Attendance from '@/components/Dashboard/Attendance/Attendance.vue';
import useIsMobile from '@/utils/useIsMobile';

const { isMobile } = useIsMobile()
</script>

<template>
    <div class="dashboard d-flex align-start justify-space-between"
        :class="{'flex-column-reverse align-center justify-center': isMobile}"
    >
        <div class="left" :class="{'w-100': isMobile}">
            <Summary />
            <AllTask />
        </div>

        <div class="right" :class="{'w-100': isMobile}">
            <Profile />
            <Attendance />
        </div>
    </div>
</template>

<style>
.dashboard {
    background-color: #F9F9F9;
    gap: 1rem;
}

.dashboard .left {
    width: 70%;
}

.dashboard .right {
    width: 30%;
}

.header-card {
    border-bottom: 2px solid #9ba4a881;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
}


@media screen and (max-width: 768px) {
    .dashboard {
        grid-template-columns: 1fr; 
        grid-template-rows: 1fr 1fr 1fr 1fr; 
        padding: 1rem;
    }
    .profile { grid-area: profile; }
    .summary { grid-area: summary; }
    .attendance { grid-area: attendance; }
    .task { grid-area: task; }
}

@media screen and (min-width: 768px) {
    .dashboard {
        padding: 7rem 1.5rem;
    }
}
</style>