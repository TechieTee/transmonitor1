import React from 'react'
import styles from './Layout.module.css'
import AppBar from '../appbar/AppBar'
import SideNav from '../sidenav/SideNav'


const Layout = ({children} ) => {
  return (
    <div className={styles.layout}>
    <AppBar />

    <div className={styles.layoutbody}>
      <SideNav  />

      <div className={styles.children}
      >
         {children} 
    
      </div>
    </div>
  </div>
  )
}

export default Layout