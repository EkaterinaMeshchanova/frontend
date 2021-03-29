<template>
  <div class="login">
      <Input
        type="text"
        @change="handleChangeEmail"
        label="Email"
        :value="email"
        :error="emailError"
      />
      <Input
        type="password"
        :value="password"
        @change="handleChangePassword"
        label="Password"
        :error="passwordError"
      />
      <Button title="Login" @click="handleClick"/>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Input from '@/components/Common/Input.vue';
import Button from '@/components/Common/Button.vue';

@Options({
  components: {
    Input,
    Button,
  },
  computed: {
    emailError() {
      return this.$store.getters.emailError;
    },
    passwordError() {
      return this.$store.getters.passwordError;
    },
    email() {
      return this.$store.getters.email;
    },
    password() {
      return this.$store.getters.password;
    },
  },
  methods: {
    handleClick() {
      this.$store.dispatch('handleClickSubmit');
    },
    handleChangeEmail(e: any) {
      this.$store.commit('onChangeEmail', e.target.value);
    },
    handleChangePassword(e: any) {
      this.$store.commit('onChangePassword', e.target.value);
    },
  },
})
export default class Home extends Vue {}
</script>
<style scoped>
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    padding: 16px;
    border: 1px gray solid;
    width: 332px;
    border-radius: 4px;
  }
</style>
