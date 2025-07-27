<template>
  <section class="view-section">
    <h1 class="main-title">Hi, I am Josep Pi!</h1>
    <p class="intro">
      <span style="color: orange; font-weight: bold;">Programmer</span> by day, <span style="color: orange; font-weight: bold;">musician</span> by night!
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
    <a href="/josep-pi-portfolio/CV_Josep_Pi.pdf" target="_blank" rel="noopener" class="download-cv-btn">
      View CV
    </a>
  </section>
</template>

<script setup>
// Add any setup logic if needed
</script>

<style scoped>
.main-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #e0e6ed;
  margin-bottom: 1.5vw;
  text-align: center;
  letter-spacing: 0.01em;
}
.subtitle {
  font-size: clamp(1.1rem, 2.5vw, 2rem);
  font-weight: 600;
  color: rgba(255, 140, 0, 0.9);
  margin-bottom: 2vw;
  text-align: center;
}
.intro {
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  color: #b0b8c1;
  text-align: center;
  margin-bottom: 3vw;
  line-height: 1.7;
}
.highlight {
  color: rgba(255, 140, 0, 0.9); /* 10% orange, 90% opacity */
  font-weight: 600;
}
.video-card {
  width: 100%;
  max-width: 48rem;
  border-radius: 1.2vw;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5vw;
}
.portfolio-video {
  width: 100%;
  aspect-ratio: 16/9;
  border: none;
  border-radius: 1vw;
  background: transparent;
  box-shadow: none;
}
.download-cv-btn {
  display: inline-block;
  margin: 2vw auto 2vw auto;
  padding: 0.8em 2.5em;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  font-weight: 600;
  color: #fff;
  background: rgba(255, 140, 0, 0.9);
  border: none;
  border-radius: 2em;
  text-decoration: none;
  box-shadow: 0 0.2vw 0.8vw rgba(0,0,0,0.10);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  text-align: center;
}
.download-cv-btn:hover {
  background: #fff;
  color: rgba(255, 140, 0, 0.95);
  box-shadow: 0 0.4vw 1.6vw rgba(255,140,0,0.15);
}

/*
@media (max-width: 700px) {
  .view-section {
    width: 98vw;
    max-width: 100vw;
    padding: 4vw 2vw 2vw 2vw;
    border-radius: 4vw;
  }
  .main-title {
    font-size: clamp(1.3rem, 7vw, 2.2rem);
  }
  .video-card {
    max-width: 100vw;
    padding: 0.5rem;
  }
}
*/
</style> 