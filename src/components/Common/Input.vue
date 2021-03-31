<template>
  <div class="input">
      <label>{{label}}:</label>
      <input :type="type" :value="value" @change="$emit(e)" :name="name"/>
      <p class="error">{{error}}</p>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  emits: [],
  props: {
    type: String,
    label: String,
    error: String,
    value: String,
    name: String,
  },
})
export default class Input extends Vue {}
</script>
<style scoped>
 .input {
   display: flex;
   flex-direction: column;
   align-content: flex-start;
   align-items: flex-start;
   width: 300px;
 }
 input {
   width: 300px;
   height: 40px;
   box-sizing: border-box;
 }
 .error {
   color:#e62d2da6;
 }

</style>
