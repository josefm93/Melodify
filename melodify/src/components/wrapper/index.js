import React from 'react';
import StyledWrapper from './styled.js';

const Wrapper = ({
    isModalVisible='false',
    child
}) => {
    return (
        <StyledWrapper>
            {child}
        </StyledWrapper>
    );
}


export default Wrapper;