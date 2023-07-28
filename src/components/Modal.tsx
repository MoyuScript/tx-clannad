import React from 'react';
import ReactDOM from 'react-dom';

export interface ModalProps extends React.PropsWithChildren {
    visible: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, visible }) => {
    if (!visible) return null;
    return ReactDOM.createPortal(
        (
            <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center'>
                <div className='relative max-w-[800px] min-w-[300px] bg-white rounded-[8px] p-[16px]'>
                    {children}
                </div>
            </div>
        ),
        document.body
    )
}

export default Modal;
