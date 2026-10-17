<template>
  <section id="partnerships" class="section content-section">
    <h2>Partnerships and Memberships</h2>
    <div class="grid">
      <div class="card partner-card">Cisco Networking Academy</div>
      <div class="card partner-card">Oracle Academy</div>
      <div class="card partner-card">Microsoft Learn</div>
    </div>
  </section>
</template>

<style scoped>
.section {
  min-height: 100vh;
  padding: 6rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
}

.content-section {
  background-color: #fdfdfd;
  border-bottom: 1px solid #eaeaea;
}

/* Added dark text color for the section title */
.section h2 {
  color: #1e293b;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
  margin-top: 2rem;
}

.card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid #eee;
}

.partner-card {
  font-weight: bold;
  color: #004d40;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>