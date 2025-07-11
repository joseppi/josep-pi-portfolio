<template>
  <section class="view-section">
    <h1>Career</h1>
    <p>This section highlights my professional journey as a gameplay developer, including my education, work experience, and key milestones in the game industry.</p>
    <ul class="career-list">
      <!-- Example career item -->
      <li>
        <h2>Job Title / Position</h2>
        <h3>Company Name</h3>
        <span>Year - Year</span>
        <p>Brief description of your responsibilities and achievements in this role.</p>
      </li>
      <li>
        <h2>Job Title / Position</h2>
        <h3>Company Name</h3>
        <span>Year - Year</span>
        <p>Brief description of your responsibilities and achievements in this role.</p>
      </li>
      <!-- Add more career items as needed -->
    </ul>
  </section>
</template>

<script setup>
// Add any setup logic if needed
</script>

<style scoped>
.career-list {
  list-style: none;
  padding: 0;
}
.career-list li {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background:--vt-c-text-dark-2;
}
.career-list span {
  font-size: 0.95rem;
  color: #888;
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