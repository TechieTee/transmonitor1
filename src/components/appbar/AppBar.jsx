import React, { useState } from 'react';
import Logo from '../../assets/TransMonitor.svg';
import NotificationIcon from '../../assets/Notification.svg';
import ProfileIcon from '../../assets/Memoji 28.png';
import styles from './AppBar.module.css';
import SearchBar from '../searchbar/SearchBar';


const AppBar = () => {
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (query) => {
        console.log('I am searching for:', query);
        setSearchResults([...searchResults, query]); 
      };
    return (
        <div className={styles.appbar}>
             <div className={styles.appbaritem}>
               
             <img src={Logo} alt="profile-icon" />
             <div style={{marginLeft:'2.5em'}}><SearchBar onSearch={handleSearch} placeholder="Search..."/></div>
            </div>
           
            <div className={styles.appbaritem}>
              
               <div><p>Support</p></div>
               <div><p>FAQ</p></div>
               <div><img src={NotificationIcon} alt="profile-icon" /></div>
               <div style={{display:'flex',gap:'1rem'}}> 
               <div style={{display:'block'}} >
               <div style={{fontSize:'10px', textAlign:'right'}}>Hello</div><p>Fatima Bello</p>
               </div>
               <img src={ProfileIcon} alt="profile-icon" />
               </div>
            </div>
        </div>
        )}
export default AppBar