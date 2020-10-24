import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://raschitalochka.goit.co.ua/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const logOut = () => dispatch => {
  dispatch(authActions.logoutRequest());
  axios
    //   review depends on route!!!
    .post('/api/logout')
    .then(() => dispatch(authActions.logoutSuccess()), token.unset())
    .catch(error => dispatch(authActions.logoutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  axios
    //   review depends on route!!!
    .get('/users/current')
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch(error => dispatch(authActions.getCurrentUserError(error.message)));
};

// need to create!!!
const addIncome = () => dispatch => {};
const addCost = () => dispatch => {};

export default { logOut, getCurrentUser, addIncome, addCost };
