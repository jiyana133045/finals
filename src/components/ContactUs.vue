US<template>
  <section id="contact" class="section content-section">
    <h2>Contact Us</h2>
    <p class="section-desc">Have questions about CPU College of Computer Studies? Get in touch with us!</p>
    
    <div class="contact-container">
      <div class="contact-info">
        <div class="info-card">
          <h3>Office Location</h3>
          <p>College of Computer Studies Building</p>
          <p>Central Philippine University, Jaro, Iloilo City, 5000</p>
        </div>
        <div class="info-card">
          <h3>Email & Phone</h3>
          <p><strong>Email:</strong> ccs@cpu.edu.ph</p>
          <p><strong>Phone:</strong> (033) 329-1971 ext. 2132</p>
        </div>
      </div>

      <form class="contact-form" @submit.prevent>
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Your Name" required />
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="your.email@example.com" required />
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea rows="4" placeholder="How can we help you?" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
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
.section h2 {
  color: #1e293b;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.section-desc {
  color: #64748b;
  margin-bottom: 2rem;
}
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
}
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.info-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #eee;
  box-shadow: 0 4px 6px rgba(0,0,0,0.04);
  text-align: left;
}
.info-card h3 {
  color: #004d40;
  margin-bottom: 0.5rem;
}
.info-card p {
  color: #475569;
  margin: 0.25rem 0;
}
.contact-form {
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #eee;
  box-shadow: 0 4px 6px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-group label {
  font-weight: 500;
  color: #1e293b;
  font-size: 0.9rem;
}
.form-group input, .form-group textarea {
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-family: inherit;
}
.submit-btn {
  background-color: #004d40;
  color: #ffffff;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.submit-btn:hover {
  background-color: #00796b;
}
@media (max-width: 768px) {
  .contact-container { grid-template-columns: 1fr; }
}
</style>