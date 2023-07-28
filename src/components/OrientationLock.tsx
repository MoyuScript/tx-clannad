import React, { useEffect } from 'react';
import { isMobile } from '../utils/Env';
import ReactDOM from 'react-dom';

export interface OrientationLockProps {}

const OrientationLock: React.FC<OrientationLockProps> = () => {
    const [visible, setVisible] = React.useState(() => {
        if (!isMobile()) return false;
        return window.screen.orientation.type !== 'landscape-primary';
    });
    
    useEffect(() => {
        if (!isMobile()) return;

        const onChange = function (this: ScreenOrientation) {
            if (this.type === 'landscape-primary') {
                setVisible(false);
            } else {
                setVisible(true);
            }
        }

        window.screen.orientation.addEventListener('change', onChange);
        return () => {
            window.screen.orientation.removeEventListener('change', onChange);
        }
    }, [])
    
    if (!visible) return null;
    
    return ReactDOM.createPortal(
        (
            <div className='absolute z-50 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] text-white flex justify-center items-center text-[5rem]'>
                请横屏体验
            </div>
        ),
        document.body
    )
}

export default OrientationLock;
