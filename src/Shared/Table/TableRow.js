import { Fragment } from "react";

const TableRow = ({ index, row, displayedColumns, onSelectRow }) => {
  const displayedValues = displayedColumns.map(columnName => {
    return row[columnName];
  });

  return (
    <tr
      className="table__row"
      key={index}
      onClick={() => {
        onSelectRow(row);
      }}
    >
      {row &&
        <Fragment key={index}>
          {displayedValues.map((displayedValue, valIndex) => {
            return (
              <Fragment>
                {displayedValue.includes(".jpg")
                  ? <td>
                      <img className="table__image" src={displayedValue} alt="User" />
                    </td>
                  : <td key={`column-${index}-${valIndex}`}>
                      {displayedValue}
                    </td>}
              </Fragment>
            );
          })}
        </Fragment>}
    </tr>
  );
};

export default TableRow;
