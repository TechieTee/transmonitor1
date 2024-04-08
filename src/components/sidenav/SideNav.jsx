import React from 'react'
import styles from './SideNav.module.css';
import Overview from '../../assets/icons/Overview.svg';

import PendingOrders from '../../assets/icons/PendingOrders.svg';
import AllOrders from '../../assets/icons/AllOrders.svg';
import ReconcilledOrders from '../../assets/icons/ReconcilledOrders.svg';
import ReconcilledPayments from '../../assets/icons/ReconcilledPayments.svg';
import UnReconcilledPayments from '../../assets/icons/UnReconcilledPayments.svg';
import ManualSettlement from '../../assets/icons/ManualSettlement.svg';
import AllPayment from '../../assets/icons/AllPayment.svg';
import MerchantProfile from '../../assets/icons/MerchantProfile.svg';

const SideNav = () => {
  return (
    <div className={styles.sidenav}>
 <button className={styles.btn}>GENERATE INVOICE</button>

   

    <ul className={styles.menu}>
      
      <li className={styles.menulist}>
        <a href="#">Main</a>
        <ul className={styles.submenu}>
          <li><a href="#"><img src={Overview} alt="overview" className={styles.sidenavicon} />Overview</a></li>
        </ul>
      </li>
      <li className={styles.menulist}>
        <a href="#">Payments</a>
        <ul className={styles.submenu}>
          <li><a href="#"><img src={AllPayment} alt="all-payment" className={styles.sidenavicon}/>All Payments</a></li>
          <li><a href="#"><img src={ReconcilledPayments} alt="reconcilled-payments" className={styles.sidenavicon}/>Reconcilled Payments</a></li>
          <li><a href="#"><img src={UnReconcilledPayments} alt="un-reconcilled-payments" className={styles.sidenavicon}/>Un - Reconcilled Payments</a></li>
          <li><a href="#"><img src={ManualSettlement} alt="manual-settlement" className={styles.sidenavicon}/>Manual Settlement</a></li>
        </ul>
      </li>
      <li className={styles.menulist}>
        <a href="#">Orders</a>
        <ul className={styles.submenu}>
          <li><a href="#"><img src={AllOrders} alt="all-orders" className={styles.sidenavicon}/>All Orders</a></li>
          <li><a href="#"><img src={PendingOrders} alt="pending-orders" className={styles.sidenavicon}/>Pending Orders</a></li>
          <li><a href="#"><img src={ReconcilledOrders} alt="reconcilled-orders" className={styles.sidenavicon}/>Reconcilled Orders</a></li>
        </ul>
      </li>
      <li className={styles.menulist}>
        <a href="#"><img src={MerchantProfile} alt="merchant-profile" className={styles.sidenavicon}/>Merchant Profile</a>
      </li>
     
    </ul>

   

   

  
  </div>
  )
}

export default SideNav