import axios from 'axios';
import validate from '@/helpers/validate';
import API from '@/utils/api';
import { AuthInitialState, InputPayloadType } from './declaration';

const CONSTANTS = API.constants;

const authState = {
  state: () => ({
    email: '',
    password: '',
    passwordError: '',
    emailError: '',
    firstName: '',
    lastName: '',
    repeatPassword: '',
    errorText: '',
  }),
  mutations: {
    onChangeInput(state: AuthInitialState, payload: InputPayloadType) {
      const { key, value } = payload;
      state[key] = value;
    },
    setEmailError(state: AuthInitialState, payload: string) {
      state.emailError = payload;
    },
    setErrorText(state: AuthInitialState, payload: string) {
      state.errorText = payload;
    },
    setPasswordError(state: AuthInitialState, payload: string) {
      state.passwordError = payload;
    },
    clearStore(state: AuthInitialState) {
      state.emailError = '';
      state.email = '';
      state.firstName = '';
      state.lastName = '';
      state.password = '';
      state.passwordError = '';
      state.repeatPassword = '';
    },
  },
  actions: {
    async handleClickSubmitLogin(context: any) {
      try {
        const isValidEmail = validate.validateEmail(context.state.email);
        const isValidPassword = validate.validatePassword(context.state.password);
        const emailErrorText = isValidEmail ? '' : 'Email is not correct';
        const passwordErrorText = isValidPassword ? '' : 'Password is not correct';
        context.commit('setEmailError', emailErrorText);
        context.commit('setPasswordError', passwordErrorText);
        if (!isValidPassword || !isValidEmail) {
          throw Error('Data is not correct');
        }
        const { data } = await axios({
          method: 'post',
          url: CONSTANTS.LOGIN,
          data: {
            email: context.state.email,
            password: context.state.password,
          },
        });
        context.commit('setUserData', data.user);
      } catch (ex) {
        if (typeof ex === 'string') {
          context.commit('setErrorText', ex);
        }
        console.log(ex);
      }
    },
    async handleClickSubmitSignUp(context: any) {
      try {
        const isValidEmail = validate.validateEmail(context.state.email);
        const isValidPassword = validate.validatePassword(context.state.password);
        const isValidRepeatPassword = validate.validatePassword(context.state.repeatPassword);
        let passwordErrorText = isValidRepeatPassword && isValidPassword ? '' : 'Password is not correct';
        if (!passwordErrorText && context.state.repeatPassword !== context.state.password) {
          passwordErrorText = 'Passwords must match';
        }
        const emailErrorText = isValidEmail ? '' : 'Email is not correct';
        context.commit('setEmailError', emailErrorText);
        context.commit('setPasswordError', passwordErrorText);

        if (!isValidPassword
          || !isValidEmail
          || !isValidRepeatPassword
          || context.state.repeatPassword !== context.state.password
          || !context.state.firstName.trim()
          || !context.state.lastName.trim()) {
          throw Error('Data is not correct');
        }
        const { data } = await axios({
          method: 'post',
          url: CONSTANTS.REGISTER,
          data: {
            email: context.state.email,
            password: context.state.password,
            firstName: context.state.firstName,
            lastName: context.state.lastName,
          },
        });
        context.commit('setUserData', data.user);
      } catch (ex) {
        if (typeof ex === 'string') {
          context.commit('setErrorText', ex);
        } else {
          const errorEntries = Object.entries(ex.response.data);
          const errors: string[] = [];
          errorEntries.forEach((item:any) => {
            errors.push(item[1]);
          });
          console.log(errors);
          const errorText = errors.join(' ');
          context.commit('setErrorText', errorText);
        }
        console.log(ex);
      }
    },
  },
  getters: {
    emailError(state: AuthInitialState) {
      return state.emailError;
    },
    passwordError(state: AuthInitialState) {
      return state.passwordError;
    },
    email(state: AuthInitialState) {
      return state.email;
    },
    password(state: AuthInitialState) {
      return state.password;
    },
    firstName(state: AuthInitialState) {
      return state.firstName;
    },
    lastName(state: AuthInitialState) {
      return state.lastName;
    },
    repeatPassword(state: AuthInitialState) {
      return state.repeatPassword;
    },
    errorText(state: AuthInitialState) {
      return state.errorText;
    },
  },
};

export default authState;
