import styled from 'styled-components';
import { Modal } from 'antd';

const StyledModal = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 300px;
    min-height: 500px;
    background-color: white;
    padding: 2rem;
    z-index: 100;
    border-radius: 1.5rem;
`;

export default StyledModal;