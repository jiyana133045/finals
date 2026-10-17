<template>
  <section id="about" class="section content-section">
    <div class="content-wrapper">
      <h2>About the College</h2>
      <p class="subtitle">College of Computer Studies — Central Philippine University</p>

      <div class="about-container">
        <div class="info-card full-width">
          <h3>Institutional Background</h3>
          <p>
            The College of Computer Studies (CCS) at Central Philippine University is committed to delivering exemplary IT education, fostering innovation, research, and ethical technology practices. Through dynamic programs in Information Technology, Computer Science, Digital Media, and Library & Information Science, CCS equips students with globally competitive skills grounded in Christian values.
          </p>
        </div>

        <div class="grid-two">
          <div class="info-card">
            <h3>Our Vision</h3>
            <p>
              A University committed to Exemplary Christian Education for Life (EXCEL) and responsive to the needs of the total person and the world.
            </p>
          </div>

          <div class="info-card">
            <h3>Our Mission</h3>
            <p>
              The mission of Central Philippine University is to carry out a program of spiritual , intellectual, moral, physical, scientific, technological, and cultural training, and allied studies under influences which strengthen Christian faith, build up character and promote scholarship, research and community service.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  min-height: 100vh;
  padding: 6rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.content-section {
  background-color: #fdfdfd;
  border-bottom: 1px solid #eaeaea;
}

.content-wrapper {
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.section h2 {
  color: #1e293b;
  font-size: 2rem;
  margin-bottom: 0.25rem;
}

.subtitle {
  color: #004d40;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.about-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  background: #ffffff;
  padding: 1.75rem;
  border-radius: 8px;
  border: 1px solid #eee;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04);
  text-align: left;
}

.full-width {
  width: 100%;
  box-sizing: border-box;
}

.grid-two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.info-card h3 {
  color: #004d40;
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.info-card p {
  color: #334155;
  line-height: 1.7;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .grid-two {
    grid-template-columns: 1fr;
  }
}
</style>