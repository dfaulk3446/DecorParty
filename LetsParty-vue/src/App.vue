<script setup lang="ts">
const categories = [
  {
    title: 'Balloon Styling',
    description: 'Custom arches, garlands, bouquets and balloon walls for every party theme.',
    image: '/images/categories/balloon-styling.jpg',
    emoji: '🎈',
  },
  {
    title: 'Table Decor',
    description: 'Table runners, place settings and centerpieces designed for your celebration.',
    image: '/images/categories/table-decor.jpg',
    emoji: '✨',
  },
  {
    title: 'Backdrops',
    description: 'Photo-ready backdrops for birthdays, showers, weddings and corporate events.',
    image: '/images/categories/backdrops.jpg',
    emoji: '📸',
  },
  {
    title: 'Party Rentals',
    description: 'Love seats, neon signs, arches and event decor rentals that make a statement.',
    image: '/images/categories/party-rentals.jpg',
    emoji: '🎉',
  },
]

const highlights = [
  {
    title: 'Design Consultation',
    description: 'Personalized styling advice that brings your vision to life.',
  },
  {
    title: 'Fast Delivery',
    description: 'On-time setup and delivery so you can focus on celebrating.',
  },
  {
    title: 'Custom Themes',
    description: 'Tailored decor packages for birthdays, showers, weddings, and holidays.',
  },
]
</script>

<template>
  <div class="page-shell">
    <header class="site-header">
      <div class="brand">
        <span class="brand-mark">LP</span>
        <div>
          <p class="eyebrow">Let’s Party Decor</p>
          <h1>Party decor for celebrations that sparkle.</h1>
        </div>
      </div>
      <nav class="nav-links">
        <a href="#services">Services</a>
        <a href="#categories">Categories</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Elevate your event</p>
        <h2>Your one-stop party decor studio for bold colors, elegant florals, and playful styling.</h2>
        <p class="hero-text">From intimate birthday tables to large-scale balloon installations, we deliver custom decor that creates unforgettable memories.</p>
        <div class="hero-actions">
          <a class="button primary" href="#contact">Book a consult</a>
          <a class="button secondary" href="#categories">View categories</a>
        </div>
      </div>
      <div class="hero-panel">
        <div class="stat-card">
          <span class="stat-value">50+</span>
          <span class="stat-label">Events styled</span>
        </div>
        <div class="feature-card feature-card--alt">
          <p class="feature-title">Custom balloon arches</p>
          <p>Fresh designs for every theme and budget.</p>
        </div>
        <div class="feature-card">
          <p class="feature-title">Premium rental packages</p>
          <p>Neon signs, photo walls, lounge seating.</p>
        </div>
      </div>
    </section>

    <section id="services" class="section section--light">
      <div class="section-header">
        <p class="eyebrow">What we do</p>
        <h2>Stylish decor planning for all celebrations.</h2>
      </div>
      <div class="highlight-grid">
        <article v-for="item in highlights" :key="item.title" class="highlight-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <section id="categories" class="section">
      <div class="section-header">
        <p class="eyebrow">Featured categories</p>
        <h2>Decor packages that work together effortlessly.</h2>
      </div>
      <div class="category-grid">
        <article v-for="category in categories" :key="category.title" class="category-card">
          <span class="category-icon">
            <img
              v-if="category.image"
              :src="category.image"
              :alt="category.title"
              class="category-image"
            />
            <span v-else>{{ category.emoji }}</span>
          </span>
          <h3>{{ category.title }}</h3>
          <p>{{ category.description }}</p>
          <a href="#contact" class="card-link">Start planning</a>
        </article>
      </div>
    </section>

    <section class="section section--cta">
      <div class="cta-panel">
        <h2>Ready to make your next event unforgettable?</h2>
        <p>Reach out for a free styling consultation and a custom decor plan designed for your celebration.</p>
      </div>
      <a class="button primary button--large" href="#contact">Schedule a consult</a>
    </section>

    <footer id="contact" class="site-footer">
      <div>
        <p class="eyebrow">Contact</p>
        <h2>Let’s plan your celebration.</h2>
        <p>hello@letspartydecor.com | (555) 123-4567</p>
      </div>
      <p class="footer-note">Serving celebrations with custom decor, balloon art, and event rentals.</p>
    </footer>
  </div>
</template>

<style>
:root {
  color-scheme: only light;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #1d1d21;
  background: #fffaf7;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background: radial-gradient(circle at top left, rgba(255, 211, 170, 0.35), transparent 32%),
    radial-gradient(circle at bottom right, rgba(240, 141, 218, 0.2), transparent 28%);
}

.page-shell {
  max-width: 1180px;
  margin: 0 auto;
  padding: 28px 24px 48px;
}

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 8px 0 30px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 16px;
}

.brand-mark {
  width: 52px;
  height: 52px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg, #f57dce, #ffb86b);
}

.eyebrow {
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.78rem;
  color: #8f7d8d;
}

.site-header h1,
.section-header h2,
.hero-copy h2,
.cta-panel h2,
.site-footer h2 {
  margin: 0;
}

.site-header h1 {
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 700;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
}

.nav-links a {
  text-decoration: none;
  color: #6b4f74;
  font-weight: 600;
}

.hero {
  display: grid;
  gap: 32px;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  padding: 50px 0 36px;
}

.hero-copy h2 {
  font-size: clamp(2rem, 2.75vw, 3.5rem);
  line-height: 1.05;
  max-width: 680px;
  margin: 0;
}

.hero-text {
  max-width: 620px;
  margin: 24px 0 0;
  font-size: 1.05rem;
  line-height: 1.75;
  color: #5f5263;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 22px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button.primary {
  background: linear-gradient(135deg, #ff8ccf, #ffb06b);
  color: #fff;
  box-shadow: 0 16px 40px rgba(255, 142, 181, 0.16);
}

.button.secondary {
  background: rgba(255, 255, 255, 0.92);
  color: #6b4f74;
  border: 1px solid #e5d5dd;
}

.button--large {
  min-width: 220px;
}

.hero-panel {
  display: grid;
  gap: 18px;
}

.stat-card,
.feature-card {
  border-radius: 30px;
  padding: 28px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(18px);
  box-shadow: 0 24px 60px rgba(45, 23, 42, 0.08);
}

.stat-card {
  display: grid;
  gap: 6px;
}

.stat-value {
  font-size: 3rem;
  font-weight: 800;
  color: #d65fa8;
}

.stat-label {
  color: #6f6075;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.78rem;
}

.feature-card--alt {
  background: linear-gradient(135deg, rgba(255, 179, 192, 0.17), rgba(255, 255, 255, 0.9));
}

.feature-title {
  margin: 0 0 10px;
  font-size: 1.1rem;
  color: #2a1f31;
}

.section {
  padding: 46px 0;
}

.section--light {
  background: rgba(255, 248, 242, 0.8);
  border-radius: 36px;
  padding: 46px 32px;
}

.section-header {
  max-width: 700px;
  margin-bottom: 30px;
}

.section-header h2 {
  font-size: clamp(2rem, 2.2vw, 2.6rem);
  line-height: 1.1;
  color: #24192d;
}

.highlight-grid,
.category-grid {
  display: grid;
  gap: 18px;
}

.highlight-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.highlight-card {
  padding: 28px;
  border-radius: 28px;
  background: #fff;
  border: 1px solid rgba(147, 118, 148, 0.12);
}

.highlight-card h3 {
  margin: 0 0 12px;
  font-size: 1.2rem;
}

.highlight-card p {
  margin: 0;
  color: #6a556c;
  line-height: 1.8;
}

.category-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.category-card {
  padding: 28px;
  border-radius: 30px;
  background: linear-gradient(180deg, #ffffff 0%, #fff5f1 100%);
  border: 1px solid rgba(206, 170, 191, 0.24);
}

.category-icon {
  display: inline-flex;
  width: 54px;
  height: 54px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #fff0f5;
}

.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-card h3 {
  margin: 18px 0 12px;
  font-size: 1.25rem;
}

.category-card p {
  margin: 0 0 18px;
  color: #6f5b6f;
  line-height: 1.75;
}

.card-link {
  color: #d65fa8;
  font-weight: 700;
  text-decoration: none;
}

.section--cta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 44px 0 52px;
}

.cta-panel {
  max-width: 680px;
}

.cta-panel h2 {
  font-size: clamp(1.9rem, 2.2vw, 2.8rem);
  line-height: 1.08;
  margin: 0 0 14px;
}

.cta-panel p {
  margin: 0;
  color: #5f5263;
  line-height: 1.8;
}

.site-footer {
  margin-top: 50px;
  padding: 40px 28px;
  border-radius: 30px;
  background: #fff;
  display: grid;
  gap: 14px;
  box-shadow: 0 24px 60px rgba(63, 41, 73, 0.07);
}

.site-footer h2 {
  font-size: 1.9rem;
  margin: 0 0 12px;
}

.site-footer p {
  margin: 0;
  color: #5c4d5f;
  line-height: 1.75;
}

.footer-note {
  color: #95818f;
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .page-shell {
    padding: 22px 18px 36px;
  }
}

@media (max-width: 680px) {
  .site-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    width: 100%;
    justify-content: flex-start;
  }

  .section--light,
  .site-footer {
    padding: 28px 22px;
  }
}
</style>
