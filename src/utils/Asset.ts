import axios from 'axios';

export default class Asset {
    private _name: string;
    private _url: string;
    private _blob: Blob | null = null;
    private _blobUrl: string | null = null;
    public type: AssetTypeEnum = AssetTypeEnum.Blob;

    public get name(): string {
        return this._name;
    }

    public get url(): string {
        return this._url;
    }

    public get blob(): Blob | null {
        return this._blob;
    }

    public get blobUrl(): string | null {
        if (this._blob === null) {
            return null;
        }
        if (this._blobUrl === null) {
            this._blobUrl = URL.createObjectURL(this._blob);
        }
        return this._blobUrl;
    }

    public get isLoaded(): boolean {
        return this._blob !== null;
    }

    constructor(name: string, url: string, type: AssetTypeEnum = AssetTypeEnum.Blob) {
        this._name = name;
        this._url = url;
        this.type = type;
    }

    public async load(): Promise<void> {
        if (this._blob !== null) {
            return;
        }
        const response = await axios.get(this._url, {
            responseType: 'blob',
        });
        this._blob = response.data;
    }
}

export enum AssetTypeEnum {
    Image = 'image',
    Video = 'video',
    Audio = 'audio',
    Blob = 'blob',
}