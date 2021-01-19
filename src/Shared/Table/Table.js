import TableRow from "./TableRow";

const Table = ({ tableHeader, tableBody, displayedColumns, onSelectRow }) => {
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
      </tbody>
    </table>
  );
};

export default Table;
