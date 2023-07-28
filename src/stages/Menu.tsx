/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React from 'react';
import { useMount } from 'ahooks';
import sfx from '../common/sfx';
import { AssetEnum } from '../common/constants';
import assetManager from '../common/assetManager';
import FooterEula from '../components/FooterEula';
import LoginButton from '../components/LoginButton';
import QrCodeModal from '../components/QrCodeModal';
import { isMobile } from '../utils/Env';

export interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
    const [qrCodeUrl, setQrCodeUrl] = React.useState<string>('');
    const [qrCodeVisible, setQrCodeVisible] = React.useState<boolean>(false);
    useMount(() => {
        const menuBgmHowl = sfx.getHowl(AssetEnum.AudioMenuBgm)!;

        if (menuBgmHowl.playing()) return;

        menuBgmHowl.loop(true);
        menuBgmHowl.play();
        menuBgmHowl.volume(0.5);
    });

    return (
        <div
            className="w-full h-full"
            style={{
                backgroundImage: `url(${
                    assetManager.get(AssetEnum.ImageMenuBg)?.blobUrl
                })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
            }}
        >
            <FooterEula />
            <button onClick={() => {
                sfx.play(AssetEnum.AudioClick);
                window.open('https://www.bilibili.com/video/BV1GJ411x7h7/');
            }} className="absolute left-[4rem] top-[4rem] bg-white rounded-[10px] w-[7rem]">
                <img
                    src={assetManager.get(AssetEnum.ImageCadpa12Plus)?.blobUrl!}
                />
            </button>
            <div className="flex absolute left-1/2 bottom-[15rem] -translate-x-1/2 space-x-4">
                <LoginButton
                    onClick={() => {
                        const url = 'https://www.bilibili.com/video/BV1GJ411x7h7/';
                        if (isMobile()) {
                            window.open(url);
                            return;
                        }
                        setQrCodeUrl(url);
                        setQrCodeVisible(true);
                    }}
                >
                    <img
                        src={assetManager.get(AssetEnum.ImageLoginWx)?.blobUrl!}
                    />
                </LoginButton>
                <LoginButton
                    onClick={() => {
                        const url = 'https://ys.mihoyo.com/';
                        if (isMobile()) {
                            window.open(url);
                            return;
                        }
                        setQrCodeUrl(url);
                        setQrCodeVisible(true);
                    }}
                >
                    <img
                        src={assetManager.get(AssetEnum.ImageLoginQQ)?.blobUrl!}
                    />
                </LoginButton>
            </div>
            <QrCodeModal
                onClose={() => {
                    setQrCodeVisible(false);
                }}
                visible={qrCodeVisible}
                content={qrCodeUrl}
            />
            <a href="https://github.com/MoyuScript/tx-clannad" target='_blank'>
                <img src={assetManager.get(AssetEnum.ImageIconList)?.blobUrl!} className='absolute h-[40rem] right-0 top-1/2 -translate-y-1/2' />
            </a>
        </div>
    );
};

export default Menu;
