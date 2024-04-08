import { useRef, useState } from "react";
import styles from './Table.module.css'
import { useOnClickOutside } from "../../hooks/OnClickOutside";
import Pagination from "../pagination/Pagination";
import PageSize from "../pagesize/PageSize";

const Table = ({
  tableHeaders,
  tableData,
  loading,
  pageSize,
 
}) => {
  const [showOption, setShowOption] = useState(false);
  const tableBodyRef = useRef(null);
  useOnClickOutside(tableBodyRef, () => setShowOption(false));
  const isEmpty = !loading && tableData?.length < 1;

  const [pageNumber, setPageNumber] = useState(0);
  const [prevNumber, setPrevNumber] = useState(1);
  const size = pageSize || 5;
  const pagesVisited = pageNumber * size;
  const pageCount = Math.ceil(tableData?.length / size);
  const indexedPageNumber = pageNumber + 1
  const prevNumberData = size * indexedPageNumber


  const changePage = ({ selected }) => {
    setPageNumber(selected);
    
  };
  let tableBody;
  if (loading) {
    tableBody = (
      <tr>
        <td colSpan={tableHeaders?.length} style={{textAlign:'center'}}>
          loading...
        </td>
      </tr>
    );
  } else if (isEmpty) {
    tableBody = (
      <tr>
        <td colSpan={tableHeaders?.length} style={{textAlign:'center'}}>
          no record found
        </td>
      </tr>
    );
  } else {
 
      tableBody = tableData?.slice(pagesVisited, pagesVisited + size)?.map((datum)=>{
      return (
        <tr key={datum.id}>
          {tableHeaders.map((header) => (
            <td key={header.id} className={styles.tablebodyrow}>
              <span>{datum[header]}</span>
            </td>
          ))}
        </tr>
      );
    });
  }
  return (
    <div ><div style={{display:'flex', padding:'0 0 1rem 0'}}>
      <PageSize
                totalItems={tableData?.length}
                itemsPerPage={size * indexedPageNumber}
              /></div>
      <div className={styles.table}>
        <table className={styles.tabledata}>
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <th key={header.id} className={styles.tableheader}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody ref={tableBodyRef} className={styles.tablebody}>{tableBody}</tbody>
        </table>
      </div>
     <div> 
     {tableData?.length > size && (
        <div className={styles.paginate}> <p className={styles.description}>
        Showing {prevNumberData - 5} to {size * indexedPageNumber } of {tableData?.length} entries
      </p><Pagination pageCount={pageCount} onPageChange={changePage} /></div>
      )} 
   
</div>
    </div>
  );
};
export default Table;