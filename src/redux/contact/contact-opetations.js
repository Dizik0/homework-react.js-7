import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "./contact-action";
import "@pnotify/core/dist/BrightTheme.css";
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";

export const addContact =
  ({ name, number }) =>
  async (dispatch) => {
    const contact = { name, number, id: uuidv4() };
    dispatch(addContactRequest());

    try {
      const { data } = await axios.post("/contacts", contact);

      dispatch(addContactSuccess(data));
    } catch (errors) {
      if (errors.response.status === 400) {
        error({
          text: "ERROR, Contact creation error",
        });
      }
      dispatch(addContactError(errors.message));
    }
  };

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(deleteContactSuccess(id));
  } catch (errors) {
    if (errors.response.status === 404) {
      error({
        text: "ERROR, there is no such owner's collection",
      });
    } else if (errors.response.status === 500) {
      error({
        text: "ERROR server",
      });
    }
    dispatch(deleteContactError(errors.message));
  }
};

export const fetchContact = () => async (dispatch) => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get("/contacts");

    dispatch(fetchContactSuccess(data));
  } catch (errors) {
    if (errors.response.status === 404) {
      error({
        text: "ERROR, there is no such owner's collection",
      });
    } else if (errors.response.status === 500) {
      error({
        text: "ERROR server",
      });
    }
    dispatch(fetchContactError(errors.message));
  }
};
