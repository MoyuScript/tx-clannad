/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React, { useEffect } from 'react';
import assetManager from '../common/assetManager';
import { AssetEnum } from '../common/constants';
import { motion } from 'framer-motion';
import FooterEula from '../components/FooterEula';

export interface SplashProps {
    onEnded: () => void;
}

const Splash: React.FC<SplashProps> = ({ onEnded }) => {
    const [keyLogoVisible, setKeyLogoVisible] = React.useState(false);

    useEffect(() => {
        if (keyLogoVisible) {
            setTimeout(() => {
                onEnded();
            }, 3000);
        }
    }, [keyLogoVisible, onEnded]);

    return (
        <div className="w-full h-full bg-black">
            <video
                autoPlay
                onEnded={() => setKeyLogoVisible(true)}
                playsInline
                className="w-full h-full object-cover"
                src={assetManager.get(AssetEnum.VideoTxGameOpening)?.blobUrl!}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: keyLogoVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full h-full bg-white flex justify-center items-center">
                <img src={assetManager.get(AssetEnum.ImageKeyLogo)?.blobUrl!} className='w-[20rem]' />
                <FooterEula />
            </motion.div>
        </div>
    );
};

export default Splash;
