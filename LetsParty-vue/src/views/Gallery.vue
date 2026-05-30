<script setup lang="ts">
const galleryImages = [
  '/MJ-Bday.jpeg',
  '/IMG_6043.jpg',
  '/IMG_6972.JPG',
  '/IMG_6981.JPG',
]
</script>

<template>
  <section class="section section--light">
    <div class="section-header">
      <p class="eyebrow">Gallery</p>
      <h2>Event styling in action</h2>
    </div>
    <div class="gallery-grid">
      <article v-for="img in galleryImages" :key="img" class="gallery-card">
        <img :src="img" :alt="'Gallery image ' + img" class="gallery-image" />
      </article>
    </div>
  </section>
</template>
