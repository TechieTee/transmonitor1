import { useRef, useState } from "react";
import styles from './Table.module.css'
import { useOnClickOutside } from "../../hooks/OnClickOutside";

const Table = ({
  tableHeaders,
  tableData,
  loading,
}) => {
  const [showOption, setShowOption] = useState(false);
  const tableBodyRef = useRef(null);
  useOnClickOutside(tableBodyRef, () => setShowOption(false));
  const isEmpty = !loading && tableData?.length < 1;
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
    tableBody = tableData?.map((datum, index) => {
      
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
    <div >
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
     <div>Pagination</div>
    </div>
  );
};
export default Table;