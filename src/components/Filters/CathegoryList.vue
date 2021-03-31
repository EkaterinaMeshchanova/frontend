<template>
  <ul class="chategories">
    <Cathegory v-for="cathegory in cathegories" :key="cathegory" :value="cathegory"/>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Cathegory from './Cathegory.vue';

@Options({
  components: {
    Cathegory,
  },
  computed: {
    cathegories() {
      return this.$store.getters.cathegories;
    },
  },
})
export default class ChategoryList extends Vue {}
</script>
<style scoped>
  ul {
    width: 300px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
  }
</style>
