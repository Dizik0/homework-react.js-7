import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  registerSuccsess,
  registerError,
  loginSuccsess,
  loginError,
  logoutSuccsess,
  logoutError,
  getContactsSuccsess,
  getContactsError,
} from "./authorization-actions";
const initialContactState = { name: null, email: null };

const user = createReducer(initialContactState, {
  [registerSuccsess]: (_, { payload }) => payload.user,
  [loginSuccsess]: (_, { payload }) => payload.user,
  [logoutSuccsess]: () => initialContactState,
  [getContactsSuccsess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccsess]: (_, { payload }) => payload.token,
  [loginSuccsess]: (_, { payload }) => payload.token,
  [logoutSuccsess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getContactsError]: (_, { payload }) => payload,
});

const authorization = createReducer(false, {
  [registerSuccsess]: () => true,
  [loginSuccsess]: () => true,
  [getContactsSuccsess]: () => true,
  [logoutSuccsess]: () => false,
  [registerError]: () => false,
  [loginError]: () => false,
  [logoutError]: () => false,
  [getContactsError]: () => false,
});

export default combineReducers({
  authorization,
  user,
  token,
  error,
});
