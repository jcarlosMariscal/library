<template>
  <div class="content">
    <div class="content__section">
      <div class="content__section-main">
        <h1 class="title">Bienvenido a la Librería</h1>
        <p class="resume">Aquí encontrará libros de todo tipo</p>
      </div>
      <div class="separate">
        <div class="separate-left"></div>
        <div class="separate-icon">
          <font-awesome-icon
            icon="fa-solid fa-book"
            size="2x"
          ></font-awesome-icon>
        </div>
        <div class="separate-right"></div>
      </div>
      <div class="content__section-advantages">
        <HomeAdvantage
          icon="fa-bookmark"
          text="Si no te gusta leer, no has encontrado el libro correcto."
          author="J.K. Rowling"
        />
        <HomeAdvantage
          icon="fa-gift"
          text="Un libro es un regalo que puedes abrir una y otra vez."
          author="Garrison Keillor"
        />
        <HomeAdvantage
          icon="fa-fire"
          text="Aprender a leer es encender un fuego; cada sílaba pronunciada es una chispa."
          author="Víctor Hugo"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HomeAdvantage from "./HomeAdvantage.vue";
</script>

<style scoped>
.content {
  width: 100%;
  min-height: 60vh;
  /* height: auto; */
  /* background: pink; */
  margin: 2rem 0;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;
}
.content__section {
  /* background: orange; */
  color: var(--color-text);
  width: 80%;
  text-align: center;
}
.content__section .title {
  font-size: 1.5rem;
  margin: 0;
}
.content__section .resume {
  font-size: 1rem;
  margin: 0.7rem 0;
}
.content__section .separate {
  /* background: blue; */
  width: 100%;
  /* width: 1rem; */
  /* height: 1rem; */
  position: relative;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
}
.content__section .separate .separate-left,
.content__section .separate .separate-right {
  width: 48%;
  height: 1px;
  background: var(--color-primary);
}
.content__section .separate .separate-icon {
  width: 4%;
  color: var(--color-primary);
}

.content__section-advantages {
  /* background: purple; */
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
}
</style>
