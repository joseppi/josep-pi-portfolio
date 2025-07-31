<template>
  <section class="view-section">
    <h1>About Me</h1>
    <p><b>Phone:</b> +34 696-800-470 &nbsp;</p>
    <p><b>Email:</b> josep.pi.serra@gmail.com &nbsp;</p>
    <p><b>Location:</b> Barcelona, Spain &nbsp;</p>
    <p><b>GitHub:</b> 
      <a href="https://github.com/joseppi" target="_blank" rel="noopener" aria-label="GitHub" class="github-link">
      <svg width="30" height="30" viewBox="0 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#222"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="#fff"/>
      </svg>    
    </a>
    </p>

    <h2>Hi, I'm Josep Pi!</h2>
    <p>I am a game developer who loves studying and building <b>easy-to-understand but hard-to-master games</b>. Creating a puzzle-like games where players can create their own levels and share them with others is my dream.</p>    
    <p>For the past year, I have been working towards that goal by developing my game, <router-link to="/trustnogod"><b><u>Trust no God</u></b></router-link>. Playtesting and the overall feedback have been great, and I am excited about its future.</p>
    <p>I am a collaborative and supportive team member who values open communication and constructive feedback. 
      I enjoy working with others to solve problems and believe that the best results come from combining different perspectives and skills. 
      My positive attitude, adaptability, and passion <b>helped me find people to work on </b>
      <router-link to="/trustnogod"><b><u>Trust no God</u></b></router-link>
      and I will be eternally grateful for every single one of them.
    </p>
    <div class="about-grid">
      <div class="about-row">
        <div class="about-video-embed">
          <iframe 
            src="https://www.youtube.com/embed/XrA5OH9hFFk" 
            title="Piano YouTube Short"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style="width:100%; height:100%; border-radius:0.7rem; background:#222;"
          ></iframe>
        </div>
        <div class="about-task">
          <div class="youtube-channel-link-centered">
            <h3>Piano, YouTube & Teaching</h3>
            <a class="youtube-channel-link" href="https://www.youtube.com/@JosepPi" target="_blank" rel="noopener" aria-label="YouTube Piano Channel">
              <img src="/youtube-icon.svg" alt="YouTube Channel" class="youtube-icon" />
            </a>
          </div>
          <p>I have been <b>playing piano for many years.</b> Along the way, I have <b>taught piano to others</b> and helped them discover the joy of music the same way my teachers did this for me.
            I created a YouTube channel to share my music and to keep track of my progress as years go by.
          </p>
        </div>
      </div>
      <div class="about-row">
        <div class="about-task left">
          <h3>Sports & Self-Care</h3>
          <p>I enjoy sports, especially <b>ping pong</b> and <b>basketball</b>. I also take pride in taking care of myself. Staying active and healthy is an important part of my life.</p>
        </div>
        <div class="about-image experience-image sports-image"></div>
      </div>
      <div class="about-row">
        <div class="about-image strategy-chess-image"></div>
        <div class="about-task">
          <h3>Strategy Games</h3>
          <p>I love strategy games like <b>Chess</b> or <b>Starcraft</b>. I find facinating the fact there are so many ways to achieve victory. 
            Thankfully, I can still enjoy that freedom since I am not that good in any of them!</p>
          <p><b>Fun fact:</b> the picture was taken when there was no electricity at home. Truly the perfect time to play some chess!</p>
        </div>
      </div>
      <div class="about-row" style="margin-bottom: 2rem;">
        <div class="about-task left">
          <h3>Food & Cooking</h3>
          <p>I absolutely love food! I occasionally <b>attend cooking classes</b> to expand my culinary knowledge, but above all, I just love eating and exploring new flavors.</p>
        </div>
        <div class="about-image skills-image food-image"></div>
      </div>
    </div>
    <h2>Let's Talk!</h2>
    <p>Interested in hiring or just talking about games? Feel free to book a time that works for you:</p>
    <a href="https://calendly.com/josep-pi-serra/60min" target="_blank" rel="noopener"
    style="text-decoration: none; color: #aaa; font-size: 1.25rem; font-weight: 500; display: inline-flex; align-items: center; gap: 0.5rem;">
      <h3>📅 Schedule a meeting</h3>
    </a>
    
  </section>
</template>

<script setup>
// Add any setup logic if needed
</script>

<style scoped>
ul {
  margin-top: 1.5rem;
  padding-left: 1.2rem;
}
li {
  margin-bottom: 0.7rem;
  font-size: 1.1rem;
}
.icon-row {
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  margin: 1.2rem 0 0.5rem 0;
}

.github-link svg {
  vertical-align: middle; /* Aligns with text */
  margin-left: 8px; /* Adds small space */
}

.about-grid {
  width: 100%;
  max-width: 1800px;
  display: flex;
  flex-direction: column;
  gap: 2.5vw;
  margin-top: 2rem;
}
.about-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1vw;
}
.about-image {
  width: 100%;
  max-width: 440px;
  min-height: 240px;
  aspect-ratio: 16 / 9;
  background: #222;
  border: 2px solid #b0b8c1;
  border-radius: 0.7rem;
  flex-shrink: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
}
.about-task {
  flex: 1 1 0;
  margin-left: 1vw;
}
.about-task.left {
  margin-left: 0;
  margin-right: 1vw;
  align-items: flex-end;
  text-align: right;
}
.about-video-embed {
  width: 100%;
  max-width: 220px;
  min-height: 220px;
  aspect-ratio: 9 / 16;
  background: #222;
  border: 2px solid #b0b8c1;
  border-radius: 0.7rem;
  flex-shrink: 0;
  display: block;
  overflow: hidden;
}
.about-video-embed-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.youtube-channel-link-centered {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
}
.youtube-channel-label {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  text-align: right;
  line-height: 1.2;
}
.youtube-channel-link {
  display: inline-block;
  margin: 0;
  background: none !important;
  color: inherit !important;
}
.youtube-channel-link:hover {
  background: none !important;
  color: inherit !important;
}
.youtube-channel-link:hover .youtube-icon {
  transform: scale(1.2);
}
.youtube-icon {
  width: 2.8rem;
  height: 2.8rem;
  display: block;
  transition: transform 0.18s cubic-bezier(0.4,0,0.2,1);
}
@media (max-width: 720px) {
  .about-row {
    flex-direction: column;
    align-items: center;
    gap: 1vw;
  }
  .about-task.left, .about-task {
    order: 1;
    margin: 0;
    align-items: center;
    text-align: center;
  }
  .about-image {
    order: 2;
    max-width: 440px;
    max-height: 440px;
  }
  .about-video-embed {
    order: 2;
    width: 45vw;
    height: 45vw;
    max-width: 220px;
    max-height: 220px;
  }
}
.sports-image {
  background-image: url('/sports-basket.png');
  background-size: 150%;
  background-position: 50% 0%;
  aspect-ratio: 695 / 1153;
  width: 20%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
.food-image {
  background-image: url('/food-college.png');
  background-size: cover;
  background-position: center;
  aspect-ratio: auto;
  width: 50%;
}
.strategy-chess-image {
  background-image: url('/strategy-chess.png');
  background-size: cover;
  background-position: center;
  aspect-ratio: 1 / 1;
  width: 40%;
  min-height: 180px;
  margin-left: auto;
  margin-right: auto;
}
a u {
  color: var(--vt-c-orange);
}
a:hover u {
  color: rgba(255, 140, 0, 0.9);
  border-bottom: 3px solid rgba(255, 140, 0, 0.9);
  background: rgba(255, 140, 0, 0.158);
}
</style> 