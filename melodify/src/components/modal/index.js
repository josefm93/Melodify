import { useState, useEffect } from 'react';
import StyledModal from './styled.js';

const Modal = ({
    handleVisibility,
    isModalVisible,
    child='Sample Modal'
}) => {
    const [visible, setVisible] = useState(isModalVisible);

    useEffect(() => {
        setVisible(isModalVisible);
    }, [isModalVisible]);

    const onCancel = () => {
        console.log('onCancel')
    }

    return (
        <StyledModal
            visible={visible}
            onCancel={onCancel}
        >
            {child}
        </StyledModal>
    );
}


export default Modal