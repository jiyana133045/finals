<script setup>
import Navbar from './components/navbar.vue'
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>