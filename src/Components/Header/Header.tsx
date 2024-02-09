import React, { useState } from 'react';
import './Header.css';
import logoModified from '../../assets/logo-modified.png';

const Header = () => {
  return (
    <div className="header-container">
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <img src={logoModified} alt="logo" height={105} width={225} />
      </div>
    </div>
  );
};

export default Header;
