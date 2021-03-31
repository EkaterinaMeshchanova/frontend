import { UserInitialState, UserType } from './declaration';

const userState = {
  state: () => ({
    user: null,
  }),
  mutations: {
    setUserData(state: UserInitialState, payload:UserType) {
      state.user = payload;
    },
  },
  actions: {},
  getters: {
    user(state: UserInitialState) {
      return state.user;
    },
  },
};

export default userState;
