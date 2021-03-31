<template>
  <ul class="books">
    <BookItem
      v-for="book in books"
      :key="book.id"
      :name="book.name"
      :author="book.author"
      :price="book.price"
      :photo="book.photo"
    />
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BookItem from './BookItem.vue';

@Options({
  components: {
    BookItem,
  },
  props: {
    msg: String,
  },
  watch: {
    selectedCathegory() {
      this.$store.dispatch('getBooks');
    },
  },
  computed: {
    books() {
      return this.$store.getters.books;
    },
    selectedCathegory() {
      return this.$store.getters.selectedCathegory;
    },
  },
  mounted() {
    this.$store.dispatch('getBooks');
  },
})
export default class BookList extends Vue {
  msg!: string
}
</script>

<style scoped>
  ul {
      list-style-type: none;
  }
  .books {
    display: flex;
    flex-wrap: wrap;
  }
</style>
