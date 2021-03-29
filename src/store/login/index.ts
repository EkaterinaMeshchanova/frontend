import axios from 'axios';
import validate from '@/helpers/validate';
import API from '@/utils/api';
import { LoginInitialState } from './declaration';

const loginState = {
  state: () => ({
    email: '',
    password: '',
    passwordError: '',
    emailError: '',
  }),
  mutations: {
    onChangeEmail(state: LoginInitialState, payload: string) {
      state.email = payload;
      console.log(state);
    },
    onChangePassword(state: LoginInitialState, payload: string) {
      state.password = payload;
      console.log(state);
    },
    handleClickSubmit(state: LoginInitialState) {
      console.log('handleClickSubmit');
    },
    setEmailError(state: LoginInitialState, payload: string) {
      state.emailError = payload;
    },
    setPasswordError(state: LoginInitialState, payload: string) {
      state.passwordError = payload;
    },
  },
  actions: {
    async handleClickSubmit(context: any) {
      try {
        const isValidEmail = validate.validateEmail(context.state.email);
        const isValidPassword = validate.validatePassword(context.state.password);
        const emailErrorText = isValidEmail ? '' : 'Email is not correct';
        const passwordErrorText = isValidPassword ? '' : 'Password is not correct';
        context.commit('setEmailError', emailErrorText);
        context.commit('setPasswordError', passwordErrorText);
        if (!isValidPassword || !isValidEmail) {
          throw Error();
        }
        console.log('1212');
        const data = await axios({
          method: 'post',
          url: API.constants.LOGIN,
          data: {
            email: context.state.email,
            password: context.state.password,
          },
        });
        console.log('!@!@!@', data);
      } catch (ex) {
        console.log(ex);
      }
    },
  },
  getters: {
    emailError(state: LoginInitialState) {
      return state.emailError;
    },
    passwordError(state: LoginInitialState) {
      return state.passwordError;
    },
    email(state: LoginInitialState) {
      return state.email;
    },
    password(state: LoginInitialState) {
      return state.password;
    },
  },
};

export default loginState;
