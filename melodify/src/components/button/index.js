import React from 'react';
import StyledButton from './styled.js';
import logoUrl from '../../assets/logo-white-text.svg';

const FeatureButton = ({
    text = 'Sample',
    width = '200px',
    primaryColour = '#8BD6C8',
    secondaryColour = '#533B53',
    textColour,
    onClick,
    className
}) => {
    return (
        <StyledButton
            className={`feature-button ${className}`}
            block
            style={{
                width: width,
                backgroundColor: primaryColour,
            }}
            onClick={onClick}
        >
            <span
                className='text'
                style={{ color: textColour ?? secondaryColour }}
            >
                {text}
            </span>
            <StyledButton
                className='shadow'
                block
                style={{
                    backgroundColor: secondaryColour,
                }}
            />
        </StyledButton>

    )
}


export default FeatureButton