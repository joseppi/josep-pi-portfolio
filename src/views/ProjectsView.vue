<template>
  <section class="view-section">
    <h1>Projects</h1>
    <p>Here you will find a curated selection of my gameplay development projects, showcasing my skills in game design, programming, and creative problem-solving. Click on each project to learn more about my role, the technologies used, and the challenges overcome.</p>
    <ul class="project-list">
      <!-- Example project item -->
      <li>
        <h2>Project Title</h2>
        <p>Short description of the project, your role, and key achievements.</p>
      </li>
      <!-- Add more project items as needed -->
    </ul>
  </section>
</template>

<script setup>
// Add any setup logic if needed
</script>

<style scoped>
.project-list {
  list-style: none;
  padding: 0;
  background: rgba(30, 32, 36, 0.95); /* match your dark card background */
}

.project-list li {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: var(--vt-c-black);
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
  background: rgba(30, 32, 36, 0.95);
  border-radius: 2vw;
  box-shadow: 0 0.5vw 2vw 0 rgba(0,0,0,0.18);
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