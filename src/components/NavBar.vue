<template>
  <div class="content">
    <nav class="content__navbar" aria-label="Menú de escritorio">
      <router-link to="/" class="content__navbar-logo">
        <font-awesome-icon icon="fa-solid fa-book-open-reader" size="2x" />
      </router-link>
      <button type="button" class="menu-hamburger" @click.prevent="handleClick">
        <font-awesome-icon icon="fa-solid fa-bars" size="2x" />
      </button>
      <div class="content__navbar-menu">
        <div class="menu-items">
          <router-link class="item" to="/">Home</router-link>
        </div>
      </div>
    </nav>
    <nav
      class="navbar-mobile"
      :class="{ 'menu-show': isCollapsed }"
      aria-label="Menú móvil"
    >
      <div class="menu-items mobile-menu">
        <router-link class="item mobile-item" to="/">Home</router-link>
        <router-link class="item mobile-item" to="/">Home</router-link>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let isCollapsed = ref(false);
const handleClick = () => {
  isCollapsed.value = !isCollapsed.value;
  document.body.style.overflow = isCollapsed.value ? "hidden" : "auto";
};
</script>

<style scoped>
.content {
  background: var(--color-primary);
  /* background: aqua; */
  height: 4rem;
  color: var(--color-white);
  position: sticky;
  top: 0;
  z-index: 999;
  /* width: 100vw; */
}
.content__navbar {
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  /* position: relative; */
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
.menu-items {
  /* background: blue; */
  display: flex;
  gap: 1rem;
}
.menu-items .item {
  /* background: green; */
  padding: 0.5rem 1rem;
  /* background: var(--color-white); */
  color: var(--color-white);
  text-decoration: none;
  /* border: 1px solid var(--color-white); */
  border-radius: 0.1rem;
  font-size: 1rem;
  font-weight: bolder;
  transition: all 0.1s ease-in;
}
.menu-items .item:hover {
  background: transparent;
  color: var(--color-text);
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
.navbar-mobile {
  display: none;
}

@media screen and (max-width: 630px) {
  .menu-hamburger {
    display: block !important;
  }
  .content__navbar {
    /* background: aqua; */
    padding: 0.5rem 1rem;
    /* height: 100vh; */
    /* align-items: normal; */
  }
  .content__navbar-menu {
    display: none !important;
  }
  .navbar-mobile {
    margin-top: -4px;
    background: rgba(255, 176, 0, 0.8);
    z-index: 999;
    /* color: red; */
    height: calc(100vh - 4rem);
    padding: 1rem;
    transition: all 0.3s ease-in;
    /* z-index: 999; */
  }
  .navbar-mobile.menu-show {
    transition: all 0.3s ease-in;
    display: block;
  }
  .mobile-menu {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .mobile-item {
    text-align: center;
  }
}
</style>
