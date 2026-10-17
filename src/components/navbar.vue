<template>
  <nav class="navbar">
    <div class="nav-brand">
      <RouterLink to="/#hero">
        <img src="@/assets/Logo.png" alt="CPU Logo" class="nav-logo" />
        <div class="brand-text">
          <span class="brand-title">CPU CCS</span>
          <span class="brand-subtitle">Computer Science Department</span>
        </div>
      </RouterLink>
    </div>
    <ul class="nav-links">
      <li><RouterLink to="/#hero">Home</RouterLink></li>
     <li><RouterLink to="/#about">About</RouterLink></li>
      <li><RouterLink to="/#programs">Programs Offered</RouterLink></li>
      <li><RouterLink to="/#faculty">Faculty & Staff</RouterLink></li>
      <li><RouterLink to="/#partnerships">Partnerships</RouterLink></li>
      <li><RouterLink to="/#news-events">News, Events, and Announcements</RouterLink></li>
      <li><RouterLink to="/#contact">Contact Us</RouterLink></li>
      
      
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
}
.nav-brand a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}
.nav-logo {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}
.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}
.brand-title {
  font-weight: bold;
  color: #004d40;
  font-size: 1rem;
}
.brand-subtitle {
  font-size: 0.75rem;
  color: #555;
  font-weight: 500;
}
.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
}
.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
.nav-links a:hover {
  color: #ffffff;
}
</style>