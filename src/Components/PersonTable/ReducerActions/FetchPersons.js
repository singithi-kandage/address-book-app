import axios from "axios";
import produce from "immer";
import { registerReducer } from "../../../StateSetup/RootReducer";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const OK = 200;

export const RESPONSE_ACTION_NAME = "ACTION_FETCH_PEOPLE_RESPONSE";
export const ERROR_ACTION_NAME = "ACTION_FETCH_PEOPLE_ERROR";

export const FetchPersons = (page) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/users?page=${page}`);

      if (response.status === OK) {
        const data = response.data.data;

        const personList = data.map((result) => {
          return {
            firstName: result.first_name,
            lastName: result.first_name,
            phoneNumber: result.email,
            imageUrl: result.avatar,
          };
        });
        dispatch({
          type: RESPONSE_ACTION_NAME,
          personList,
        });
      } else {
        dispatch({
          type: ERROR_ACTION_NAME,
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: ERROR_ACTION_NAME,
      });
    }
  };
};

export const responseReducer = produce((state, action) => {
  state.personData.personList = action.personList;
  state.personData.hasError = false;
});

export const errorReducer = produce((state, action) => {
  state.personData.hasError = true;
});

registerReducer(RESPONSE_ACTION_NAME, responseReducer);
registerReducer(ERROR_ACTION_NAME, errorReducer);
