import update from "immutability-helper";
import { history } from "../../App/App";

export const SELECT_ACTION_NAME = "ACTION_SELECT_PERSON";

export const SelectPerson = (person) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_ACTION_NAME,
      person,
    });
    history.push("/details");
  };
};

export const SelectPersonReducer = (state, action) => {
  if (action.type !== SELECT_ACTION_NAME) {
    return state;
  }

  return update(state, {
    person: {
      firstName: { $set: action.person.firstName },
      lastName: { $set: action.person.lastName },
      email: { $set: action.person.email },
      imageUrl: { $set: action.person.imageUrl },
    },
  });
};

export default {
  SelectPerson,
  SelectPersonReducer,
  SELECT_ACTION_NAME,
};
