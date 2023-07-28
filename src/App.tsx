import { useAsyncEffect } from 'ahooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import assetManager from './common/assetManager';
import { AssetEnum, StageEnum } from './common/constants';
import sfx from './common/sfx';
import Loading from './stages/Loading';
import Menu from './stages/Menu';
import Splash from './stages/Splash';
import { AssetTypeEnum } from './utils/Asset';
import OrientationLock from './components/OrientationLock';

function App() {
    const [stage, setStage] = useState<StageEnum>(StageEnum.Loading);
    const [loading, setLoading] = useState<boolean>(true);

    useAsyncEffect(async () => {
        if (stage !== StageEnum.Loading) return;

        await assetManager.load();

        const audioAssets = assetManager.getByType(AssetTypeEnum.Audio);
        audioAssets.forEach((asset) => {
            sfx.add(asset);
        });

        setLoading(false);
    }, [stage]);

    const goMenuStage = useCallback(() => {
        setStage(StageEnum.Menu);
    }, []);

    const stageMap: Record<StageEnum, () => React.ReactNode> = {
        [StageEnum.Loading]: () => (
            <Loading
                loading={loading}
                onClickStart={() => {
                  sfx.play(AssetEnum.AudioClick);
                  setStage(StageEnum.Splash);
                  
                  if (import.meta.env.PROD) {
                    document.documentElement.requestFullscreen();
                  }
                }}
            />
        ),
        [StageEnum.Splash]: () => <Splash onEnded={goMenuStage} />,
        [StageEnum.Menu]: () => <Menu />,
    };

    return (
        <div className="w-full h-full relative">
            <AnimatePresence>
                <motion.div
                    className='relative w-full h-full'
                    key={stage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {stageMap[stage]()}
                </motion.div>
            </AnimatePresence>
            <OrientationLock />
        </div>
    );
}

export default App;
