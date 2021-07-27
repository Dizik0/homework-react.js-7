import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  registerReauest,
  registerSuccsess,
  registerError,
  loginReauest,
  loginSuccsess,
  loginError,
} from "./authorization-actions";
const initialContactState = { name: null, email: null };

const user = createReducer(initialContactState, {
  [registerSuccsess]: (_, { payload }) => payload.user,
  [loginSuccsess]: (_, { payload }) => payload.user,
});

// const error = createReducer([], {});

const token = createReducer(null, {
  [registerSuccsess]: (_, { payload }) => payload.token,
  [loginSuccsess]: (_, { payload }) => payload.token,
});
const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
