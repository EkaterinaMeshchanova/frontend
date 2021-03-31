<template>
  <div class="login">
      <Input
        type="email"
        @change="handleInput"
        label="Email"
        :value="email"
        :error="emailError"
      />
      <Input
        type="password"
        :value="password"
        @change="handleInput"
        label="Password"
        :error="passwordError"
      />
      <Button title="Login" @click="handleClick"/>
      <button class="outlined-button" @click="handleClickSignUp">Sign up</button>
      <Error :errorText="errorText"/>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Input from '@/components/Common/Input.vue';
import Button from '@/components/Common/Button.vue';
import Error from '@/components/Common/Error.vue';

@Options({
  components: {
    Input,
    Button,
    Error,
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
    errorText() {
      return this.$store.getters.errorText;
    },
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    handleClick() {
      this.$store.dispatch('handleClickSubmitLogin');
    },
    handleInput(e: any) {
      this.$store.commit('onChangeInput', { value: e.target.value, key: e.target.type });
    },
    handleClickSignUp() {
      this.$store.commit('clearStore');
      this.$router.push('/signup');
    },
  },
})
export default class Login extends Vue {}
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
  .outlined-button {
    border: none;
    background: none;
    color: rgba(45, 161, 238, 0.685);
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;
  }
</style>
