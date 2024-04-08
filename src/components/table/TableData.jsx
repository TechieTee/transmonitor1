import React from 'react'
import ArrowDown from '../../assets/icons/ArrowDown.svg';
import ReconcilledElipse from '../../assets/icons/ReconcilledElipse.svg';
import PendingElipse from '../../assets/icons/PendingElipse.svg';
import UnReconcilledElipse from '../../assets/icons/UnReconcilledElipse.svg';

export const Initials = () => {
  return (
    <div style={{ height: '35px', width: '35px', background: '#7F8FA4', display: 'flex', borderRadius: '50px', justifyContent: 'center', alignItems: 'center', color: '#FFFFFF' }}><span style={{ position: 'relative' }}>VW</span></div>
  )
}
export const ItemType = () => {
  return (
    <span style={{ color: '#414042' }}>Apple Mac Book 15” 250 SSD 12GB</span>
  )
}
export const StatusButton = ({ status }) => {
  return (
    <div style={{ display: 'flex', gap: '0rem', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', gap: '0.6rem', border: '1px solid #CCCFD4', borderRadius: '25px', padding: '0px 18px', width: '140px' }}>
        <img src={status == 'Reconcilled' ? ReconcilledElipse : status == 'Pending' ? PendingElipse : UnReconcilledElipse} alt='elipse' style={{ verticalAlign: 'middle' }} /> <span style={status == 'Reconcilled' ? { color: '#27AE60' } : status == 'Pending' ? { color: '#EBC315' } : status == 'UnReconcilled' ? { color: '#7F8FA4' } : { color: '#000000' }} >{status}
        </span></div> <span><img src={ArrowDown} alt='arrow-down' style={{ verticalAlign: 'middle', height: '20px' }} />
      </span></div>
  )
}




export const tableData = [
  {
    id: 1,
    "Initials": <Initials />,
    "Item Type": <ItemType />,
    "Price": "$73430",
    "Transaction No": "1234567890",
    "Time": "12:30",
    "Status": <StatusButton status='Reconcilled' />
  },
  {
    id: 2,
    "Initials": <Initials />,
    "Item Type": <ItemType />,
    "Price": "$73430",
    "Transaction No": "1234567890",
    "Time": "12:30",
    "Status": <StatusButton status='Pending' />
  },
  {
    id: 3,
    "Initials": <Initials />,
    "Item Type": <ItemType />,
    "Price": "$73430",
    "Transaction No": "1234567890",
    "Time": "12:30",
    "Status": <StatusButton status='UnReconcilled' />
  },
  {
    id: 4,
    "Initials": <Initials />,
    "Item Type": <ItemType />,
    "Price": "$73430",
    "Transaction No": "1234567890",
    "Time": "12:30",
    "Status": <StatusButton status='Reconcilled' />
  },
  {
    id: 5,
    "Initials": <Initials />,
    "Item Type": <ItemType />,
    "Price": "$73430",
    "Transaction No": "1234567890",
    "Time": "12:30",
    "Status": <StatusButton status='Pending' />
  },
  {
    id: 6,
    "Initials": <Initials />,
    "Item Type": <ItemType />,
    "Price": "$73430",
    "Transaction No": "1234567890",
    "Time": "12:30",
    "Status": <StatusButton status='Reconcilled' />
  },
  {
    id: 7,
    "Initials": <Initials />,
    "Item Type": <ItemType />,
    "Price": "$73430",
    "Transaction No": "1234567890",
    "Time": "12:30",
    "Status": <StatusButton status='Pending' />
  },
  {
    id: 8,
    "Initials": <Initials />,
    "Item Type": <ItemType />,
    "Price": "$73430",
    "Transaction No": "1234567890",
    "Time": "12:30",
    "Status": <StatusButton status='UnReconcilled' />
  },

];

