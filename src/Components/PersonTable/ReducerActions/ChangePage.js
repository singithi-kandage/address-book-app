import produce from "immer";
import { registerReducer } from "../../../StateSetup/RootReducer";

export const CHANGE_PAGE_ACTION_NAME = "ACTION_CHANGE_PAGE";

export const ChangePage = page => {
  return async dispatch => {
    dispatch({
      type: CHANGE_PAGE_ACTION_NAME,
      page,
    });
  };
};

export const changePageReducer = produce((state, action) => {
  state.pagination.page = action.page;
});

registerReducer(CHANGE_PAGE_ACTION_NAME, changePageReducer);
