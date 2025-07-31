<template>
  <section class="view-section">
    <div class="back-arrow" @click="goBack">
      <svg class="svg-arrow" width="3rem" height="3rem" viewBox="0 0 48 48" fill="none">
        <path d="M30 36L18 24L30 12" stroke="#FF8C00" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="omnompirates-header-content">
      <h1 class="omnompirates-title">OmNom Pirates</h1>
      <h2 class="omnompirates-subtitle center">Auto-Battler</h2>
    </div>
    <div class="trailer-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/DX_WiFLyFMI?autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <h2 class="omnompirates-subtitle">What I Have Done?</h2>
    <div class="omnompirates-grid">
      <div class="omnompirates-row">
        <div class="omnompirates-image tutorial-system-image"></div>
        <div class="omnompirates-task">
          <h3>Tutorial System</h3>
          <p>Created, refactored and maintained the <b>tutorial system</b> for the game. I also created the tutorial with the help of the game designer.</p>
        </div>
      </div>
      <div class="omnompirates-row">
        <div class="omnompirates-task left">
          <h3>UI Implementation</h3>
          <p>I worked with a designer to implement some of the game's <b>UI</b> and its <b>animations.</b></p>
        </div>
        <div class="omnompirates-image uianimations-image"></div>
      </div>
      <div class="omnompirates-row">
        <div class="omnompirates-image unit-visualizer-image"></div>
        <div class="omnompirates-task">
          <h3>Unit Visualizer</h3>
          <p>I implemented the unit visualizer for the game along with the animations and system to make it work with <b>all the units in the game.</b></p>
        </div>
      </div>
      <div class="omnompirates-row">
        <div class="omnompirates-task left">
          <h3>Level Generator</h3>
          <p>I have implmented a <b>level generator</b> and a <b>dynamic spreadsheet</b> to work on enemy design and unit balance with a designer.</p>
        </div>
        <div class="omnompirates-image level-generator-image"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.push('/projects')
}
</script>

<style scoped>
.omnompirates-section {
  width: 100%;
  max-width: 3000px;
  margin: 0 auto;
  padding: 2vw 2vw 4vw 2vw;
  background: var(--color-background);
  border-radius: 2vw;
  box-shadow: 0 0.5vw 2vw 0 rgba(0,0,0,0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.omnompirates-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: 0;
  min-height: 5.5rem;
  padding: 0;
  z-index: 2;
  pointer-events: none;
}
.omnompirates-header-content, .back-arrow {
  pointer-events: auto;
}

.omnompirates-header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
}

.omnompirates-title {
  text-align: center;
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  width: 100%;
  position: static;
  transform: none;
  pointer-events: auto;
}

.omnompirates-subtitle {
  margin-bottom: 2vw;
  text-align: left !important;
  margin-left: 0;
  padding-left: 0.5rem;
}
.omnompirates-subtitle.center {
  text-align: center;
  margin-left: 0;
  margin-bottom: 0.5vw;
}
.omnompirates-grid {
  width: 100%;
  max-width: 1800px;
  display: flex;
  flex-direction: column;
  gap: 2.5vw;
  position: relative;
  z-index: 1;
}
.omnompirates-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1vw;
}
.omnompirates-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  min-height: 140px;
  aspect-ratio: 16 / 9;
  background: #222;
  border: 2px solid #b0b8c1;
  border-radius: 0.7rem;
  flex-shrink: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
}
.omnompirates-task {
  flex: 1 1 0;
  margin-left: 1vw;
}
.omnompirates-task.left {
  margin-left: 0;
  margin-right: 1vw;
  align-items: flex-end;
  text-align: right;
}
.omnompirates-task h3 {
  margin-bottom: 0.5rem;
}
.omnompirates-task p {
  margin-bottom: 0;
}
.tutorial-system-image {
  background-image: url('https://gyazo.com/faa829af7896c2bc3b9503aad1be225f/raw');
  background-size: cover;
  background-position: center;
}
.uianimations-image {
  background-image: url('https://gyazo.com/4d07436beb017dcced4c4c0062f4e4ee/raw');
  background-size: cover;
  background-position: center;
}
.unit-visualizer-image {
  background-image: url('https://gyazo.com/e4277977d1ab0d914d3247b263fd9b1e/raw');
  background-size: cover;
  background-position: center;
}
.solid-image {
  background-image: url('https://gyazo.com/ce73036eb3864f42d1ffe0d8a18a742e/raw');
  background-size: cover;
  background-position: center;
}
.level-generator-image {
  background-image: url('https://gyazo.com/037a3e9f4e1055024736150ba2c67140/raw');
  background-size: cover;
  background-position: center;
}
.trailer-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto 2vw auto;
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  position: relative;
  z-index: 1;
}
.trailer-container iframe {
  width: clamp(720px, 70vw, 1024px);
  aspect-ratio: 16 / 9;
  border-radius: 1rem;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.22);
  border: none;
  height: auto;
}
.view-section {
  position: relative;
}

.back-arrow {
  position: absolute;
  top: 0.5rem;
  left: 1.2rem;
  margin-left: 12px;
  margin-top: 12px;
  padding: 0;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s;
  z-index: 10;
  display: flex;
  align-items: center;
}

.back-arrow img.svg-arrow, .back-arrow .svg-arrow {
  width: 3rem;
  height: 3rem;
  transition: filter 0.2s, color 0.2s, transform 0.2s;
}

.back-arrow:hover {
  transform: scale(1.08);
}

.back-arrow:hover .svg-arrow path {
  stroke: var(--vt-c-orange);
}
@media (max-width: 720px) {
  .omnompirates-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
  }
  .omnompirates-task,
  .omnompirates-task.left {
    order: 1;
    margin: 0;
    align-items: center;
    text-align: center;
  }
  .omnompirates-image {
    order: 2;
  }
}
</style> 