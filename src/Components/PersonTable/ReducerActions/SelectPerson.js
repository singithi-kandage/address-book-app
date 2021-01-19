import produce from "immer";
import { registerReducer } from "../../../StateSetup/RootReducer";
import { history } from "../../../index";

export const SELECT_ACTION_NAME = "ACTION_SELECT_PERSON";

export const SelectPerson = person => {
  return async dispatch => {
    dispatch({
      type: SELECT_ACTION_NAME,
      person,
    });
    history.push("/details");
  };
};

export const selectPersonReducer = produce((state, action) => {
  state.person = action.person;
});

registerReducer(SELECT_ACTION_NAME, selectPersonReducer);
