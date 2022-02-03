import React from 'react';

const Header = ({ handleToggleDark }) => {
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button onClick={()=>handleToggleDark((prevDarkMode) => !prevDarkMode)} className='toggle'>Toggle Mode</button>
    </div>
  );
};

export default Header;
