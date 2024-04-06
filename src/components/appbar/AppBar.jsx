import React from 'react'
import Logo from '../../assets/TransMonitor.svg';
import NotificationIcon from '../../assets/Notification.svg';
import ProfileIcon from '../../assets/MaskGroup.svg';
import styles from './AppBar.module.css';


const AppBar = () => {
    return (
        <div className={styles.appbar}>
             <div className={styles.appbaritem}>
               
             <img src={Logo} alt="profile-icon" />
              
            </div>
          
            <div className={styles.appbaritem}>
               <div><p>Search</p></div>
               <div><p>Support</p></div>
               <div><p>FAQ</p></div>
               <div><img src={NotificationIcon} alt="profile-icon" /></div>
               <div style={{display:'flex',gap:'1rem'}}> 
               <div style={{display:'block'}} >
               <div style={{fontSize:'10px', textAlign:'right'}}>Hello</div><p>Oluwaleke Ojo</p>
               </div>
               <img src={ProfileIcon} alt="profile-icon" />
               </div>
            </div>
        </div>
        )}
export default AppBar