import React from 'react';
import StyledHeader from './styled.js';
import logoUrl from '../../assets/logo-white-text.svg';

const Header = ({position = 'left'}) => {
    return (
      <StyledHeader>
        <img style={{float: position}} src={logoUrl} alt='Melodify Logo' />
      </StyledHeader>
    )
}


export default Header