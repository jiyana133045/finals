<template>
  <section id="hero" class="hero-wrapper">
    <div class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>College of Computer Studies</h1>
        <p>Shaping future innovators, developers, and tech leaders at Central Philippine University.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-wrapper {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: #ffff; 
  padding: 0; /* Removed padding so it touches screen edges */
  box-sizing: border-box; 
}

.hero {
  position: relative;
  width: 100%;
  min-height: 100vh; /* Fills the entire vertical screen height */
  background-image: url('@/assets/warrior.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 0 2rem;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-content p {
  font-size: 1.25rem;
  color: #E4A945;
  color: #E4A945;
  font-family: "Roboto", Sans-serif;
  font-weight: 900;
  line-height: 1.6;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.2rem;
  }
  .hero-content p {
    font-size: 1rem;
  }
}
</style>