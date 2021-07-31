import axios from "axios";
import {
  registerReauest,
  registerSuccsess,
  registerError,
  loginReauest,
  loginSuccsess,
  loginError,
  logoutRequest,
  logoutSuccsess,
  logoutError,
  getContactsReauest,
  getContactsSuccsess,
  getContactsError,
} from "./authorization-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = (user) => async (dispatch) => {
  dispatch(registerReauest());

  try {
    const { data } = await axios.post("/users/signup", user);
    token.set(data.token);
    dispatch(registerSuccsess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const login = (user) => async (dispatch) => {
  dispatch(loginReauest());

  try {
    const { data } = await axios.post("/users/login", user);
    token.set(data.token);
    dispatch(loginSuccsess(data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(logoutRequest());

  try {
    await axios.post("/users/logout");

    token.unset();

    dispatch(logoutSuccsess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    authorization: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  dispatch(getContactsReauest());

  try {
    token.set(persistedToken);
    const { data } = await axios.get("/users/current");

    dispatch(getContactsSuccsess(data));
  } catch (error) {
    getContactsError(error.message);
  }
};
