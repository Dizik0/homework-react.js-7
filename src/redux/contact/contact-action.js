import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction("fetchContactRequest");
export const fetchContactSuccess = createAction("fetchContactSuccess");
export const fetchContactError = createAction("fetchContactError");

export const addContactRequest = createAction("addContactRequest");
export const addContactSuccess = createAction("addContactSuccess");
export const addContactError = createAction("addContactError");

export const deleteContactRequest = createAction("deleteContactRequest");
export const deleteContactSuccess = createAction("deleteContactSuccess");
export const deleteContactError = createAction("deleteContactError");

export const filterContactRequest = createAction("filterContactRequest");
export const filterContactSuccess = createAction("filterContactSuccess");
export const filterContactError = createAction("filterContactError");

export const filterContact = createAction("filterContact");
