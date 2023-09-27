<template>
  <div class="content">
    <div class="content__items">
      <div class="item book" v-for="(book, index) in books" :key="index">
        <img
          class="book-front-page"
          :src="
            book.volumeInfo.imageLinks?.thumbnail ||
            'https://imgv2-2-f.scribdassets.com/img/document/130336851/298x396/08ae9d3020/1427911312?v=1'
          "
          :alt="book.volumeInfo.title"
          :title="book.volumeInfo.title"
        />
        <div class="book-resume">
          <h3>{{ book.volumeInfo.subtitle || book.volumeInfo.title }}</h3>
          <div class="autor-date">
            <p v-if="!book.volumeInfo.authors">Sin autor registrado</p>
            <a
              href=""
              v-for="(author, index) in book.volumeInfo.authors"
              :key="index"
              >{{ author }}</a
            >
            <p>{{ book.volumeInfo.publishedDate || "Sin fecha" }}</p>
          </div>
          <p
            class="description"
            v-html="book.volumeInfo.description || 'Sin descripción'"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { auth } from "googleapis/build/src/apis/abusiveexperiencereport";
import { ref } from "vue";
// PreviewLink

// interface Book {}

let books = ref([]);
const getBooks = async () => {
  let res = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=vue&key=AIzaSyAM4juY3va2MU1NDhRehIEhlE79Z6qZaC4"
  );
  // let res = await fetch(
  //   "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAM4juY3va2MU1NDhRehIEhlE79Z6qZaC4"
  // );
  let resw = await res.json();
  // console.log(resw);
  books.value = resw.items;
  console.log(books.value);
};
getBooks();
</script>

<style scoped>
.content {
  box-sizing: border-box;
  /* background: purple; */
  /* width: 100%; */
  min-height: 100vh;
  margin: 1rem;
}
.content__items {
  /* overflow-x: hidden; */
  box-sizing: border-box;
  /* max-width: 100%; */
  display: flex;
  /* align-items: center; */
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.book-front-page {
  height: 13rem;
  /* width: 100%; */
  /* object-fit: cover; */
}
.item {
  width: 30rem;
  /* border: 1px solid var(--color-secondary); */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
}
.autor-date {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.book-resume h3,
.book-resume p {
  margin: 0.5rem;
}
.description {
  text-align: justify;
  /* width: 20rem;
  height: 10rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden; */
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
</style>
