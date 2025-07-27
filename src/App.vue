<script setup>
</script>

<template>
  <div id="app">
    <nav class="nav-panel">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/career">Career</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/*
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}*/
</style>

<style>
#app {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: var(--color-background);
  margin: 0px;
  padding: 0px;
}
.nav-panel {
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  display: flex;
  flex-wrap: nowrap; /* Ensure single row */
  gap: clamp(0.2rem, 2vw, 1rem);
  background: #222;
  height: clamp(2.5rem, 5.8vw, 3.3rem);
  padding: 0 clamp(0.2rem, 2vw, 2rem);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  align-items: center;
  scrollbar-width: none; /* Firefox */
  container-type: inline-size;
}
.nav-panel::-webkit-scrollbar {
  display: none;
}

.nav-panel a {
  color: var(--vt-c-white-soft);
  text-decoration: none;
  font-weight: 500;
  font-size: clamp(1rem, 5.8vw, 1.65rem);
  transition: color 0.2s, border-bottom 0.2s;
  /* border-bottom: 3px solid transparent; */
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.5rem;
  white-space: nowrap;
  flex-shrink: 1;
  min-width: 0px;
}

.nav-panel a.router-link-exact-active {
  color: rgba(255, 140, 0, 0.9);
  border-bottom: 3px solid rgba(255, 140, 0, 0.9);
}
.nav-panel a:hover {
  color: rgba(255, 140, 0, 0.9);
  border-bottom: 3px solid rgba(255, 140, 0, 0.9);
  background: rgba(255, 140, 0, 0.12); /* subtle orange background on hover */
}

main {
  margin: 0 auto;
  padding-top: 0;
}
</style>