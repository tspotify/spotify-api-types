import type { EpisodeObject } from '../payloads/episode';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-episodes
 */
export interface GetMultipleEpisodesQuery {
  /**
   * A comma-separated list of Spotify IDs for the episodes. Maximum: `50` IDs
   */
  ids: Array<string>;

  /**
   * An `ISO 3166-1 alpha-2` country code. If a country code is specified, only episodes that are available in that market will be returned
   * 
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter
   * 
   * **Note**: If neither market or user country are provided, the content is considered unavailable for the client
   */
  market: string;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-episodes
 */
export interface GetMultipleEpisodesResponse {
  episodes: Array<EpisodeObject | null>;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-episode
 */
export type GetEpisodeQuery = Omit<GetMultipleEpisodesQuery, 'ids'>;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-episode
 */
export type GetEpisodeResponse = EpisodeObject;