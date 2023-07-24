<template>
    <v-app-bar class="dashboard-bar px-5 py-3 d-flex justify-space-between align-center">
        <div class="left-side d-flex align-center w-100"
            :class="[isMobile ? 'justify-space-between' : '']"
        >
            <div class="bar-icon pr-8">
                <img src="../../assets/images/dashboard/axdif-icon-square-white.svg" alt="Axdif" width="50">
            </div>

            <ul class="bar-list ml-8"
                :class="[
                    !isMobile ? ' d-flex align-center justify-space-between' : ''
                ]"
            >
                <router-link v-for="(link, i) in links" :key="i"
                    :to="link.path"
                    class="bar-link font-weight-bold pa-2 px-4"
                    active-class="bar-link--active" v-if="isDesktop"
                >
                    {{ link.name }}
                    <v-icon v-if="link.icon" class="ml-2">{{ link.icon }}</v-icon>
                </router-link>
                <v-menu v-else>
                    <template v-slot:activator="{ props }">
                        <v-btn
                            v-bind="props"
                            class="text-none font-weight-bold bar-link"
                        >
                            Overview <v-icon class="ml-2">{{ 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="(link, i) in links"
                            :key="i"
                            :value="i"
                        >
                            <v-list-item-title>
                                <router-link  
                                    :to="link.path"
                                    class="bar-link font-weight-bold pa-2 px-4"
                                    active-class="bar-link--active"
                                >
                                    {{ link.name }}
                                </router-link>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </ul>

            <img src="../../assets/images/dashboard/profile.png" alt="Profile" width="40" v-if="isMobile">
        </div>
        <div class="right-side">
            <img src="../../assets/images/dashboard/profile.png" alt="Profile" width="40" v-if="!isMobile">
        </div>
    </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';
import useIsMobile from '@/utils/useIsMobile';
import useIsDesktop from '@/utils/useIsDesktop';

const { isMobile } = useIsMobile()
const { isDesktop } = useIsDesktop()

const links = ref([
    {
        name: 'Overview',
        path: '/dashboard',
    },
    {
        name: 'Employee Stats',
        path: '/dashboard/employee-stats',
    },
    {
        name: 'Submission',
        path: '/dashboard/submission',
        icon: 'mdi-chevron-down',
    },
    {
        name: 'Task',
        path: '/dashboard/task',
    },
    {
        name: 'Chat',
        path: '/dashboard/chat',
    },
    {
        name: 'Payroll',
        path: '/dashboard/payroll',
    },
]);
</script>

<style>
.dashboard-bar {
    background-color: red;
}

.bar-icon {
    border-right: 1px solid #B6BBD0;
}

.bar-list {
    gap: 1rem;
}

.bar-link {
    color: #888FB0;
    transition: all 0.3s ease-in-out;
}

.bar-link:hover, .bar-link--active {
    color: #000037;
    background: #F4F6FF;
    border-radius: 6px;
}
</style>
  