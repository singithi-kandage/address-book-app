const TableRow = ({ index, row, onSelectRow }) => {
  <tr
    className="table__row"
    key={index}
    onClick={() => {
      onSelectRow();
    }}
  >
    {row.map((column, rowIndex) => {
      return (
        <td key={`column-${index}-${rowIndex}`}>
          {column}
        </td>
      );
    })}
  </tr>;
};

export default TableRow;
