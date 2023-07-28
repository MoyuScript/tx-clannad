import Asset, { AssetTypeEnum } from "../utils/Asset";
import AssetManager from "../utils/AssetManager";
import { AssetEnum } from "./constants";

import VideoTxGameOpening from '../assets/tx-game-opening.mp4';
import AudioClick from '../assets/click.mp3';
import AudioModalOpen from '../assets/modal-open.mp3';
import AudioMenuBgm from '../assets/menu-bgm.mp3';
import ImageCadpa12Plus from '../assets/cadpa-12plus.png';
import ImageLoginQQ from '../assets/login-qq.png';
import ImageLoginWx from '../assets/login-wx.png';
import ImageIconList from '../assets/icon-list.png';

import ImageKeyLogo from '../assets/key-logo.png';
import ImageMenuBg from '../assets/menu-bg.jpg';

const assets: Asset[] = [
    new Asset(AssetEnum.VideoTxGameOpening, VideoTxGameOpening),
    new Asset(AssetEnum.AudioClick, AudioClick, AssetTypeEnum.Audio),
    new Asset(AssetEnum.AudioModalOpen, AudioModalOpen, AssetTypeEnum.Audio),
    new Asset(AssetEnum.AudioMenuBgm, AudioMenuBgm, AssetTypeEnum.Audio),
    new Asset(AssetEnum.ImageKeyLogo, ImageKeyLogo, AssetTypeEnum.Image),
    new Asset(AssetEnum.ImageMenuBg, ImageMenuBg, AssetTypeEnum.Image),
    new Asset(AssetEnum.ImageCadpa12Plus, ImageCadpa12Plus, AssetTypeEnum.Image),
    new Asset(AssetEnum.ImageLoginQQ, ImageLoginQQ, AssetTypeEnum.Image),
    new Asset(AssetEnum.ImageLoginWx, ImageLoginWx, AssetTypeEnum.Image),
    new Asset(AssetEnum.ImageIconList, ImageIconList, AssetTypeEnum.Image),
];

const assetManager = new AssetManager();

assets.forEach((asset) => {
    assetManager.add(asset);
});

export default assetManager;
