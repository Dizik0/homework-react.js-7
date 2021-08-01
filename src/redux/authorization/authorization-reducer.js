import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
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

const loadingLogReg = createReducer(false, {
  [registerReauest]: () => true,
  [registerSuccsess]: () => false,
  [registerError]: () => false,
  [loginReauest]: () => true,
  [loginSuccsess]: () => false,
  [loginError]: () => false,
  [logoutRequest]: () => true,
  [logoutSuccsess]: () => false,
  [logoutError]: () => false,
  [getContactsReauest]: () => true,
  [getContactsSuccsess]: () => false,
  [getContactsError]: () => false,
});

export default combineReducers({
  loadingLogReg,
  authorization,
  user,
  token,
  error,
});
