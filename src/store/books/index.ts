import axios from 'axios';
import API from '@/utils/api';
import { BookInitialState, BookResponseType, BookType } from './declaration';

const CONSTANTS = API.constants;

const bookState = {
  state: () => ({
    books: [],
    cathegories: [],
    selectedCathegory: 'All',
  }),
  mutations: {
    getCathegories(state: BookInitialState, payload: string[]) {
      state.cathegories = payload;
    },
    getBooks(state: BookInitialState, payload: BookType[]) {
      state.books = payload;
    },
    setSelectedCathegory(state: BookInitialState, payload: string) {
      state.selectedCathegory = payload;
    },
  },
  actions: {
    async getBooks(context: any) {
      try {
        console.log('selectedCathegory', context.state.selectedCathegory);
        const { state: { selectedCathegory } } = context;
        const cathegory = selectedCathegory[0].toLowerCase() + selectedCathegory.slice(1);
        const response = await axios({
          method: 'get',
          url: CONSTANTS.BOOK,
          params: {
            cathegory,
          },
        });
        const books = response.data.map((item: BookResponseType) => ({
          author: item.author,
          name: item.name,
          photo: item.image.length
            ? item.image[0].url
            : 'https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg',
          price: item.price,
        }));
        context.commit('getBooks', books);
      } catch (ex) {
        console.log(ex);
      }
    },
    async getCathegories(context: any) {
      try {
        const response = await axios({
          method: 'get',
          url: CONSTANTS.CATHEGORIES,
        });
        context.commit('getCathegories', response.data);
      } catch (ex) {
        console.log(ex);
      }
    },
  },
  getters: {
    cathegories(state: BookInitialState) {
      return state.cathegories;
    },
    books(state: BookInitialState) {
      return state.books;
    },
    selectedCathegory(state: BookInitialState) {
      return state.selectedCathegory;
    },
  },
};

export default bookState;
