import type { ShowObject } from '../payloads/show';
import type { SimplifiedEpisodeObject } from '../payloads/episode';
import type { PagingObject } from '../payloads/misc';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-shows
 */
export interface GetMultipleShowsQuery {
  /**
   * A comma-separated list of Spotify IDs for the shows. Maximum: `50` IDs
   */
  ids: Array<string>;

  /**
   * An `ISO 3166-1 alpha-2` country code. If a country code is specified, only shows that are available in that market will be returned
   * 
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter
   * 
   * **Note**: If neither market or user country are provided, the content is considered unavailable for the client
   */
  market: string;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-shows
 */
export interface GetMultipleShowsResponse {
  shows: Array<ShowObject | null>;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-show
 */
export type GetShowQuery = Omit<GetMultipleShowsQuery, 'ids'>;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-show
 */
export type GetShowResponse = ShowObject;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-shows-episodes
 */
export interface GetShowEpisodesQuery extends Omit<GetMultipleShowsQuery, 'ids'> {
  /**
   * The maximum number of episodes to return. Default: `20`, Minimum: `1`, Maximum: `50`
   */
  limit?: number;

  /**
   * The index of the first episode to return. Default: `0` (the first object). Use with `limit` to get the next set of episodes
   */
  offset?: number;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-shows-episodes
 */
export type GetShowEpisodesResponse = PagingObject<SimplifiedEpisodeObject>;