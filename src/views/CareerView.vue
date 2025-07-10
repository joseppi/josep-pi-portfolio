<template>
  <section class="view-section">
    <h1>Career</h1>
    <p>This section highlights my professional journey as a gameplay developer, including my education, work experience, and key milestones in the game industry.</p>
    <h2>Professional Experience</h2>
    <ul class="career-list">
      <li class="career-list-item">
        <h3>Sngular</h3>
        <div class="career-meta">
          <h4 class="career-position">Gameplay Programmer</h4>
          <span class="career-years">2023 - 2024</span> |
          <span class="career-total">Total: 1 year</span>
        </div>
        <ul class="career-bullets">
          <li>Developed a <b>top-down strategy game</b> with a random level generator.</li>
          <li>Implemented responsive <b>UI/UX</b> and a unit visualizer.</li>
          <li>Created a tutorial and battle pass system.</li>
          <li>Designed a rhythm game and dynamic difficulty system.</li>
          <li>Led UI and game design, and managed CMS integration.</li>
        </ul>
        <div class="career-meta" style="margin-top:1.2rem;">
          <h4 class="career-position">Junior Gameplay Programmer</h4>
          <span class="career-years">2022 - 2023</span> |
          <span class="career-total">Total: 1 year</span>
        </div>
        <ul class="career-bullets">
          <li>Built museum applications and integrated CMS.</li>
          <li>Implemented common UI/UX elements.</li>
          <li>Integrated Unity content through JSON.</li>
          <li>Worked with sensors and peripheral devices.</li>
          <li>Developed AR/VR features.</li>
        </ul>
      </li>
      <li class="career-list-item">
        <h3>Filmin</h3>
        <div class="career-meta">
          <h4 class="career-position">Quality Assurance Engineer</h4>
          <span class="career-years">2020 - 2022</span> |
          <span class="career-total">Total: 2 years</span>
        </div>
        <ul class="career-bullets">
          <li>Automated QA with Cypress.</li>
          <li>Managed QA checklists in Excel.</li>
          <li>Created macros with Autohotkey.</li>
          <li>Generated reports with PostgreSQL.</li>
        </ul>
      </li>
    </ul>
    <div class="career-divider"></div>
    <h2>Education</h2>
    <ul class="career-list">
      <li class="career-list-item">
        <h3>CITM-UPC (Universitat Politècnica de Catalunya)</h3>
        <div class="career-meta">
          <h4 class="career-position">Degree in Videogame Programming and Development</h4>
          <span class="career-years">2016 - 2020</span> |
          <span class="career-total">Total: 4 years</span>
        </div>
        <ul class="career-bullets">
          <li>Developed a <b>C/C++ 3D engine</b>.</li>
          <li>Worked with OpenGL and Unity.</li>
          <li>Focused on UI/UX and project management.</li>
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
  padding: 1rem 1rem 1rem 1rem;
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
  padding: 0;
  color: #e0e6ed;
}
.career-bullets li {
  margin-bottom: 0.4rem;
  font-size: 1.05rem;
  list-style: disc inside;
}
.view-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90vw;
  max-width: 60rem;
  min-width: 0;
  margin: 0 auto;
  padding: 1vw 2vw;
  background: var(--vt-c-black-mute);
  border-radius: var(--border-radius);
  box-shadow: var(--section-box-shadow);
}
@media (max-width: 700px) {
  .view-section {
    width: 98vw;
    max-width: 100vw;
    padding: 4vw 2vw 2vw 2vw;
    border-radius: 4vw;
  }
}
</style> 