<template>
  <section class="trustnogod-section">
    <div class="trustnogod-header">
      <div class="back-arrow" @click="goBack">
        <svg class="svg-arrow" width="3rem" height="3rem" viewBox="0 0 48 48" fill="none">
          <path d="M30 36L18 24L30 12" stroke="#FF8C00" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div class="trustnogod-header-content">
      <h1 class="trustnogod-title">Trust no God</h1>
      <h2 class="trustnogod-subtitle center">RTS + Roguelike + Tower Defense</h2>
    </div>
    <div class="trailer-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-bZDdM874LM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <h2 class="trustnogod-subtitle">What did I do?</h2>
    <div class="trustnogod-grid">
      <div class="trustnogod-row">
        <div class="trustnogod-image enemy-generation-image"></div>
        <div class="trustnogod-task">
          <h3>Enemy Generation</h3>
          <p>Created an enemy generator that <b>adapts to the players power and skill</b> making the game extremely replayable in the process.</p>
        </div>
      </div>
      <div class="trustnogod-row">
        <div class="trustnogod-task left">
          <h3>A Star Pathfinding</h3>
          <p>Created an A* pathfinding system so we can create the path the troops have to follow before attacking the enemy.</p>
        </div>
        <div class="trustnogod-image astar-image"></div>
      </div>
      <div class="trustnogod-row">
        <div class="trustnogod-image troops-image"></div>
        <div class="trustnogod-task">
          <h3>+300 Moving Entities</h3>
          <p>Implemented a system that allowed for hundreds of moving entities with <b>different behaviors</b> move in real time.</p>
        </div>
      </div>
      <div class="trustnogod-row">
        <div class="trustnogod-task left">
          <h3>UI Animation system.</h3>
          <p>Added <b>animations to most UI</b> to make every single action feel better while also trying to improve the user exeperience in the process.</p>
        </div>
        <div class="trustnogod-image ui-animation-image"></div>
      </div>
      <div class="trustnogod-row">
        <div class="trustnogod-image solid-image"></div>
        <div class="trustnogod-task">
          <h3>SOLID Principles</h3>
          <p>By following the SOLID principles, I was able to implement <b>global stat modifiers</b> with ease.</p>
        </div>
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
.trustnogod-section {
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

.trustnogod-header {
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
.trustnogod-header-content, .back-arrow {
  pointer-events: auto;
}

.trustnogod-header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
}

.trustnogod-title {
  text-align: center;
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  width: 100%;
  position: static;
  transform: none;
  pointer-events: auto;
}

.back-arrow {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 1rem;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s;
  z-index: 1;
  padding-left: 1.4rem;
  padding-top: 1.4rem;
}

.back-arrow img.svg-arrow, .back-arrow .svg-arrow {
  width: 3rem;
  height: 3rem;
  transition: filter 0.2s, color 0.2s, transform 0.2s;
}

.back-arrow:hover {
  transform: translate(-5px, -50%);
}

.back-arrow:hover .svg-arrow path {
  stroke: var(--vt-c-orange);
}
.trustnogod-subtitle {
  margin-bottom: 2vw;
  text-align: left !important;
  margin-left: 0;
  padding-left: 0.5rem;
}
.trustnogod-subtitle.center {
  text-align: center;
  margin-left: 0;
  margin-bottom: 0.5vw;
}
.trustnogod-grid {
  width: 100%;
  max-width: 1800px;
  display: flex;
  flex-direction: column;
  gap: 2.5vw;
  position: relative;
  z-index: 1;
}
.trustnogod-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1vw;
}
.trustnogod-image {
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
.trustnogod-task {
  flex: 1 1 0;
  margin-left: 1vw;
}
.trustnogod-task.left {
  margin-left: 0;
  margin-right: 1vw;
  align-items: flex-end;
  text-align: right;
}
.trustnogod-task h3 {
  margin-bottom: 0.5rem;
}
.trustnogod-task p {
  margin-bottom: 0;
}
.enemy-generation-image {
  background-image: url('https://gyazo.com/b4ac7cf81d895f12caab820ef0135908/raw');
  background-size: cover;
  background-position: center;
}
.astar-image {
  background-image: url('https://gyazo.com/8e81ebece19ad2574371734592b31488/raw');
  background-size: cover;
  background-position: center;
}
.ui-animation-image {
  background-image: url('https://gyazo.com/d6595fc6a187b21f9cbe251ab39a615a/raw');
  background-size: cover;
  background-position: center;
}
.solid-image {
  background-image: url('https://gyazo.com/ce73036eb3864f42d1ffe0d8a18a742e/raw');
  background-size: cover;
  background-position: center;
}
.troops-image {
  background-image: url('https://gyazo.com/59644f168b8a8dfb6636cec9446db623/raw');
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
  width: 100%;
  max-width: 560px;
  aspect-ratio: 16 / 9;
  border-radius: 1rem;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.22);
  border: none;
}
@media (max-width: 900px) {
  .trustnogod-row {
    flex-direction: column;
    align-items: center;
    gap: 1vw;
  }
  .trustnogod-task.left, .trustnogod-task {
    margin: 0;
    align-items: center;
    text-align: center;
  }
  .trustnogod-image {
    width: 80vw;
    height: 80vw;
    max-width: 260px;
    max-height: 260px;
  }
}
</style> 