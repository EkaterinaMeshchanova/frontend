<template>
    <li @click="setSelectedCathegory">
     <span :class="[selectedCathegory === value ? activeClass : '']">{{value}}</span>
    </li>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    value: String,
  },
  data() {
    return {
      activeClass: 'active',
    };
  },
  computed: {
    selectedCathegory() {
      return this.$store.getters.selectedCathegory;
    },
  },
  methods: {
    setSelectedCathegory() {
      this.$store.commit('setSelectedCathegory', this.value);
    },
  },
})
export default class Cathegory extends Vue {}
</script>
<style scoped>
  span {
    font-size: 24px;
    margin-bottom: 8px;
  }
  .active {
    font-weight: 600;
  }
  li {
    cursor: pointer;
  }
  li:hover {
    opacity: 0.5;
  }
</style>
