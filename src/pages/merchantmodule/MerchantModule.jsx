import React from 'react'
import Layout from '../../components/layout/Layout'
import styles from './MerchantModule.module.css'
import Card from '../../components/card/Card';
import {cardData, reportcardData} from "../../data";
import ReportCard from '../../components/reportcard/ReportCard';
import ChartBoard from '../../components/chartboard/ChartBoard';

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
          <ChartBoard/>
          </div>
          <div className={styles.merchantchartreport}>
          {reportcardData.map((data) => (
        <ReportCard
          key={data.id}
          reportType={data.reportType}
          pendingOrder={data.pendingOrder}
          reconcilledOrder={data.reconcilledOrder}
          totalOrder={data.totalOrder}
        />
      ))} 
          </div>
        </div>
        <div className={styles.paymenttransactiontable}>table
        </div>
      </div>
    </Layout>
  )
}
export default MerchantModule