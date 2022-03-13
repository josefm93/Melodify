import React from 'react';
import './header.css';
import logoUrl from '../assets/logo-white-text.svg';

const Header = () => {
    return (
        <div className="header">
        <img src={logoUrl} alt="Tesla" />
      </div>
    )
}


export default Header