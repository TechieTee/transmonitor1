import React from 'react'
import styles from './ChartBoard.module.css'
import Graph from '../../assets/Graph.svg';

const ChartBoard = () => {
  return (
    <>
   
  <div className={styles.chartboard}>
    <div style={{ display: 'flex', justifyContent:'space-between',padding: '1rem'}} >
      <div style={{ fontSize: '18px', color:'4f4f4f' }}>Today: 5, Aug 2018</div>
      <p>dropdown</p>  <p>btn</p> <p>btn</p>
    </div>
    <div style={{ display: 'flex', alignItems:'center', justifyContent:'space-between',padding: '1rem 2rem 0 2rem'}} >
     
      <p>Jan</p><p>Feb</p> <p>Mar</p>  <p>Apr</p><p>May</p> <p>Jun</p>
    </div>
    <img src={Graph} alt="graph" style={{width:'100%'}}/>
  </div>
  
  </>
  )
}

export default ChartBoard