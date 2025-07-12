<template>
  <section class="view-section wiredpirates-section">
    <h1 class="wiredpirates-title">Wired Pirates</h1>
    <h2 class="wiredpirates-subtitle">Sub Title</h2>
    <div class="wiredpirates-grid">
      <div class="wiredpirates-row">
        <div class="wiredpirates-image"></div>
        <div class="wiredpirates-task">
          <h3>Game Mechanics</h3>
          <p>Description of the game mechanics and core gameplay features. This includes player movement, combat system, and interactive elements that make the game engaging and fun to play.</p>
        </div>
      </div>
      <div class="wiredpirates-row">
        <div class="wiredpirates-task left">
          <h3>Level Design</h3>
          <p>Description of the level design process and how different environments were created to provide varied gameplay experiences.</p>
        </div>
        <div class="wiredpirates-image"></div>
      </div>
      <div class="wiredpirates-row">
        <div class="wiredpirates-image"></div>
        <div class="wiredpirates-task">
          <h3>Character Development</h3>
          <p>Description of character design, animations, and how the pirate theme was integrated throughout the game.</p>
        </div>
      </div>
      <div class="wiredpirates-row">
        <div class="wiredpirates-task left">
          <h3>Technical Implementation</h3>
          <p>Description of the technical challenges and solutions implemented during development, including performance optimization and cross-platform compatibility.</p>
        </div>
        <div class="wiredpirates-image"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed for static layout
</script>

<style scoped>
.wiredpirates-section {
  width: 100%;
  max-width: 3000px;
  margin: 0 auto;
  padding: 2vw 2vw 4vw 2vw;
  background: rgba(30, 32, 36, 0.95);
  border-radius: 2vw;
  box-shadow: 0 0.5vw 2vw 0 rgba(0,0,0,0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wiredpirates-title {
  margin-top: 1vw;
  margin-bottom: 0.2vw;
  text-align: center;
}
.wiredpirates-subtitle {
  margin-bottom: 2vw;
  text-align: center;
}
.wiredpirates-grid {
  width: 100%;
  max-width: 1800px;
  display: flex;
  flex-direction: column;
  gap: 2.5vw;
}
.wiredpirates-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1vw;
}
.wiredpirates-image {
  width: 260px;
  height: 260px;
  background: #222;
  border: 2px solid #b0b8c1;
  border-radius: 0.7rem;
  flex-shrink: 0;
}
.wiredpirates-task {
  flex: 1 1 0;
  margin-left: 1vw;
}
.wiredpirates-task.left {
  margin-left: 0;
  margin-right: 1vw;
  align-items: flex-end;
  text-align: right;
}
.wiredpirates-task h3 {
  margin-bottom: 0.5rem;
}
.wiredpirates-task p {
  margin-bottom: 0;
}
@media (max-width: 900px) {
  .wiredpirates-row {
    flex-direction: column;
    align-items: center;
    gap: 1vw;
  }
  .wiredpirates-task.left, .wiredpirates-task {
    margin: 0;
    align-items: center;
    text-align: center;
  }
  .wiredpirates-image {
    width: 80vw;
    height: 80vw;
    max-width: 260px;
    max-height: 260px;
  }
}
</style> 