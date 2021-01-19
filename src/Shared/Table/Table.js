import TableRow from "./TableRow";

const Table = ({ tableHeader, tableBody, onSelectRow }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          {tableHeader.map((column, index) => {
            return (
              <th>
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
              <TableRow index={index} row={row} onSelectRow={onSelectRow} />
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
