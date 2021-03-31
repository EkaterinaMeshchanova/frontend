<template>
  <li class="book">
    <img :src="photo" class="book__image">
    <p class="book__author">{{author}}</p>
    <p class="book__name">{{name}}</p>
    <p class="book__price">{{price}}$</p>
  </li>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    author: String,
    name: String,
    price: String,
    photo: String,
  },
})
export default class BookItem extends Vue {
  msg!: string
}
</script>
<style scoped>
  .book {
    height: 380px;
    width: 250px;
    margin: 0 24px 24px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .book__image {
    height: 300px;
    width: 100%;
  }
  .book__author {
    color: gray;
    font-style: italic;
    margin: 8px 0 0;
  }
  .book__name {
    font-weight: 600;
    font-style: italic;
    margin: 8px 0 0;
  }
  .book__price {
    font-weight: 600;
    margin: 8px 0 0;
  }
</style>
