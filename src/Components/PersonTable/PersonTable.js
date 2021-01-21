import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Table from "../../Shared/Table/Table";

import CustomPagination from "../../Shared/Pagination/Pagination";
import { FetchPersons } from "./ReducerActions/FetchPersons";
import { SelectPerson } from "./ReducerActions/SelectPerson";
import { ChangePage } from "./ReducerActions/ChangePage";

const tableHeader = [
  { columnName: "User" },
  { columnName: "First Name" },
  { columnName: "Last Name" },
];

export const PersonTable = () => {
  const { page } = useSelector(state => ({
    page: state.pagination.page,
  }));
  const { personList } = useSelector(state => ({
    personList: state.personData.personList,
  }));
  const { hasError } = useSelector(state => ({
    personList: state.personData.hasError,
  }));

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(FetchPersons(page));
    },
    [page, dispatch]
  );

  const handleSelectPerson = person => {
    dispatch(SelectPerson(person));
  };

  const handlePageChange = page => {
    dispatch(ChangePage(page));
  };

  return (
    <Fragment>
      <Table
        tableHeader={tableHeader}
        tableBody={personList}
        hasError={hasError}
        displayedColumns={["imageUrl", "firstName", "lastName"]}
        onSelectRow={handleSelectPerson}
      />
      <CustomPagination page={page} onPageChange={handlePageChange} />
    </Fragment>
  );
};

export default PersonTable;
