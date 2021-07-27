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

// axios.defaults.baseURL = "http://localhost:3000";

export const addContact =
  ({ name, number }) =>
  async (dispatch) => {
    const contact = { name, number, id: uuidv4() };
    dispatch(addContactRequest());

    try {
      const { data } = await axios.post("/contact", contact);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error.message));
    }
  };

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contact/${id}`);

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

export const fetchContact = () => async (dispatch) => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get("/contact");
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};
