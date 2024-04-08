import React, { useState } from 'react';
import Search from '../../assets/icons/Search.svg';

const SearchBar = ({ onSearch, placeholder }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div onClick={handleSearch} style={{display:'flex', gap:'0.5rem'}}>
      <img src={Search} alt='search'/>
      <input
        type="text"
      placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
       
      />
     
    </div>
  );
};

export default SearchBar;
