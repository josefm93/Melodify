import React from 'react';
import StyledInput from './styled.js';

const Input = ({
    borderColour = '#AF96C3',
    placeholder
}) => {
    return (
      <StyledInput
        block
        placeholder={placeholder}
        style={{
            border: `${borderColour} solid 2px`
        }}
      />
    )
}


export default Input;