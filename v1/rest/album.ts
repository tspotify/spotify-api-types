import type { AlbumObject, SimplifiedAlbumObject } from '../payloads/album';
import type { SimplifiedTrackObject } from '../payloads/track';
import type { PagingObject } from '../payloads/misc';
import type { Country_O, Limit_O, Market_O, Offset_O } from './util';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-albums
 */
export interface GetMultipleAlbumsQuery extends Market_O {
  /**
   * A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs
   */
  ids: Array<string>;
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
export interface GetAlbumQuery extends Market_O {
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-album
 */
export type GetAlbumResponse = AlbumObject;


/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-albums-tracks
 */
export interface GetAlbumTracksQuery extends Limit_O, Market_O, Offset_O {
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-albums-tracks
 */
export type GetAlbumTracksResponse = PagingObject<SimplifiedTrackObject>;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-new-releases
 */
export interface GetNewReleasesQuery extends Country_O, Limit_O, Offset_O {
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-new-releases
 */
export interface GetNewReleasesResponse {
  albums: PagingObject<SimplifiedAlbumObject>;
}