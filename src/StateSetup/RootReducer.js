import reduceReducers from "reduce-reducers";

import { FetchPersonsReducer } from "../Components/PersonTable/ReducerActions/FetchPersons";
import { SelectPersonReducer } from "../Components/PersonTable/ReducerActions/SelectPerson";
import { ChangePageReducer } from "../Components/PersonTable/ReducerActions/ChangePage";

const RootReducer = reduceReducers(
  FetchPersonsReducer,
  SelectPersonReducer,
  ChangePageReducer
);

export default RootReducer;
