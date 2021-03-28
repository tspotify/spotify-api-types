export interface AlbumObject {
  album_type: string;
  artists: Array<object>;
  available_markets: Array<string>;
  copyrights: Array<object>;
  external_ids: object;
  external_urls: object;
  genres: Array<string>;
  href: string;
  id: string;
  images: Array<object>;
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  restricitions: object;
  tracks: Array<object>;
  type: string;
  uri: string;
}

export interface AlbumRestrictionObject {
  reason: string;
}

export interface SavedAlbumObject {
  added_at: Date;
  album: AlbumObject;
}

export interface SimplifiedAlbumObject {
  album_group: string;
  album_type: string;
  artists: Array<object>;
  available_markets: Array<string>;
  external_urls: object;
  href: string;
  id: string;
  images: Array<object>;
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: AlbumRestrictionObject;
  type: string;
  uri: string;
}