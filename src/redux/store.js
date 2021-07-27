import contactReducer from "./contact/contact-reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authorizationReducer from "./authorization/authorization-reducer";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: {
    contact: contactReducer,
    authorization: authorizationReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
