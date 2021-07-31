import { createAction } from "@reduxjs/toolkit";

export const registerReauest = createAction("/authorization/registerReauest");
export const registerSuccsess = createAction("/authorization/registerSuccsess");
export const registerError = createAction("/authorization/registerError");

export const loginReauest = createAction("/authorization/loginReauest");
export const loginSuccsess = createAction("/authorization/loginSuccsess");
export const loginError = createAction("/authorization/loginError");

export const logoutRequest = createAction("/authorization/logoutReauest");
export const logoutSuccsess = createAction("/authorization/logoutSuccsess");
export const logoutError = createAction("/authorization/logoutError");

export const getContactsReauest = createAction(
  "/authorization/getContactsReauest"
);
export const getContactsSuccsess = createAction(
  "/authorization/getContactsSuccsess"
);
export const getContactsError = createAction("/authorization/getContactsError");
