<template>
  <button @click="click">
    <span>{{title}}</span>
  </button>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  emits: [],
  props: {
    title: String,
  },
})
export default class Button extends Vue {}
</script>
<style scoped>
    button {
      height: 40px;
      width: 300px;
    }
</style>
