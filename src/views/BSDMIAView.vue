<script setup>
import Navbar from '@/components/navbar.vue'
</script>

<template>
  <div class="program-detail-page">
    <Navbar />
    <main class="content">
      <router-link to="/" class="back-btn">&larr; Back to Home</router-link>
      <header class="program-header">
        <h1>Bachelor of Science in Digital Media and Interactive Arts (BSDMIA)</h1>
        <p class="subtitle">College of Computer Studies</p>
      </header>
      <section class="overview">
        <h2>Program Overview</h2>
        <p>The BSDMIA program equips students with technical and creative skills in digital animation, game development, interactive media design, and multimedia production.</p>
      </section>
      <section class="specializations">
        <h2>Key Areas of Study</h2>
        <ul>
          <li>2D and 3D Digital Animation</li>
          <li>Game Design & Development</li>
          <li>Interactive User Experience (UI/UX) Design</li>
          <li>Digital Video & Audio Production</li>
        </ul>
      </section>
    </main>
  </div>
</template>

<style scoped>
.content { max-width: 900px; margin: 100px auto 40px; padding: 0 20px; }
.back-btn { display: inline-block; margin-bottom: 20px; color: #0056b3; text-decoration: none; font-weight: 500; }
.program-header h1 { font-size: 2rem; color: #1a1a1a; margin-bottom: 8px; }
.subtitle { color: #4a5568; font-size: 1.1rem; margin-bottom: 24px; }
section { margin-top: 30px; }
h2 { font-size: 1.4rem; margin-bottom: 12px; color: #1e293b; }
p, li { color: #334155; line-height: 1.7; }
ul { padding-left: 20px; }
</style>