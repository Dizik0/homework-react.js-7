import axios from "axios";
import {
  registerReauest,
  registerSuccsess,
  registerError,
  loginReauest,
  loginSuccsess,
  loginError,
} from "./authorization-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const register = (user) => async (dispatch) => {
  dispatch(registerReauest());
  try {
    const { data } = await axios.post("/users/signup", user);
    dispatch(registerSuccsess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const login = (user) => async (dispatch) => {
  dispatch(loginReauest());
  try {
    const { data } = await axios.post("/users/login", user);
    dispatch(loginSuccsess(data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};
