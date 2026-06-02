<template>
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
    >
      <img
        :src="category.image"
        :alt="category.title"
        class="category-image"
      />

      <h1 class="category-title">
        {{ category.title }}
      </h1>

      <p class="category-description">
        {{ category.description }}
      </p>

      <button class="category-btn">
        {{ category.buttonText }}
      </button>
    </div>
  </section>
  </section>
</template>

<script setup>
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
</script>

<style scoped>
.categories {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 4rem;
  max-width: auto;
  margin: 0 auto;
  padding: 4rem;
  background: #f5f5f500;
}
.category-card {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.category-image {
  width: 100%;
  aspect-ratio: 3 / 5;
  object-fit: cover;
  display: block;
}

.category-title {
  /* font-family: cursive; */
  font-weight: 400;
  margin: 1.5rem 0 1rem;
  line-height: 1;
}

.category-description {
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 2rem;
}

.category-btn {
  margin-top: auto;
  padding: 18px 24px;
  border: 1px solid #6d928f;
  background: transparent;
  color: #6d928f;
  letter-spacing: 3px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.category-btn:hover {
  background: #6d928f;
  color: white;
}

@media (max-width: 1200px) {
  .categories {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .categories {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 3rem;
  }

  .category-title {
    font-size: 2.25rem;
  }
}
</style>