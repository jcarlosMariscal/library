<template>
  <div class="content">
    <div class="content__figures">
      <div class="figure figure-one">
        <a
          href="https://www.freepik.com/free-vector/cozy-home-composition-with-character-girl-warm-clothes-reading-book-lounge-chair-illustration_17345961.htm#page=3&query=reading%20book&position=46&from_view=search&track=ais"
          class="figure-a"
          ><img class="figure-img" src="../assets/img/reader1.png" alt=""
        /></a>
      </div>
      <div class="figure figure-two">
        <a
          href="https://www.freepik.com/free-vector/hand-drawn-people-studying-from-home-with-book_15635334.htm#page=4&query=reading%20book&position=32&from_view=search&track=ais"
          class="figure-a"
          ><img class="figure-img" src="../assets/img/reader2.png" alt=""
        /></a>
      </div>
      <div class="figure-container">
        <div class="container">
          <h1 class="container-welcome">Bienvenido a Biblioteca Virtual</h1>
          <a href="" class="btn btn-search">Buscar libros</a>
        </div>
      </div>
      <div class="figure-separate"></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.content {
  /* width: 100%; */
  height: 70vh;
  background: var(--color-primary);
}
.content .content__figures {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.content .content__figures .figure {
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  /* background: rgba(255, 255, 255, 0.4); */

  position: absolute;
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.content .content__figures .figure::before {
  content: ""; /* Crea un pseudoelemento */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  filter: blur(1px);
  z-index: -1;
}
.content .content__figures .figure.figure-one {
  bottom: 40%;
  left: 10%;
  animation: home-circle 1.5s infinite alternate both;
}
.content .content__figures .figure.figure-two {
  top: 35%;
  right: 5%;
  animation: home-circle 1.5s infinite alternate both;
  animation-delay: 1.5s;
}
@keyframes home-circle {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(0.8rem);
  }
}
.figure-a {
  width: 90%;
}
.figure-a .figure-img {
  width: 100%;
}
.figure-container {
  /* border-radius: 50%; */
  /* background: rgba(255, 255, 255, 0.4); */

  position: absolute;
  display: flex !important;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  /* background: green; */
  z-index: 5;
}
.figure-container .container {
  position: relative;
  /* background: var(--color-secondary); */
  /* background: rgba(255, 255, 255, 0.2); */
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
}
.figure-container .container .container-welcome {
  color: var(--color-white);
  font-size: 2rem;
}
.btn-search:hover {
  transition: all 0.2s ease-in-out;
  background: var(--color-text);
  color: var(--color-white);
}
.figure-separate {
  position: absolute;
  display: flex !important;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  /* background: green; */
  z-index: 1;
}
.figure-separate::before {
  content: "";
  position: absolute;
  bottom: -4%;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.2rem;
  background: var(--color-primary);
  transform: rotate(45deg);
  z-index: 1;
}

@media screen and (max-width: 1000px) {
  .content .content__figures .figure {
    width: 12rem;
    height: 12rem;
  }
  .content .content__figures .figure.figure-one {
    bottom: 50%;
    left: 4%;
  }
  .content .content__figures .figure.figure-two {
    top: 45%;
    right: 4%;
    animation: home-circle 1.5s infinite alternate both;
    animation-delay: 1.5s;
  }
}
@media screen and (max-width: 770px) {
  .content .content__figures .figure {
    width: 10rem;
    height: 10rem;
  }
  .content .content__figures .figure.figure-one {
    bottom: 60%;
    left: 10%;
  }
  .content .content__figures .figure.figure-two {
    top: 50%;
    right: 6%;
  }
}
@media screen and (max-width: 550px) {
  .content .content__figures .figure {
    width: 8rem;
    height: 8rem;
  }
  .content .content__figures .figure.figure-one {
    bottom: 64%;
    left: 20%;
  }
  .content .content__figures .figure.figure-two {
    top: 62%;
    right: 5%;
  }
  .container-welcome {
    font-size: 1.5rem !important;
  }
}
@media screen and (max-width: 430px) {
  .content .content__figures .figure {
    width: 8rem;
    height: 8rem;
  }
  .content .content__figures .figure.figure-two {
    top: 68%;
    right: 5%;
  }
}
@media screen and (max-width: 350px) {
  .content .content__figures .figure {
    width: 6rem;
    height: 6rem;
  }
}
</style>
