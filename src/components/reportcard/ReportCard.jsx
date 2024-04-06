import React from 'react'
import styles from './ReportCard.module.css';
import ReportBar from '../../assets/ReportBar.svg';

const ReportCard = ({reportType, pendingOrder, reconcilledOrder, totalOrder}) => {
  return (
    <div className={styles.reportcard}>
<p>{reportType}</p>
<img src={ReportBar} alt="report-bar" style={{height:'20px', width:'100%'}}/>
<p>Pending Orders: {pendingOrder}</p>
<p>Reconcilled Order: {reconcilledOrder}</p>
<p>Total Order: {totalOrder}</p>
    </div>
  )
}

export default ReportCard