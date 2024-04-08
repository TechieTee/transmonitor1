import React from 'react'
import styles from './ChartBoard.module.css'
import Graph from '../../assets/Graph.svg';
import DateButton from '../../assets/icons/DateButton.svg';
import RightButton from '../../assets/icons/RightButton.svg';
import LeftButton from '../../assets/icons/LeftButton.svg';

const ChartBoard = () => {
  return (
    <>
   
  <div className={styles.chartboard}>
    <div style={{ display: 'flex', justifyContent:'space-between',padding: '1.4rem'}} >
      <h2 style={{ fontSize: '16px', color:'4f4f4f', fontWeight:'600' }}>Today: 5, Aug 2018</h2>
      <div style={{ display: 'flex', justifyContent:'space-around', gap: '20px'}}> 
      <img src={DateButton} alt="date-button"/>
      <img src={RightButton} alt="right-button"/>
      <img src={LeftButton} alt="left-button"/>
     
      </div>
     
    </div>
    <div style={{ fontSize: '14px', display: 'flex', alignItems:'center', justifyContent:'space-between',
     color:'#000000',padding: '1rem 2rem 0 2rem', fontWeight:'600'}} >
     
      <p>Jan</p><p>Feb</p> <p>Mar</p>  <p>Apr</p><p>May</p> <p>Jun</p>
    </div>
    <img src={Graph} alt="graph" style={{width:'100%'}}/>
  </div>
  
  </>
  )
}

export default ChartBoard