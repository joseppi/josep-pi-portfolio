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
}
</style>

<style>
#app {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: var(--color-background);
  margin: 0;
}
.nav-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  display: flex;
  gap: 3rem;
  background: #222;
  height: var(--nav-height);
  min-height: var(--nav-height);
  padding: 0 3rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  align-items: flex-end;
}

.nav-panel a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.65rem;
  transition: color 0.2s, border-bottom 0.2s;
  /* border-bottom: 3px solid transparent; */
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.5rem;  
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
  max-width: 900px;
  margin: 0 auto;
  padding-top: 0;
}
</style>