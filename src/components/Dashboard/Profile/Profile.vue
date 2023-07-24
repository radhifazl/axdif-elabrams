<script setup>
import ProfileData from '@/components/Dashboard/Profile/ProfileData.vue';
import CustomCard from '@/components/Card/CustomCard.vue';
import CardHeadline from '@/components/Card/CardHeadline.vue';
</script>

<template>
    <div class="dashboard-info profile">
        <CustomCard>
            <div class="banner"></div>

            <div class="profile-content pb-5 mb-5 mx-auto d-flex justify-center align-center flex-column text-center">
                <div class="profile-image">
                    <img src="../../../assets/images/dashboard/profile.png" alt="Logo" width="70"/>
                </div>
                <div class="profile-name">
                    <CardHeadline headline="John Doe"/>
                    <div class="workplace d-flex align-center" style="gap:0.5rem">
                        <img src="../../../assets/images/dashboard/icon - building-1 - 12px.svg" style="margin-top: -0.1rem;">
                        <span>Google Indonesia</span>
                    </div>
                </div>
            </div>

            <div class="profile-data">
                <ProfileData title="Employee ID" profileData="PT - GOO34"/>
                <ProfileData title="Position" profileData="Senior Front-End Developer"/>
                <ProfileData title="Join Date" profileData="23 Feb 2018"/>
                <ProfileData title="Years of Service" profileData="4 Years 5 Months 2 Days"/>
            </div>
        </CustomCard>
    </div>
</template>

<style>


.profile { margin-bottom: 1rem; height: 515px;}


.profile-content {
    border-bottom: 1px solid #809FB8;
    margin-top: 5rem;
}

.banner {
    content: "";
    position: absolute;
    width: 100%;
    height: 25%;
    background: url('../../../assets/images/dashboard/img-banner-profile.png');
    z-index: -1;
    top: 0;
    left: 0;
}
</style>