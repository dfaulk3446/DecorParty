<script setup lang="ts">
const galleryLandscape = [
  '/MJ-Bday.jpeg',
  '/HeroPicture.jpg',
  '/shoot1.JPG',
]

const galleryPortrait = [
  '/IMG_6043.jpg',
  '/IMG_6972.JPG',
  '/IMG_6981.JPG',
]
</script>

<template>

<!--ToDo:
-- remove rounded boarder from gallery images
-- no pictures with people's faces
-->

  <section class="section section--light">
    <div class="section-header">
      <p class="eyebrow">Gallery</p>
      <h2>Event styling in action</h2>
    </div>
    <div class="gallery-grid">
      <article v-for="img in galleryLandscape" :key="img" class="gallery-card">
        <img :src="img" :alt="'Gallery image ' + img" class="gallery-image" />
      </article>
    </div>
      <div class="gallery-grid-port">
      <article v-for="img in galleryPortrait" :key="img" class="gallery-card-port">
        <img :src="img" :alt="'Gallery image ' + img" class="gallery-image-port" />
      </article>
    </div>
  </section>
</template>

<style scoped>


.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(320px, 1fr));
  gap: 1.25rem;
  align-items: start;
  margin-bottom: 30px;
}

.gallery-card {
  background: transparent;
  padding: 0;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
}
.gallery-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  max-height: 450px;
}




.gallery-grid-port {
  display: grid;
  grid-template-columns: repeat(3, minmax(320px, 1fr));
  gap: 1.25rem;
  align-items: start;
}

.gallery-card-port {
  background: transparent;
  padding: 0;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
}

.gallery-image-port {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  max-height: 520px;
}
</style>
