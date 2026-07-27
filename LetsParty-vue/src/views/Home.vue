<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'



const categories = [
  {
    title: 'Custom Arches',
    description: 'Custom arches, garlands, bouquets and balloon walls for every party theme.',
    image: 'IMG_6043.jpg',
    buttonText: 'Shop now',
  },
  {
    title: 'Custom Backdrops',
    description: 'Photo-ready backdrops for birthdays, showers, weddings and corporate events.',
    image: 'BrideBox.jpg',
    buttonText: 'Shop now',
  },
  {
    title: 'Custom Columns',
    description: 'Photo-ready columns for birthdays, showers, weddings and corporate events.',
    image: 'gradParty.jpeg',
    buttonText: 'Shop now',
  },
  {
    title: 'Grab-N-Go',
    description: 'Love seats, neon signs, arches and event decor rentals that make a statement.',
    image: 'MJ-Bday.jpeg',
    buttonText: 'Shop now',
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
    -- Custom Arches
    -- Custom Backdrops 
    -- cols
    --grab n go
    --
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

  <!--section id="services" class="section section--light">
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
  </section-->

  <section id="categories" class="section">
    <div class="section-header">
      <p class="eyebrow">Featured categories</p>
      <h2>Decor packages that work together effortlessly.</h2>
    </div>
    <section class="categories">
      <div
        v-for="category in categories"
        :key="category.title"
        class="category-card"
        :style="{ backgroundImage: `url(${category.image})` }"
      >
        <div class="category-copy">
          <h1 class="category-title">{{ category.title }}</h1>
          <p class="category-description">{{ category.description }}</p>
          <button class="category-btn" href="/contact">{{ category.buttonText }}</button>
        </div>
      </div>
    </section>
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
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 32px;
  align-items: center;
  padding: 50px 30px 36px;
}

.hero img {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 1.5rem;
}

.hero-copy {
  max-width: 620px;
}

.media-section {
  display: grid;
  gap: 1.25rem;
  padding: 1rem 0 0;
}

.media-copy {
  max-width: 720px;
}

.media-copy h2 {
  margin: 0 0 0.75rem;
  font-size: clamp(1.6rem, 2.2vw, 2.2rem);
  line-height: 1.15;
  color: #24192d;
}

.media-copy p {
  margin: 0;
  color: #5f5263;
  line-height: 1.7;
}

.media-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.8fr;
  gap: 1rem;
}

.media-card {
  border-radius: 1.25rem;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(45, 23, 42, 0.08);
}

.media-card--large {
  grid-row: span 2;
}

.media-card img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 220px;
  object-fit: cover;
}

.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.category-card {
  position: relative;
  min-height: 45rem;
  border-radius: 1.25rem;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
}

.category-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0) 60%, rgb(255, 255, 255) 85%);
  
}

.category-copy {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0);
}

.category-title {
  margin: 0 0 0.5rem;
  font-size: 1.35rem;
}

.category-description {
  margin: 0 1rem 1rem 0;
  color: #333;
  line-height: 1.5;
}

.category-btn {
  border: 1px solid #333;
  border-radius: 999px;
  padding: 0.75rem 1.25rem;
  background: #ff8ccf;
  color: #111;
  cursor: pointer;
}

.category-btn:hover {
   background: linear-gradient(135deg, #ff8ccf, #ffb06b); 
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 24px 0 24px;
  }

  .media-grid {
    grid-template-columns: 1fr 1fr;
  }

  .media-card--large {
    grid-column: span 2;
    grid-row: span 1;
  }
}

@media (max-width: 680px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 18px 0 24px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .media-grid {
    grid-template-columns: 1fr;
  }

  .media-card--large {
    grid-column: auto;
    grid-row: auto;
  }

  .categories {
    grid-template-columns: 1fr;
  }

  .category-card {
    min-height: 28rem;
  }
}
</style>
