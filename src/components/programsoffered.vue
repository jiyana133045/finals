<template>
  <section id="programs" class="section content-section">
    <h2>Programs Offered</h2>
    <div class="grid">
      
      <router-link to="/program/bsit" class="card-link">
        <div class="card">
          <h3>BSIT</h3>
          <p>Bachelor of Science in Information Technology</p>
        </div>
      </router-link>

      <router-link to="/program/bscs" class="card-link">
        <div class="card">
          <h3>BSCS</h3>
          <p>Bachelor of Science in Computer Science</p>
        </div>
      </router-link>

      <router-link to="/program/bsdmia" class="card-link">
        <div class="card">
          <h3>BSDMIA</h3>
          <p>Bachelor of Science in Digital Media and Interactive Arts</p>
        </div>
      </router-link>

      <router-link to="/program/blis" class="card-link">
        <div class="card">
          <h3>BLIS</h3>
          <p>Bachelor of Library and Information Science</p>
        </div>
      </router-link>

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
.section h2 {
  color: #1e293b;
  font-size: 2rem;
  margin-bottom: 1rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
}
.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  text-align: left;
}
.card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid #eee;
  transition: transform 0.2s ease, border-color 0.2s ease;
  height: 100%;
  box-sizing: border-box;
}
.card-link:hover .card {
  transform: translateY(-4px);
  border-color: #0056b3;
}
.card h3 {
  color: #0f172a;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.card p {
  color: #475569;
  font-size: 1rem;
}
@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>