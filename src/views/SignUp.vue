<template>
  <div class="signup">
     <Input
      type="text"
      name="firstName"
      @change="handleInput"
      label="First name"
      :value="firstName"
    />
    <Input
      type="text"
      name="lastName"
      @change="handleInput"
      label="Last name"
      :value="lastName"
    />
     <Input
      type="email"
      @change="handleInput"
      label="Email"
      name="email"
      :value="email"
      :error="emailError"
    />
    <Input
      type="password"
      :value="password"
      name="password"
      @change="handleInput"
      label="Password"
      :error="passwordError"
    />
    <Input
      type="password"
      name="repeatPassword"
      :value="repeatPassword"
      @change="handleInput"
      label="Repeat password"
      :error="passwordError"
    />
    <Button title="Sign Up" @click="handleClick" />
    <button class="outlined-button" @click="handleClickLogin">Login</button>
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
    firstName() {
      return this.$store.getters.firstName;
    },
    lastName() {
      return this.$store.getters.lastName;
    },
    repeatPassword() {
      return this.$store.getters.repeatPassword;
    },
    errorText() {
      return this.$store.getters.errorText;
    },
  },
  methods: {
    handleClick() {
      this.$store.dispatch('handleClickSubmitSignUp');
    },
    handleInput(e: any) {
      this.$store.commit('onChangeInput', { value: e.target.value, key: e.target.name });
    },
    handleClickLogin() {
      this.$store.commit('clearStore');
      this.$router.push('/login');
    },
  },
})
export default class SignUp extends Vue {}
</script>
<style scoped>
.signup {
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
