import type { ArtistObject } from '../payloads/artist';
import type { TrackObject } from '../payloads/track';
import type { PagingObject } from '../payloads/misc';
import type { SimplifiedAlbumObject, AlbumGroupType } from '../payloads/album';
import type { Limit_O, Market_R, Offset_O } from './util';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-artists
 */
export interface GetMultipleArtistsQuery {
  /**
   * A comma-separated list of the Spotify IDs for the artists. Maximum: `50` IDs
   */
  ids: Array<string>;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-artists
 */
export interface GetMultipleArtistsResponse {
  artists: Array<ArtistObject | null>;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artist
 */
export type GetArtistResponse = ArtistObject;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-top-tracks
 */
export interface GetArtistTopTracksQuery extends Market_R {
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-top-tracks
 */
export interface GetArtistTopTracksResponse {
  /**
   * An array of up to `10` track objects in JSON format
   */
  tracks: Array<TrackObject>
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-related-artists
 */
export interface GetRelatedArtistsResponse {
  /**
   * An array of up to `20` artist objects in JSON format
   */
  artists: Array<ArtistObject>;
}

/**
 * Get Spotify catalog information about an artist’s albums
 * 
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-albums
 */
export interface GetArtistAlbumsQuery extends Limit_O, Offset_O {
  /**
   * A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned. Valid values are:
   * - album
   * - single
   * - appears_on
   * - compilation
   * 
   * For example: `include_groups=album,single`
   */
  include_groups?: Array<AlbumGroupType>;

  /**
   * Synonym for country. `An ISO 3166-1 alpha-2` country code or the string `from_token`. Supply this parameter to limit the response to one particular geographical market
   * 
   * For example, for albums available in Sweden: `market=SE`
   * 
   * If not given, results will be returned for all markets and you are likely to get duplicate results per album, one for each market in which the album is available!
   */
  market?: string;
}

/**
 * Get Spotify catalog information about an artist’s albums
 * 
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-albums
 */
export type GetArtistAlbumsResponse = PagingObject<SimplifiedAlbumObject>;