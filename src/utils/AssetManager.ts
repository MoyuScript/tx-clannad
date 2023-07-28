import Asset, { AssetTypeEnum } from "./Asset";

export default class AssetManager {
    private _assets: Map<string, Asset> = new Map();

    public get assets(): Map<string, Asset> {
        return this._assets;
    }

    public add(asset: Asset): void {
        this._assets.set(asset.name, asset);
    }

    public get(name: string): Asset | undefined {
        return this._assets.get(name);
    }

    public getByType(assetType: AssetTypeEnum): Asset[] {
        const assets: Asset[] = [];
        for (const asset of this._assets.values()) {
            if (asset.type === assetType) {
                assets.push(asset);
            }
        }
        return assets;
    }

    public async load(): Promise<void> {
        const promises: Promise<void>[] = [];
        for (const asset of this._assets.values()) {
            promises.push(asset.load());
        }
        await Promise.all(promises);
    }
}