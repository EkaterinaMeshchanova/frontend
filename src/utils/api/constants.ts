const ADDRESS = '127.0.0.1:3000';
const URL = `http://${ADDRESS}`;
const API = '/api/v1';
const AUTH = `${URL}${API}/auth`;
const USER = `${URL}${API}/user`;
const BOOK = `${URL}${API}/book`;
const LOGIN = `${AUTH}/login`;
const REGISTER = `${USER}/register`;
const CATHEGORIES = `${BOOK}/cathegories`;

export default {
  API,
  LOGIN,
  URL,
  REGISTER,
  BOOK,
  CATHEGORIES,
};
