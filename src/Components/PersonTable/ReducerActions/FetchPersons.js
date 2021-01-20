import produce from "immer";
import { registerReducer } from "../../../StateSetup/RootReducer";

const BASE_RANDOM_USERS_URL = process.env.REACT_APP_BASE_RANDOM_USERS_URL;
const OK = 200;

export const RESPONSE_ACTION_NAME = "ACTION_FETCH_PEOPLE_RESPONSE";
export const ERROR_ACTION_NAME = "ACTION_FETCH_PEOPLE_ERROR";

export const FetchPersons = page => {
  return async dispatch => {
    const response = await fetch(
      `${BASE_RANDOM_USERS_URL}/?page=${page}&results=10&seed=abc&?exc=login`
    );

    if (response.status === OK) {
      const responseBody = await response.json();

      const personList = responseBody.results.map(result => {
        return {
          firstName: result.name.first,
          lastName: result.name.last,
          phoneNumber: result.phone,
          imageUrl: result.picture.large,
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
