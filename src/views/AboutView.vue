<template>
  <section class="view-section">
    <h1>About Me</h1>
    <p>
      I am a gameplay developer with a passion for creating engaging and memorable interactive experiences. My expertise spans game mechanics, systems design, and player-centric development. I am committed to continuous learning and contributing to the evolution of the gaming industry.
    </p>
    <ul>
      <li><strong>Location:</strong> [Your Location]</li>
      <li><strong>Email:</strong> [Your Email]</li>
      <li><strong>LinkedIn:</strong> [Your LinkedIn Profile]</li>
      <!-- Add more personal/professional details as needed -->
    </ul>
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
  background: var(--color-background);
  border-radius: 2vw;
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