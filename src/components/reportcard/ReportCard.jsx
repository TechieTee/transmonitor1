import React from 'react'
import styles from './ReportCard.module.css';
import ReportBar from '../../assets/ReportBar.svg';

const ReportCard = ({reportType, pendingOrder, reconcilledOrder, totalOrder}) => {
  return (
    <div className={styles.reportcard}>
<p style={{fontWeight:'600'}}>{reportType}</p>
<img src={ReportBar} alt="report-bar" style={{height:'20px', width:'100%'}}/>
<p>Pending Orders:<span style={{color:'#ebc315',fontWeight:'600'}}> {pendingOrder}</span></p>
<p>Reconcilled Order:<span style={{color:'#28ae60',fontWeight:'600'}}>{reconcilledOrder}</span> </p>
<p>Total Order: <span style={{color:'#1760ec',fontWeight:'600'}}>{totalOrder}</span></p>
    </div>
  )
}

export default ReportCard