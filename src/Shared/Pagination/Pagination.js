import React from "react";
import Pagination from "@material-ui/lab/Pagination";

import "./Pagination.scss";

export const CustomPagination = ({ onPageChange }) => {
  const [page, setPage] = React.useState(1);

  return (
    <div className="paginationContainer">
      <Pagination
        count={10}
        page={page}
        onChange={(event, value) => {
          onPageChange(value);
          setPage(value);
        }}
      />
    </div>
  );
};

export default CustomPagination;
