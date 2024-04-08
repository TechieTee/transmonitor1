import React from "react";
import ReactPaginate from "react-paginate";
import style from "./Pagination.module.css";

const Pagination = (props) => {
  return (
    <div className={style.container}>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={props.pageCount}
        onPageChange={props.onPageChange}
        breakLabel={"..."}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        containerClassName={style.paginationBtn}
        previousLinkClassName={style.previousBtn}
        nextLinkClassName={style.nextBtn}
        disabledClassName={style.paginationDisabled}
        activeClassName={style.paginationActive}
      />
    </div>
  );
};

export default Pagination;