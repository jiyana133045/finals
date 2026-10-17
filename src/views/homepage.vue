<script setup>
import HeroSection from '@/components/Herosection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProgramsSection from '@/components/programsoffered.vue'
import FacultySection from '@/components/faculty-staff.vue'
import PartnershipsSection from '@/components/partnerhips-memberships.vue'
import NewsEventsView from '@/components/NewsEventsView.vue'
import ContactUs from '@/components/ContactUs.vue'
</script>

<template>
  <div class="homepage">
    <HeroSection />
    <AboutSection />
    <ProgramsSection />
    <FacultySection />
    <PartnershipsSection />
    <NewsEventsView /> 
    <ContactUs />
  </div>
</template>

<style scoped>
.homepage {
  padding-top: 60px;
}
</style>