import React from 'react'
import styles from './Card.module.css'
import Chart from '../../assets/Chart.svg';

const Card = ({ transaction, value}) => {
  return (
    <>
   
  <div className={styles.transactionreportcard}>
    <div style={{ display: 'block' }} >
      <div className={styles.transactionreport}>{transaction}</div>
      <p className={styles.value}>{value}</p>
    </div>
    <img src={Chart} alt="chart" />
  </div>
  
  </>
  )
}

export default Card