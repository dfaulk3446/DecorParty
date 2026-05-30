<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  eventDate: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  themeIdeas: '',
  eventType: 'inside',
  inspoFiles: null as FileList | null,
  areaFiles: null as FileList | null,
})

const inspoLabel = ref('No files selected')
const areaLabel = ref('No files selected')

const handleFileChange = (event: Event, target: 'inspo' | 'area') => {
  const input = event.target as HTMLInputElement
  const files = input.files
  if (target === 'inspo') {
    form.inspoFiles = files
    inspoLabel.value = files && files.length ? `${files.length} file(s) selected` : 'No files selected'
  } else {
    form.areaFiles = files
    areaLabel.value = files && files.length ? `${files.length} file(s) selected` : 'No files selected'
  }
}

const submitForm = (event: Event) => {
  event.preventDefault()
  alert('Thanks! Your message has been received. We will follow up shortly.')
}
</script>

<template>
  <section class="section section--light contact-page">
    <div class="section-header">
      <p class="eyebrow">Contact</p>
      <h2>Start planning your celebration.</h2>
      <p class="contact-intro">Share your event details and inspiration so we can design the perfect decor package.</p>
    </div>

    <form class="contact-form" @submit="submitForm">
      <div class="form-grid">
        <div class="input-group">
          <label for="fullName">Full name</label>
          <input id="fullName" type="text" v-model="form.fullName" placeholder="Your full name" required />
        </div>

        <div class="input-group">
          <label for="email">Email</label>
          <input id="email" type="email" v-model="form.email" placeholder="you@example.com" required />
        </div>

        <div class="input-group">
          <label for="phone">Phone number</label>
          <input id="phone" type="tel" v-model="form.phone" placeholder="(555) 123-4567" />
        </div>

        <div class="input-group">
          <label for="eventDate">Event date</label>
          <input id="eventDate" type="date" v-model="form.eventDate" required />
        </div>

        <div class="input-group full-width">
          <label for="street">Street address</label>
          <input id="street" type="text" v-model="form.street" placeholder="123 Party Lane" />
        </div>

        <div class="input-group">
          <label for="city">City</label>
          <input id="city" type="text" v-model="form.city" placeholder="Charlotte" />
        </div>

        <div class="input-group">
          <label for="state">State</label>
          <input id="state" type="text" v-model="form.state" placeholder="NC" />
        </div>

        <div class="input-group">
          <label for="zip">Zip code</label>
          <input id="zip" type="text" v-model="form.zip" placeholder="28202" />
        </div>

        <div class="input-group">
          <label for="eventType">Event location</label>
          <select id="eventType" v-model="form.eventType">
            <option value="inside">Inside</option>
            <option value="outside">Outside</option>
            <option value="both">Both</option>
          </select>
        </div>
      </div>

      <div class="input-group">
        <label for="themeIdeas">Theme or vision</label>
        <textarea id="themeIdeas" v-model="form.themeIdeas" placeholder="Tell us about your theme, colors, or party mood."></textarea>
      </div>

      <div class="upload-grid">
        <div class="upload-card">
          <label class="upload-label" for="inspoFiles">Upload inspiration images</label>
          <input id="inspoFiles" type="file" accept="image/*" multiple @change="event => handleFileChange(event, 'inspo')" />
          <p class="upload-hint">{{ inspoLabel }}</p>
        </div>

        <div class="upload-card">
          <label class="upload-label" for="areaFiles">Upload area photos</label>
          <input id="areaFiles" type="file" accept="image/*" multiple @change="event => handleFileChange(event, 'area')" />
          <p class="upload-hint">{{ areaLabel }}</p>
        </div>
      </div>
      <button type="submit" class="button primary">Send request</button>
    </form>
  </section>
</template>

<style scoped>
.contact-page {
  padding: 30px 28px;
}
.contact-intro {
  max-width: 760px;
  color: #5f5263;
  line-height: 1.8;
  margin-top: 16px;
}
.contact-form {
  display: grid;
  gap: 24px;
  margin-top: 32px;
}
.form-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.input-group {
  display: grid;
  gap: 10px;
}
.input-group.full-width {
  grid-column: 1 / -1;
}
label {
  font-size: 0.9rem;
  color: #5f5263;
  font-weight: 600;
}
input,
textarea,
select {
  width: 100%;
  padding: 15px 18px;
  border-radius: 20px;
  border: 1px solid rgba(206, 170, 191, 0.5);
  background: #fff;
  color: #24192d;
  font: inherit;
  outline: none;
}
input:focus,
textarea:focus,
select:focus {
  border-color: #d65fa8;
  box-shadow: 0 0 0 4px rgba(246, 194, 220, 0.25);
}
textarea {
  min-height: 150px;
  resize: vertical;
}
.upload-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.upload-card {
  border-radius: 24px;
  padding: 22px;
  background: linear-gradient(180deg, rgba(255, 248, 242, 0.96), #fff);
  border: 1px solid rgba(206, 170, 191, 0.35);
}
.upload-label {
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
  color: #6b4f74;
}
.upload-card input[type='file'] {
  border: 1px dashed rgba(214, 95, 168, 0.35);
  border-radius: 18px;
  padding: 18px 14px;
  background: #fffaf7;
  cursor: pointer;
}
.upload-hint {
  margin-top: 12px;
  color: #7e637d;
  font-size: 0.95rem;
}
/* event location now uses a compact select placed next to zip */
.button.primary {
  width: fit-content;
  padding: 16px 28px;
  border-radius: 999px;
  border: none;
  color: #fff;
  background: linear-gradient(135deg, #ff8ccf, #ffb06b);
  font-weight: 700;
  cursor: pointer;
}
@media (max-width: 840px) {
  .form-grid,
  .upload-grid {
    grid-template-columns: 1fr;
  }
}
</style>
