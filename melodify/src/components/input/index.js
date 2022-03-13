import React from 'react';
import StyledInput from './styled.js';


const Input = ({
    value,
    borderColour = '#AF96C3',
    placeholder,
    onChange,
    onEnter
}) => {
    return (
      <StyledInput
        value={value}
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