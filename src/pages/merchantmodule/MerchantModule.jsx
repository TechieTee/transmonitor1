import React from 'react'
import Layout from '../../components/layout/Layout'
import styles from './MerchantModule.module.css'
import Chart from '../../assets/Chart.svg';
import Card from '../../components/card/Card';
import cardData from "../../data";

const MerchantModule = () => {
  return (
    <Layout>
      <div className={styles.merchantmodule}>
        <div className={styles.transactionreportcards}>
        {cardData.map((data) => (
        <Card
          key={data.id}
          transaction={data.transaction}
          value={data.value}
        />
      ))}
        </div>
        <div className={styles.merchantchartboard}>
          <div className={styles.merchantchart}>
          merchant chart board
          </div>
          <div className={styles.merchantchartreport}>
             
               <div> merchant chart report</div>  <div> merchant chart report</div>
            
          </div>
        </div>
        <div className={styles.paymenttransactiontable}>table
        </div>
      </div>
    </Layout>
  )
}
export default MerchantModule