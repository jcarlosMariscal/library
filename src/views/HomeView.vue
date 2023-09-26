<template>
  <div class="home">
    <HomeMain />
    <HomeAdvantages />
  </div>
</template>

<script lang="ts" setup>
import HomeMain from "@/components/HomeMain.vue";
import HomeAdvantages from "@/components/HomeAdvantages.vue";
</script>
<style scoped>
.home {
  /* box-sizing: border-box; */
  /* width: 100vw; */
  /* min-height: 100vh; */
  background: var(--color-white);
  z-index: 100;
}
</style>
