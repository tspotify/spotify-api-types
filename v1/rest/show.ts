import type { ShowObject, SimplifiedShowObject } from '../payloads/show';
import type { SimplifiedEpisodeObject } from '../payloads/episode';
import type { PagingObject } from '../payloads/misc';
import type { Limit_O, Market_R, Offset_O } from './util';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-shows
 */
export interface GetMultipleShowsQuery extends Market_R {
  /**
   * A comma-separated list of Spotify IDs for the shows. Maximum: `50` IDs
   */
  ids: Array<string>;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-shows
 */
export interface GetMultipleShowsResponse {
  shows: Array<SimplifiedShowObject | null>;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-show
 */
export interface GetShowQuery extends Market_R {
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-show
 */
export type GetShowResponse = ShowObject;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-shows-episodes
 */
export interface GetShowEpisodesQuery extends Limit_O, Market_R, Offset_O {
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-shows-episodes
 */
export type GetShowEpisodesResponse = PagingObject<SimplifiedEpisodeObject>;