import type { AlbumObject } from '../payloads/album';
import type { SimplifiedTrackObject } from '../payloads/track';
import type { PagingObject } from '../payloads/misc';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-albums
 */
export interface GetMultipleAlbumsQuery {
  /**
   * A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs
   */
  ids: Array<string>;

  /**
   * An `ISO 3166-1 alpha-2` country code or the string `from_token`. Provide this parameter if you want to apply `Track Relinking`
   * 
   * https://developer.spotify.com/documentation/general/guides/track-relinking-guide/
   */
  market?: string;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-albums
 */
export interface GetMultipleAlbumsResponse {
  albums: Array<AlbumObject | null>;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-album
 */
export type GetAlbumQuery = Omit<GetMultipleAlbumsQuery, 'ids'>

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-album
 */
export type GetAlbumResponse = AlbumObject;


/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-albums-tracks
 */
export interface GetAlbumTracksQuery extends Omit<GetMultipleAlbumsQuery, 'ids'> {
  /**
   * The maximum number of tracks to return. Default: `20`, Minimum: `1`, Maximum: `50`
   */
  limit?: number;

  /**
   * The index of the first track to return. Default: 0 (the first object). Use with limit to get the next set of tracks
   */
  offset?: number
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-albums-tracks
 */
export type GetAlbumTracksResponse = PagingObject<SimplifiedTrackObject>;