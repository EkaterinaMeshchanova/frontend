<template>
  <div class="home">
    <div>
      <ChategoryList />
      <PriceRange />
    </div>
    <BookList msg="Karaambaa"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ChategoryList from '@/components/Filters/CathegoryList.vue';
import BookList from '@/components/Books/BookList.vue'; // @ is an alias to /src
import PriceRange from '@/components/Filters/PriceRange.vue';

@Options({
  components: {
    BookList,
    ChategoryList,
    PriceRange,
  },
  mounted() {
    this.$store.dispatch('getCathegories');
  },
})
export default class Home extends Vue {}
</script>
<style scoped>
 .home {
   display: flex;
 }
</style>
