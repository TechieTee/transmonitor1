import React from 'react'
import styles from './Card.module.css'
import Chart from '../../assets/Chart.svg';

const Card = ({ transaction, value}) => {
  return (
    <>
   
  <div className={styles.transactionreportcard}>
    <div style={{ display: 'block' }} >
      <div style={{ fontSize: '12px' }}>{transaction}</div><p>{value}</p>
    </div>
    <img src={Chart} alt="chart" />
  </div>
  
  </>
  )
}

export default Card