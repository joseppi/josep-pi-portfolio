<template>
  <section class="view-section">
    <h1>Projects</h1>
    <ul class="project-list">
      <!-- Trust No God Project Item -->
      <li class="project-item" @click="goToTrustNoGod" tabindex="0">
        <div class="project-bg trustnogod-img-bg">
        </div>
      </li>
      <!-- OmNom Pirates Project Item -->
      <li class="project-item" @click="goToOmNomPirates" tabindex="0">
        <div class="project-bg omnompirates-img-bg">
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goToTrustNoGod() {
  router.push('/trustnogod')
}
function goToOmNomPirates() {
  router.push('/omnompirates')
}
</script>

<style scoped>
.project-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}
@media (min-width: 700px) {
  .project-list {
    grid-template-columns: 1fr 1fr;
  }
}
.project-item {
  position: relative;
  margin-bottom: 2rem;
  padding: 0;
  border: none;
  border-radius: 1.5rem;
  overflow: hidden;
  cursor: pointer;
  min-height: 260px;
  background: none;
  transition: box-shadow 0.2s, transform 0.2s;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.22);
  width: 100%;
  aspect-ratio: 16/9;
  margin-bottom: 0;
}
.project-bg {
  width: 100%;
  height: 100%;
  min-height: 260px;
  background: url('/trustnogod-thumb.jpg') center/cover no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
}
.project-title {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  z-index: 2;
}
.project-hover-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s;
  z-index: 1;
}
.project-item:hover .project-hover-img,
.project-item:focus .project-hover-img {
  opacity: 1;
  pointer-events: auto;
}
.project-item:hover,
.project-item:focus {
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.32);
  transform: scale(1.035);
  z-index: 2;
}
/* Remove .trustnogod-gif-bg and add .trustnogod-img-bg with new image */
.trustnogod-img-bg {
  background-image: url('https://gyazo.com/13b9eeb9b4de69216fdcf62f0e9840a2/raw');
  background-size: cover;
  background-position: center;
}
/* Rename .placeholder1-bg to .omnompirates-img-bg and update image */
.omnompirates-img-bg {
  background-image: url('https://gyazo.com/1c94b7d1be6bc16ce3cd23acd63b0d9a/raw');
  background-size: cover;
  background-position: center;
}
.placeholder2-bg {
  background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80');
  background-size: cover;
  background-position: center;
}
</style> 