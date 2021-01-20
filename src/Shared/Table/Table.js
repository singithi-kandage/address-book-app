import { Fragment } from "react";

import "./Table.scss";
import TableRow from "./TableRow";

const Table = ({
  tableHeader,
  tableBody,
  hasError,
  displayedColumns,
  onSelectRow,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {tableHeader.map((column, index) => {
            return (
              <th key={index}>
                {column.columnName}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {hasError
          ? <tr col="2">
              Sorry, looks like there was a problem getting your records.
            </tr>
          : <Fragment>
              {tableBody.length > 0 &&
                tableBody.map((row, index) => {
                  return (
                    <TableRow
                      index={index}
                      row={row}
                      displayedColumns={displayedColumns}
                      onSelectRow={onSelectRow}
                    />
                  );
                })}
            </Fragment>}
      </tbody>
    </table>
  );
};

export default Table;
