import { createStore } from 'vuex';
import loginState from './login';

export default createStore({
  modules: {
    loginState,
  },
});
