import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Table from "../../Shared/Table/Table";

import { FetchPersons } from "./ReducerActions/FetchPersons";
import { SelectPerson } from "./ReducerActions/SelectPerson";

const tableHeader = [{ columnName: "First Name" }, { columnName: "Last Name" }];

const PersonTable = () => {
  const { personList } = useSelector(state => ({
    personList: state.personData.personList,
  }));

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(FetchPersons());
    },
    [dispatch]
  );

  const handleSelectPerson = person => {
    dispatch(SelectPerson(person));
  };

  return (
    <Fragment>
      <h2>Person Table</h2>
      <Table
        tableHeader={tableHeader}
        tableBody={personList}
        displayedColumns={["firstName", "lastName"]}
        onSelectRow={handleSelectPerson}
      />
    </Fragment>
  );
};

export default PersonTable;
