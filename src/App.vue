<template>
  <NavBarVue />
  <router-view />
</template>
<script lang="ts" setup>
import NavBarVue from "@/components/NavBar.vue";
</script>
<style>
:root {
  --color-white: #fffff4;
  --color-text: #212b26;
  --color-primary: #ffb000;
  --color-secondary: #ffcf9d;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text);
  background: var(--color-white);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  /* width: 100vw; */
  /* overflow-x: hidden; */
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
button {
  background: transparent;
  border: none;
  outline: none;
}
.btn {
  background: var(--color-white);
  color: var(--color-primary);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 700;
}
</style>
