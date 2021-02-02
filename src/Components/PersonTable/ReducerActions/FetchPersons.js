import axios from "axios";
import update from "immutability-helper";

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
        console.log(data);
        const personList = data.map((result) => {
          return {
            firstName: result.first_name,
            lastName: result.last_name,
            email: result.email,
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

export const FetchPersonsReducer = (state, action) => {
  if (
    action.type !== RESPONSE_ACTION_NAME &&
    action.type !== ERROR_ACTION_NAME
  ) {
    return state;
  }

  console.log(action.personList);
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
