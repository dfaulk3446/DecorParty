<script setup lang="ts">
import { ref } from 'vue'
import './styles/global.css';

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <div class="page-shell">
    <header class="site-header">

      <div class="brand">
        <span class="brand-mark">
          <img src="../public/LetsPartyLog.png" alt="Let's Party Decor logo" class="brand-mark__img" />
        </span>
        <div class = "brandToDrop">
          <p class="eyebrow">Let’s Party Decor</p>
          <h1>Party decor for celebrations that sparkle.</h1>
        </div>
      </div>
      <div class="nav-shell">
        <button class="nav-toggle" :class="{ 'nav-toggle--open': menuOpen }" type="button" @click="toggleMenu" :aria-expanded="menuOpen" aria-label="Toggle navigation">

        </button>
        <div class="nav-panel" :class="{ 'nav-panel--open': menuOpen }">
          <div class="nav-panel__content">
            <nav class="nav-links">
              <router-link to="/" @click="closeMenu">Home</router-link>
              <!--router-link to="/services" @click="closeMenu">Services</router-link-->
              <router-link to="/gallery" @click="closeMenu">Gallery</router-link>
              <router-link to="/contact" @click="closeMenu">Contact</router-link>
            </nav>
          </div>
        </div>
      </div>
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

<style src="./styles/global.css"></style>
