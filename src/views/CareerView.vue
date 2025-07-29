<template>
  <section class="view-section">
    <h1>Career</h1>
    <p>This section highlights my professional journey as a gameplay developer, including my education, work experience, and key milestones in the game industry.</p>
    <h2>Professional Experience</h2>
    <ul class="career-list">
      <li class="career-list-item">
        <h3>
          <u><a href="https://www.sngular.com/" target="_blank" rel="noopener">Sngular</a></u>
        </h3>
        <div class="career-meta">
          <h4 class="career-position">Gameplay Programmer</h4>
          <span class="career-years">2023 - 2024</span> |
          <span class="career-total">Total: 1 year</span>
        </div>
        <ul class="career-bullets">
          <li>Developed a <b>top-down strategy game</b> with a random level generator.</li>
          <li>Implemented <b>responsive UI/UX</b> and a <b>unit visualizer</b>.</li>
          <li>Created a <b>tutorial</b> and <b>battle pass</b> system.</li>
          <li>Designed a <b>rhythm game</b> and dynamic difficulty system.</li>
          <li>Implemented UI with game designers, and managed <b>CMS</b> integration.</li>
        </ul>
        <div class="career-meta" style="margin-top:1.2rem;">
          <h4 class="career-position">Junior Gameplay Programmer</h4>
          <span class="career-years">2022 - 2023</span> |
          <span class="career-total">Total: 1 year</span>
        </div>
        <ul class="career-bullets">
          <li>Built <b>museum applications</b> and integrated CMS.</li>
          <li>Implemented <b>common UI/UX</b> elements.</li>
          <li>Integrated <b>Unity content through JSON</b>.</li>
          <li>Worked with sensors and peripheral devices.</li>
          <li>Developed <b>AR/VR</b> features.</li>
        </ul>
      </li>
      <li class="career-list-item">
        <h3>
          <u><a href="https://www.filmin.es/" target="_blank" rel="noopener">Filmin</a></u>
        </h3>
        <div class="career-meta">
          <h4 class="career-position">Quality Assurance Engineer</h4>
          <span class="career-years">2020 - 2022</span> |
          <span class="career-total">Total: 2 years</span>
        </div>
        <ul class="career-bullets">
          <li>Automated QA with <b>Cypress</b>.</li>
          <li>Managed QA checklists in Excel.</li>
          <li>Created macros with <b>Autohotkey</b>.</li>
          <li>Generated reports with <b>PostgreSQL</b>.</li>
        </ul>
      </li>
    </ul>
    <div class="career-divider"></div>
    <h2>Education</h2>
    <ul class="career-list">
      <li class="career-list-item">
        <h3>
          <u><a href="https://www.citm.upc.edu/ing/estudis/grau-videojocs-bcn/" target="_blank" rel="noopener">CITM-UPC</a></u>
        </h3>
        <div class="career-meta">
          <h4 class="career-position">Degree in Videogame Programming and Development</h4>
          <span class="career-years">2016 - 2020</span> |
          <span class="career-total">Total: 4 years</span>
        </div>
        <ul class="career-bullets">
          <li>Developed a <b>C/C++ 3D engine</b>.</li>
          <li>Worked with <b>OpenGL</b> and <b>Unity</b>.</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script setup>
// Add any setup logic if needed
</script>

<style scoped>
.career-divider {
  width: 100%;
  height: 2px;
  background: rgba(255,255,255,0.08);
  margin: 1rem 0 1rem 0;
  border-radius: 1px;
}
.career-list {
  list-style: none;
  padding: 0;
  width: 100%;
}
.career-list-item {
  margin: 0.5rem 0 0.5rem 0;
  padding: 2rem 2rem 2rem 3rem;
  width: 100%;
  background: var(--vt-c-black);
  border-radius: var(--border-radius);
  box-shadow: var(--section-box-shadow);
  color: #fff;
  box-sizing: border-box;
}
.career-meta {
  font-size: 1.1rem;
  color: #b0b8c1;
  margin-bottom: 0.7rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  align-items: center;
}
.career-position {
  font-weight: 500;
  margin: 0 0.5rem 0 0;
  display: inline;
  font-size: inherit;
}
.career-years, .career-total {
  font-size: 1rem;
  color: #888;
}
.career-bullets {
  margin: 0;
  color: #e0e6ed;
}
.career-bullets li {
  margin-bottom: 0.4rem;
  margin-left: 24px;  
  font-size: 1.05rem;
  list-style: disc inside;
}
</style> 