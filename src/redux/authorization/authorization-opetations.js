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
import "@pnotify/core/dist/BrightTheme.css";
import { success, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";

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
    success({ text: "Created!" });
  } catch (errors) {
    if (errors.response.status === 400) {
      error({
        text: "ERROR, user creation error",
      });
    } else if (errors.response.status === 500) {
      error({
        text: "ERROR server",
      });
    }
    dispatch(registerError(errors.payload));
  }
};

export const login = (user) => async (dispatch) => {
  dispatch(loginReauest());

  try {
    const { data } = await axios.post("/users/login", user);
    token.set(data.token);
    dispatch(loginSuccsess(data));
    success({ text: "Success!" });
  } catch (errors) {
    error({
      text: "ERROR, wrong login or password",
    });

    // dispatch(loginError(errors.payload));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(logoutRequest());

  try {
    await axios.post("/users/logout");

    token.unset();

    dispatch(logoutSuccsess());
  } catch (errors) {
    error({
      text: "ERROR, failed to exit",
    });

    dispatch(logoutError(errors.payload));
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
  } catch (errors) {
    error({
      text: "ERROR, the request failed",
    });
    dispatch(getContactsError(errors.payload));
  }
};
