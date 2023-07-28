import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Modal from './Modal';
import sfx from '../common/sfx';
import { AssetEnum } from '../common/constants';

export interface QrCodeModalProps {
    visible: boolean;
    onClose: () => void;
    content: string;
}

const QrCodeModal: React.FC<QrCodeModalProps> = ({ visible, onClose, content }) => {
    return (
        <Modal visible={visible}>
            <div className='flex flex-col items-center'>
                <p className='text-[16px]'>请扫描下方二维码进行登录</p>
                <p className='mt-[16px] [border:1px_solid_#ccc] rounded-[8px] p-[16px]'>
                    <QRCodeCanvas value={content} />
                </p>
                <p className='mt-[16px]'>
                    <button
                        onClick={() => {
                            onClose();
                            sfx.play(AssetEnum.AudioClick);
                        }}
                        className='bg-[#2f85cb] py-[8px] rounded-full w-[200px] text-white text-[16px]'>
                        关闭
                    </button>
                </p>
            </div>
        </Modal>
    );
};

export default QrCodeModal;
