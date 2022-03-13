import styled from 'styled-components';
import { Button } from 'antd';

const StyledButton = styled(Button)`
    position: relative;
    padding: 1rem 0.5rem;
    min-width: 200px;
    height: 60px;
    border-radius: 2rem;
    border: none;

    .text {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.5rem;
        margin: 0;
    }

    .shadow {
        position: absolute;
        left: 0;
        bottom: -10px;
        z-index: -1;
        width: 100%;
    }
`;

export default StyledButton;
