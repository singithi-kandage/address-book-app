import update from "immutability-helper";

export const CHANGE_PAGE_ACTION_NAME = "ACTION_CHANGE_PAGE";

export const ChangePage = (page) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_PAGE_ACTION_NAME,
      page,
    });
  };
};

export const ChangePageReducer = (state, action) => {
  if (action.type !== CHANGE_PAGE_ACTION_NAME) {
    return state;
  }

  return update(state, {
    pagination: {
      page: { $set: action.page },
    },
  });
};

export default {
  ChangePage,
  ChangePageReducer,
  CHANGE_PAGE_ACTION_NAME,
};
