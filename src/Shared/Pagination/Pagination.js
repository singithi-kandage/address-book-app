import React from "react";
import Pagination from "@material-ui/lab/Pagination";

import "./Pagination.scss";

export const CustomPagination = ({ page, onPageChange }) => {
  return (
    <div className="paginationContainer">
      <Pagination
        count={10}
        page={page}
        onChange={(event, value) => {
          onPageChange(value);
        }}
      />
    </div>
  );
};

export default CustomPagination;
