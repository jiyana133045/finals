<template>
  <section id="news-events" class="section content-section">
    <div class="content-wrapper">
      <h2>News, Events & Announcements</h2>
      <p class="subtitle">Stay updated with CPU College of Computer Studies</p>

      <div class="posts-grid">
        <article class="post-card">
          <span class="tag announcement">Announcement</span>
          <h3>Midterm Examination Schedule</h3>
          <p class="date">October 2026</p>
          <p class="description">Please refer to the departmental bulletin for the official Midterm examination schedule for all BSIT, BSCS, BSDMIA, and BLIS courses.</p>
        </article>

        <article class="post-card">
          <span class="tag event">Event</span>
          <h3>CCS Tech Week & Hackathon 2026</h3>
          <p class="date">November 15, 2026</p>
          <p class="description">Join us for a week of coding competitions, tech talks, industry workshops, and the annual CCS Hackathon!</p>
        </article>

        <article class="post-card">
          <span class="tag news">News</span>
          <h3>CPU CCS Students Win Regional IT Olympiad</h3>
          <p class="date">September 2026</p>
          <p class="description">Congratulations to our BSIT and BSCS delegates for taking 1st place in Web Development and System Administration!</p>
        </article>
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
  max-width: 900px;
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

.posts-grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-card {
  background: #ffffff;
  padding: 1.75rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px rgba(0,0,0,0.03);
  text-align: left;
}

.post-card h3 {
  font-size: 1.3rem;
  color: #0f172a;
  margin: 0.5rem 0;
}

.date {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 0.75rem;
}

.description {
  color: #334155;
  line-height: 1.6;
}

.tag {
  display: inline-block;
  padding: 0.25rem 0.6rem;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 4px;
  text-transform: uppercase;
}

.announcement { background-color: #fef3c7; color: #92400e; }
.event { background-color: #dbeafe; color: #1e40af; }
.news { background-color: #dcfce7; color: #166534; }
</style>