<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'



const categories = [
  {
    title: 'Balloon Styling',
    description: 'Custom arches, garlands, bouquets and balloon walls for every party theme.',
    image: 'IMG_6043.jpg',
    emoji: '🎈',
  },
  {
    title: 'Battchlorets',
    description: 'Fun and festive bachelor and bachelorette party decor packages that set the tone for celebration.',
    image: 'BrideBox.jpg',
    emoji: '✨',
  },
  {
    title: 'Backdrops',
    description: 'Photo-ready backdrops for birthdays, showers, weddings and corporate events.',
    image: 'gradParty.jpeg',
    emoji: '📸',
  },
  {
    title: 'Party Rentals',
    description: 'Love seats, neon signs, arches and event decor rentals that make a statement.',
    image: 'MJ-Bday.jpeg',
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

const carouselImages = [
  '/MJ-Bday.jpeg',
  '/IMG_6043.jpg',
  '/IMG_6972.JPG',
  '/IMG_6981.JPG',
]

const visibleSlides = 3
const currentSlide = ref(0)
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

<!--ToDo:
-- remove white boarder from carousel images
-- add hero image background
-- turn footer into long diff color border
-- Remove side cards
--Make nav dark pink
-- What we do make it like twist and shouts offerings 
-- Merge featured cat and what we do
  -->


  <section class="hero">
      <img src="/HeroPicture.jpg" alt="Graduation Party">
    <div class="hero-copy">
      <p class="eyebrow">Elevate your event</p>
      <h2>Lets Get Started.</h2>
      <p class="hero-text">From intimate birthday tables to large-scale balloon installations, we deliver custom decor that creates unforgettable memories.</p>
      <div class="hero-actions">
        <a class="button primary" href="/contact">Book Now!</a>
        <a class="button secondary" href="/gallery">View our Works</a>
      </div>
    </div>
    <!--div class="hero-panel">
      <div class="stat-card">
        <span class="stat-value">50+</span>
        <span class="stat-label">Events styled</span>
      </div>
      <div class="feature-card feature-card--alt">
        <p class="feature-title">Custom balloon arches</p>
        <p>Fun designs for every theme and budget.</p>
      </div>
      <div class="feature-card">
        <p class="feature-title">Custom Constructions</p>
        <p>Unique builds that fit your vision.</p>
      </div>
    </div-->
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
        
      </article>
    </div>
  </section>

  <section class="section section--cta">
    <div class="cta-panel">
      <h2>Ready to make your next event unforgettable?</h2>
      <p>Reach out for a free styling consultation and a custom decor plan designed for your celebration.</p>
    </div>
    <a class="button primary button--large" href="/contact">Book Now!</a>
  </section>

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
  </section>
</template>

<style scoped>
.hero img {
  width: max(100%, 400px);
  height: auto;
  display: block;
}
  </style>
