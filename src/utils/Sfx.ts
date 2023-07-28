import Asset from "./Asset";
import { Howl } from 'howler';

export default class Sfx {
    private _howls: Map<string, {
        howl: Howl,
        asset: Asset,
    }> = new Map();

    constructor() {
    }

    public add(asset: Asset): void {
        if (!asset.isLoaded) {
            throw new Error(`Asset ${asset.name} is not loaded.`);
        }
        const howl = new Howl({
            src: [asset.url],
        });
        this._howls.set(asset.name, {
            asset,
            howl,
        });
    }

    public play(assetName: string): void {
        const value = this._howls.get(assetName);
        if (value === undefined) {
            throw new Error(`Asset ${assetName} is not added.`);
        }
        const { howl } = value;
        howl.play();
    }

    public getHowl(assetName: string): Howl | undefined {
        const value = this._howls.get(assetName);
        return value?.howl;
    }
}