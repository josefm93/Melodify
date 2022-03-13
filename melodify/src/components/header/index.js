import React from 'react';
import StyledHeader from './styled.js';
import logoUrl from '../../assets/logo-white-text.svg';

const Header = () => {
    return (
      <StyledHeader>
        <img src={logoUrl} alt="Tesla" />
      </StyledHeader>
    )
}


export default Header