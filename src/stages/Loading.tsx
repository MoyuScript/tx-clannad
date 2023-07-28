import { motion } from 'framer-motion';
import React from 'react';
import Dango from '../components/Dango';

export interface LoadingProps {
    loading?: boolean;
    onClickStart?: () => void;
}

const Loading: React.FC<LoadingProps> = ({ loading, onClickStart }) => {
    return (
        <div
            style={{
                background:
                    'radial-gradient(rgba(255, 254, 193,0.5), rgba(255, 254, 193,0.8))',
            }}
            className="absolute z-50 top-0 left-0 w-full h-full flex justify-center items-center flex-col"
        >
            <div className="flex justify-end space-x-4">
                {['#ead3cd', '#93c5c4', '#b59d85', '#d9edc8', '#f3c6af'].map(
                    (color, i) => (
                        <Dango
                            key={i}
                            color={color}
                            index={i}
                            className="w-[10rem]"
                            flip={i % 2 === 0}
                        />
                    )
                )}
            </div>
            <div className="mt-10">
                {loading ? (
                    <div className="text-[#74614e] text-[2rem] font-bold">
                        加载中，请稍候...
                    </div>
                ) : (
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        onClick={onClickStart}
                        className="text-white bg-[#74614e] text-[2rem] px-4 py-2 rounded-full"
                    >
                        Clannad，启动！
                    </motion.button>
                )}
            </div>
        </div>
    );
};

export default Loading;
