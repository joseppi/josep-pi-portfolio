<template>
  <section class="home-section">
    <h1 class="main-title">Welcome to My Gameplay Developer Portfolio</h1>
    <h2 class="subtitle">Gameplay Developer</h2>
    <p class="intro">
      This is the professional portfolio of <span class="highlight">[Your Name]</span>, a passionate gameplay developer specializing in interactive experiences, game mechanics, and immersive storytelling. Explore my projects, career highlights, and learn more about my journey in the game development industry.
    </p>
    <div class="video-card">
      <iframe 
        class="portfolio-video"
        src="https://www.youtube.com/embed/VOfw1yGn2AQ?autoplay=1&mute=1" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    </div>
  </section>
</template>

<script setup>
// Add any setup logic if needed
</script>

<style scoped>
.home-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 0 1.5rem;
  background: rgba(30, 32, 36, 0.95);
  border-radius: 18px;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.18);
}
.main-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #e0e6ed;
  margin-bottom: 0.7rem;
  text-align: center;
  letter-spacing: 0.01em;
}
.subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(255, 140, 0, 0.9); /* 10% orange, 90% opacity */
  margin-bottom: 1.2rem;
  text-align: center;
}
.intro {
  font-size: 1.15rem;
  color: #b0b8c1;
  text-align: center;
  margin-bottom: 2.2rem;
  line-height: 1.7;
}
.highlight {
  color: rgba(255, 140, 0, 0.9); /* 10% orange, 90% opacity */
  font-weight: 600;
}
.video-card {
  width: 100%;
  max-width: 700px;
  /* Remove background and box-shadow for seamless look */
  border-radius: 14px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
.portfolio-video {
  width: 100%;
  aspect-ratio: 16/9;
  border: none;
  border-radius: 10px;
  background: transparent;
  box-shadow: none;
}
@media (max-width: 700px) {
  .main-title {
    font-size: 2rem;
  }
  .video-card {
    padding: 0.5rem;
  }
}
</style> 