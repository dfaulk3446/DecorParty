<script setup lang="ts">
import { reactive, ref } from 'vue'
</script>

<template>
  <div class="page-shell">
    <header class="site-header">

      <div class="brand">
        <span class="brand-mark">
          <img src="../public/LetsPartyLog.png" alt="Let's Party Decor logo" class="brand-mark__img" />
        </span>
        <div>
          <p class="eyebrow">Let’s Party Decor</p>
          <h1>Party decor for celebrations that sparkle.</h1>
        </div>
      </div>
      <nav class="nav-links">
        <router-link to="/home">Home</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/gallery">Gallery</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
      <div>
      </div>
    </header>

    <router-view />

    <footer id="contact" class="site-footer">
      <div>
        <h1>Let's Party Decor</h1>
        <p class="eyebrow">Find Us Online</p>
        <div class="social-links">
          <a href="https://www.instagram.com/" class="social-link" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke="currentColor" stroke-width="1.8" fill="none"/>
              <path d="M16.5 7.5h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M7.5 7.5h9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              <circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.8" fill="none"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/" class="social-link" aria-label="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M15 8.5h2.5L17 5h-2.5c-2 0-3 1-3 3v1.5H9v2.5h2.5V19h3v-5h2.5l.5-2.5H14.5V9.5c0-.4.2-1 .8-1z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/" class="social-link" aria-label="TikTok">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M17.5 6.75a4.75 4.75 0 0 1-4.75-4.75v11.5a4.75 4.75 0 1 1-4.75-4.75" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>
              <path d="M15 6.75h3.5v3.5" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>
            </svg>
          </a>
          <a href="https://www.pinterest.com/" class="social-link" aria-label="Pinterest">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="8.25" stroke="currentColor" stroke-width="1.8" fill="none"/>
              <path d="M11.7 15.7c-.5 1.4-.9 2.9-1.7 4.2-.3-.6-.5-1.4-.5-2.2 0-1 .2-1.9.7-2.8.8-1.5 1.7-3 2.2-4.8.3-1 .4-2 .3-3-1.5.2-2.9 1.1-3.6 2.6-.7 1.4-.5 3.2.2 4.7.3.7.8 1.4.7 2.1-.7.1-1.3-.4-1.4-1.2-.2-1.1.2-2.2.6-3.2.5-1 1.2-1.9 2.1-2.6 1.4-1 3.5-1.2 5.1-.5.7.3 1.2 1 1.1 1.8-.1 1.5-1.7 2.5-3.2 2.3-.7-.1-1.4-.5-1.8-1.1-.2.8-.5 1.5-.7 2.2z" fill="currentColor"/>
            </svg>
          </a>
        </div>
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
  background: #ffdfb2;
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
  max-width: 12000px;
  margin: 0, 0;
  padding: 0px 20px 10px;
}

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 8px 0 15px;
  background: rgba(255, 120, 217, 0.418);
  margin-bottom: 30px;
  margin-top: 10px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 16px;
}

.brand-mark {
  width: 150px;
  height: 120px;
  border-radius: 22px;
  display: grid;
  place-items: center;
  font-weight: 800;
  color: #fff;
  /*background: linear-gradient(135deg, #f57dce, #ffb86b);*/
}

.brand-mark__img {
  width: 84%;
  height: 84%;
}
.carousel {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
}
.carousel-window {
  overflow: hidden;
  width: 120%;
  border-radius: 10px;
}
.carousel-track {
  display: flex;
  transition: transform 0.45s ease;
  will-change: transform;
}
.carousel-card {
  flex: 0 0 calc(100% / 3);
  box-sizing: border-box;
  padding: 0 2px;
}
.carousel-card:last-child {
  padding-right: 0;
}
.carousel-image {
  width: 120%;
  height: 120%;
  display: block;
  object-fit: contain;
  border-radius:3px;
  aspect-ratio: 1.91/1;
}
.carousel-btn {
  background: rgba(255, 255, 255, 0.92);
  border: none;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: 0 12px 28px rgba(45, 23, 42, 0.08);
}
.carousel-indicators {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 12px;
}
.carousel-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.6);
  border: none;
}
.carousel-indicators button.active {
  background: #d65fa8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
}

.gallery-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
.gallery-card {
  border-radius: 24px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 12px 30px rgba(45, 23, 42, 0.08);
}
.gallery-card img {
  width: 100%;
  display: block;
  object-fit: cover;
}

@media (max-width: 900px) {
  .carousel {
    flex-direction: column;
  }

  .carousel-btn {
    width: 38px;
    height: 38px;
  }
}

@media (max-width: 680px) {
  .carousel {
    flex-direction: column;
  }

  .carousel-btn {
    width: 38px;
    height: 38px;
  }
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
  color: #ffffff;
  font-weight: 800;
}

.hero {
  display: grid;
  gap: 32px;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  padding: 50px 30px 36px;
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
  justify-content: center;
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

.social-links {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 14px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.92);
  color: #d65fa8;
  box-shadow: 0 14px 30px rgba(63, 41, 73, 0.08);
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.social-link:hover {
  transform: translateY(-2px);
  background-color: #fff;
}

.social-link svg {
  width: 20px;
  height: 20px;
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
