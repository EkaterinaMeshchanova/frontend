import { createStore } from 'vuex';
import authState from './auth';
import userState from './user';
import bookState from './books';

export default createStore({
  modules: {
    authState,
    userState,
    bookState,
  },
});
