<template>
  <div class="content">
    <nav class="content__navbar">
      <router-link to="/" class="content__navbar-logo">
        <font-awesome-icon icon="fa-solid fa-book-open-reader" size="2x" />
      </router-link>
      <button type="button" class="menu-hamburger" @click.prevent="handleClick">
        <font-awesome-icon icon="fa-solid fa-bars" size="2x" />
      </button>
      <div class="content__navbar-menu" :class="{ collapsed: isCollapsed }">
        <div class="menu-items">
          <router-link class="item" to="/">Home</router-link>
          <router-link class="item" to="/about">About</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let isCollapsed = ref(false);
const handleClick = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped>
.content {
  background: var(--color-primary);
  /* background: aqua; */
  height: 4rem;
  color: var(--color-white);
}
.content__navbar {
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  position: relative;
}
.content__navbar-logo {
  border: 2px solid var(--color-white);
  color: var(--color-primary);
  background: var(--color-white);
  width: 3rem;
  height: 3rem;
  border-radius: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.1s ease-in;
}
.content__navbar-logo:hover {
  background: transparent;
  color: var(--color-white);
  transition: all 0.1s ease-in;
}
.content__navbar-menu .menu-items {
  /* background: blue; */
  display: flex;
  gap: 1rem;
}
.content__navbar-menu .menu-items .item {
  /* background: green; */
  padding: 0.5rem 1rem;
  background: var(--color-white);
  color: var(--color-primary);
  text-decoration: none;
  border: 1px solid var(--color-white);
  border-radius: 0.1rem;
  font-size: 1rem;
  font-weight: bolder;
  transition: all 0.1s ease-in;
}
.content__navbar-menu .menu-items .item:hover {
  background: transparent;
  color: var(--color-white);
  transition: all 0.1s ease-in;
}
.menu-hamburger {
  border: 2px solid var(--color-white);
  color: var(--color-white);
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex !important;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.1s ease-in;
  display: none !important;
}
.menu-hamburger:hover {
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.1s ease-in;
}

@media screen and (max-width: 630px) {
  .menu-hamburger {
    display: block !important;
  }
  .content__navbar {
    /* background: aqua; */
    padding: 0.5rem 1rem;
    height: 100vh;
    align-items: normal;
  }
  .content__navbar-menu {
    position: absolute;
    background: rgba(92, 12, 12, 0.5);
    bottom: -4rem;
    /* top: 0; */
    left: 0;
    right: 0;
    /* width: 100vw; */
    height: 100%;
    z-index: 100;
    transform: translateX(100%);
    transition: all 0.3s ease-in-out;
  }
  .content__navbar-menu.collapsed {
    transform: translateX(0);
    transition: all 0.3s ease-in-out;
  }
  .content__navbar-menu .menu-items {
    /* background: blue; */
    /* display: flex; */
    /* gap: 1rem; */
    flex-direction: column;
    padding: 1rem 1rem;
    text-align: center;
  }
}
</style>
