<script setup lang="ts">
const galleryLandscape = [
  '/MJ-Bday.jpeg',
  '/HeroPicture.jpg',
  '/shoot1.JPG',
  '/Let%E2%80%99s%20party/DSC_0218.jpeg',
  '/Let%E2%80%99s%20party/IMG_0707.JPG',
  '/Let%E2%80%99s%20party/IMG_6025.JPG',
]

const galleryPortrait = [
  '/IMG_6043.jpg',
  '/IMG_6972.JPG',
  '/IMG_6981.JPG',
  '/Let%E2%80%99s%20party/IMG_6029.jpg',
  '/Let%E2%80%99s%20party/IMG_6030.jpg',
  '/Let%E2%80%99s%20party/IMG_6032.jpg',
  '/Let%E2%80%99s%20party/IMG_6039.jpg',
  '/Let%E2%80%99s%20party/IMG_6024.jpg',
  '/Let%E2%80%99s%20party/IMG_3690.jpg',
  '/Let%E2%80%99s%20party/IMG_6042.jpg',
  '/Let%E2%80%99s%20party/IMG_6043.jpg',
  '/Let%E2%80%99s%20party/IMG_6048.jpg',
  '/Let%E2%80%99s%20party/IMG_6969.JPG',
  '/Let%E2%80%99s%20party/IMG_6972.JPG',
  '/Let%E2%80%99s%20party/IMG_6981.JPG',
  '/Let%E2%80%99s%20party/IMG_6982.JPG',
  '/Let%E2%80%99s%20party/IMG_7115.JPG',
  '/Let%E2%80%99s%20party/IMG_7621.jpg',
  '/Let%E2%80%99s%20party/IMG_7622.jpg',
  '/Let%E2%80%99s%20party/IMG_8745.jpg',
  '/Let%E2%80%99s%20party/IMG_8760.jpg',
  '/Let%E2%80%99s%20party/IMG_0562.JPG',
  '/Let%E2%80%99s%20party/IMG_0575.JPG',
  '/Let%E2%80%99s%20party/IMG_0582.JPG',
  '/Let%E2%80%99s%20party/IMG_2629.jpg',
  '/Let%E2%80%99s%20party/IMG_2643.jpg',
  '/Let%E2%80%99s%20party/IMG_3160.jpg',
  '/Let%E2%80%99s%20party/IMG_3173.jpg',
  '/Let%E2%80%99s%20party/IMG_3345.jpg',
  '/Let%E2%80%99s%20party/IMG_3424.jpg',
  '/Let%E2%80%99s%20party/IMG_3432.jpg',
  '/Let%E2%80%99s%20party/IMG_3692.jpg',
  '/Let%E2%80%99s%20party/IMG_3983.jpg',
  '/Let%E2%80%99s%20party/IMG_4402.jpg',
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

@media (max-width: 768px) {
  .gallery-grid,
  .gallery-grid-port {
    grid-template-columns: 1fr;
  }

  .gallery-grid,
  .gallery-grid-port,
  .gallery-card,
  .gallery-card-port {
    width: 100%;
  }

  .gallery-image,
  .gallery-image-port {
    max-height: 320px;
    width: 100%;
    height: auto;
  }

  .gallery-grid {
    gap: 1rem;
  }

  .gallery-grid-port {
    gap: 1rem;
  }
}
</style>
