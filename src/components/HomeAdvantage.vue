<template>
  <div class="advantage">
    <div class="advantage-icon">
      <font-awesome-icon
        :icon="['fa-solid', props.icon]"
        size="2x"
      ></font-awesome-icon>
    </div>
    <!-- <p class="advantage-text">{{ props.text }}</p> -->
    <!-- <q>{{ props.author }}</q> -->
    <blockquote>
      <q>{{ props.text }}</q>
      <footer>- {{ props.author }}</footer>
    </blockquote>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps(["icon", "text", "author"]);
</script>

<style scoped>
.advantage {
  /* background: orange; */
  color: var(--color-text);
  border: 1px solid var(--color-secondary);
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 12rem;
  min-height: 7rem;
  position: relative;
}
.advantage .advantage-icon {
  /* font-size: 2; */
  /* margin: 0.5rem 0; */
  background: var(--color-white);
  color: var(--color-secondary);
  padding: 0 0.4rem;
  position: absolute;
  top: -1rem;
  left: 1rem;
}
blockquote {
  /* margin: 1rem 0; */
  /* text-align: center; */
  /* background: purple; */
  margin: 1rem 0 0 0;
}
</style>
