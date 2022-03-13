import React from 'react';
import StyledInput from './styled.js';

const Input = ({
    borderColour = '#AF96C3',
    placeholder,
    onChange,
    onEnter
}) => {
    return (
      <StyledInput
        block
        placeholder={placeholder}
        style={{
            border: `${borderColour} solid 2px`
        }}
        onChange={(e) => onChange(e)}
        onEnter={onEnter}
      />
    )
}


export default Input;