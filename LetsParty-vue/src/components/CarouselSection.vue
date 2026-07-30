<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const carouselImages = [
  '/Let%E2%80%99s%20party/IMG_8745.jpg',
  '/Let%E2%80%99s%20party/IMG_0575.JPG',
  '/Let%E2%80%99s%20party/IMG_3173.jpg',
  '/Let%E2%80%99s%20party/IMG_2629.jpg',
  '/Let%E2%80%99s%20party/IMG_2643.jpg',
  '/Let%E2%80%99s%20party/IMG_4402.jpg',
  '/Let%E2%80%99s%20party/IMG_0707.JPG',
  '/Let%E2%80%99s%20party/IMG_6025.JPG',
  '/Let%E2%80%99s%20party/IMG_6032.jpg',
  '/Let%E2%80%99s%20party/IMG_3690.jpg',
    '/Let%E2%80%99s%20party/IMG_3160.jpg',
  '/Let%E2%80%99s%20party/IMG_7621.jpg',
  '/MJ-Bday.jpeg',
  '/HeroPicture.jpg',
  '/shoot1.JPG',
  '/Let%E2%80%99s%20party/DSC_0218.jpeg',
  '/Let%E2%80%99s%20party/IMG_3432.jpg',
  '/Let%E2%80%99s%20party/IMG_3692.jpg',
  '/Let%E2%80%99s%20party/IMG_3983.jpg',
  '/Let%E2%80%99s%20party/IMG_3345.jpg',
]

const visibleSlides = 2
const currentSlide = ref(0)
const zoomIndex = ref<number | null>(null)
let carouselTimer: number | undefined

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselImages.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + carouselImages.length) % carouselImages.length
}

const goTo = (i: number) => {
  currentSlide.value = i % carouselImages.length
}

const openZoom = (i: number) => {
  zoomIndex.value = i
}

const closeZoom = () => {
  zoomIndex.value = null
}

const zoomImage = computed(() => {
  return zoomIndex.value !== null ? carouselImages[zoomIndex.value] : ''
})

const trackStyle = computed(() => ({
  transform: `translateX(-${currentSlide.value * (100 / carouselImages.length)}%)`,
  width: `${(carouselImages.length * 100) / visibleSlides}%`,
}))

onMounted(() => {
  carouselTimer = window.setInterval(nextSlide, 3500)
})

onBeforeUnmount(() => {
  if (carouselTimer) clearInterval(carouselTimer)
})
</script>

<template>
  <section class="carousel-section">
    <div class="carousel">
      <button class="carousel-btn carousel-btn--prev" @click="prevSlide" aria-label="Previous">‹</button>
      <div class="carousel-window">
        <div class="carousel-track" :style="trackStyle">
          <div v-for="(img, i) in carouselImages" :key="img" class="carousel-card">
            <img
              :src="img"
              :alt="'Slide ' + (i + 1)"
              class="carousel-image"
              @click="openZoom(i)"
            />
          </div>
        </div>
      </div>
      <button class="carousel-btn carousel-btn--next" @click="nextSlide" aria-label="Next">›</button>
    </div>
    <div class="carousel-indicators">
      <button
        v-for="(img, i) in carouselImages"
        :key="i"
        @click="goTo(i)"
        :class="{ active: i === currentSlide }"
        :aria-label="'Go to slide ' + (i + 1)"
      ></button>
    </div>

    <div v-if="zoomIndex !== null" class="zoom-overlay" @click.self="closeZoom">
      <div class="zoom-card">
        <button type="button" class="zoom-close" @click="closeZoom">×</button>
        <img :src="zoomImage" :alt="`Zoomed image ${zoomIndex + 1}`" class="zoom-image" />
 
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel-section {
  margin-top: 2rem;
}

.carousel {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.carousel-window {
  overflow: hidden;
  flex: 1;
  min-width: 0;
}

.carousel-track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  gap: 1rem;
  transition: transform 0.7s ease;
}

.carousel-card {
  width: 100%;
  display: grid;
  place-items: center;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #f4f0f600;
  border-radius: 1rem;
}

.carousel-image {
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 1rem;
  cursor: zoom-in;
}

.zoom-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  background: rgba(17, 13, 26, 0.78);
  padding: 20px;
}

.zoom-card {
  position: relative;
  width: min(96vw, 920px);
  max-height: 92vh;
  background: #fff;
  border-radius: 28px;
  padding: 24px;
  box-shadow: 0 50px 120px rgba(20, 18, 25, 0.2);
  display: grid;
  gap: 16px;
}

.zoom-close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: rgba(246, 194, 221, 0.18);
  color: #7a3a66;
  font-size: 1.5rem;
  cursor: pointer;
}

.zoom-image {
  width: 100%;
  max-height: 72vh;
  object-fit: contain;
  border-radius: 20px;
}

.zoom-caption {
  margin: 0;
  text-align: center;
  color: #5f5263;
  font-weight: 700;
}

.carousel-btn {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

.carousel-indicators button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #d7c2d8;
  cursor: pointer;
}

.carousel-indicators button.active {
  background: #7a3a66;
}

@media (max-width: 900px) {
  .carousel-section {
    display: none;
  }

  .carosel-indicators {
    display: none;
  }

  .carousel-btn {
    display: none;
  }
}
</style>
