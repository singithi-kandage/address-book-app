const reducerMap = {};

export const registerReducer = (actionName, reducer) => {
  reducerMap[actionName] = reducer;
};

const RootReducer = (state, action) => {
  const reducer = reducerMap[action.type];
  let newState = state;

  if (reducer) {
    newState = reducer(newState, action);
  }
  return newState;
};

export default RootReducer;
