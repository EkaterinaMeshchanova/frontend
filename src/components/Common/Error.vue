<template>
    <p>{{errorText}}</p>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  emits: [],
  props: {
    errorText: String,
  },
})
export default class Error extends Vue {}
</script>
