import axios from "axios";
import update from "immutability-helper";

const OK = 200;

export const RESPONSE_ACTION_NAME = "ACTION_FETCH_PEOPLE_RESPONSE";
export const ERROR_ACTION_NAME = "ACTION_FETCH_PEOPLE_ERROR";

export const FetchPersons = (page) => {
  return async (dispatch) => {
    try {
      axios
        .get(`/api/?page=${page}&results=10&seed=abc&?exc=login`, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        })
        .then((response) => {
          if (response.status === OK) {
            const data = response.data.results;

            const personList = data.map((result) => {
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
        });
    } catch (error) {
      console.error(error);
      dispatch({
        type: ERROR_ACTION_NAME,
      });
    }
  };
};

export const FetchPersonsReducer = (state, action) => {
  if (
    action.type !== RESPONSE_ACTION_NAME &&
    action.type !== ERROR_ACTION_NAME
  ) {
    return state;
  }

  switch (action.type) {
    case "ACTION_FETCH_PEOPLE_RESPONSE":
      return update(state, {
        personData: {
          hasError: { $set: false },
          personList: { $set: action.personList },
        },
      });
    case "ACTION_FETCH_PEOPLE_ERROR":
      return update(state, {
        personData: {
          hasError: { $set: true },
          personList: { $set: [] },
        },
      });
    default:
      return state;
  }
};

export default {
  FetchPersons,
  FetchPersonsReducer,
  RESPONSE_ACTION_NAME,
  ERROR_ACTION_NAME,
};
