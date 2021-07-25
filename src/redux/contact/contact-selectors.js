import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => {
  return state.contact;
};

export const getFilter = (state) => {
  return state.contact.filter;
};

export const getContactsItem = (state) => {
  return state.contact.items;
};

export const getFilterContacts = createSelector(
  [getContactsItem, getFilter],
  (items, filter) => {
    return items.filter(({ name }) => name.toLowerCase().includes(filter));
  }
);
