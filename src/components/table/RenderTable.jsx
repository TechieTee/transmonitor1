import React, {useState} from 'react'
import styles from './Table.module.css'
import SearchBar from '../searchbar/SearchBar'
import SelectDropdown from '../selectdropdown/SelectDropdown'
import Table from './Table'
import { tableData  } from './TableData'
import ReconcilledElipse from '../../assets/icons/ReconcilledElipse.svg';
import PendingElipse from '../../assets/icons/PendingElipse.svg';
import UnReconcilledElipse from '../../assets/icons/UnReconcilledElipse.svg';


const RenderTable = () => {
  const [status, setStatus] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
      console.log('I am searching for:', query);
      setSearchResults([...searchResults, query]); 
    };
  return (
  <div style={{display:'block'}}>
        <div className={styles.rendertable}>
        <div style={{fontSize:'32px', color:'#262626'}}>Payments</div>
      </div>
      <div className={styles.rendertable}>
        <div>Page Size</div>
        <div style={{width:'40%', borderBottom:'0.5px solid #787878'}}><SearchBar onSearch={handleSearch} placeholder="Search Payments"/></div>  
      <SelectDropdown
              options={[
                "All",
                "Reconcilled",
                "Un-reconcilled",
                "Pending"
              ]}
              placeholder={"All"}
              handleSelect={setStatus}
              selectedOption={status}
              withFilterIcon={true}
              filteredIcons={status == "Reconcilled" ? <img src={ReconcilledElipse} alt='icon'/>: status == "Un-reconcilled" ? <img src={UnReconcilledElipse} alt='icon'/>: status == "Pending" ? <img src={PendingElipse} alt='icon'/>:""}
              isForm={true}
              label="Show"/>
      </div>
      <div>
      <Table
      tableHeaders={[
        "Initials",
        "Item Type",
        "Price",
        "Transaction No",
        "Time",
        "Status",
      ]}
      tableData={tableData}
    />
    </div>  
    </div>
  )
}
export default RenderTable


