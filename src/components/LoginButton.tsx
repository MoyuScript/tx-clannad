import React from 'react';
import { motion } from 'framer-motion';
import sfx from '../common/sfx';
import { AssetEnum } from '../common/constants';

export interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const LoginButton: React.FC<LoginButtonProps> = ({ children, onClick }) => {
    return (
        <motion.button
            onClick={(e) => {
                sfx.play(AssetEnum.AudioModalOpen);
                onClick?.(e);
            }}
            className='w-[20rem]'
            whileTap={{
                opacity: 0.8,
            }}
        >
            {children}
        </motion.button>
    );
}

export default LoginButton;
