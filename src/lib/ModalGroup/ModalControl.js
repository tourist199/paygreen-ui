import React from 'react';
import { useModal } from './ModalContext';

const ModalControl = props => {
    const { isOpen, setOpen } = useModal();

    return React.Children.map(props.children, child => {
        if (!child) {
            return null;
        } else {
            return React.cloneElement(child, {
                onClick: () => setOpen(!isOpen),
            });
        }
    });
};

export default ModalControl;