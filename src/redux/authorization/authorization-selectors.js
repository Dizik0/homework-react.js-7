// import { createSelector } from "@reduxjs/toolkit";

export const getAuthorized = (state) => state.authorization.token;
export const getNameAuthorized = (state) => state.authorization.user.name;
