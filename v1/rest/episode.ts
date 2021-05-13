import type { EpisodeObject } from '../payloads/episode';
import type { Market_R } from './util';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-episodes
 */
export interface GetMultipleEpisodesQuery extends Market_R {
  /**
   * A comma-separated list of Spotify IDs for the episodes. Maximum: `50` IDs
   */
  ids: Array<string>;
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
export interface GetEpisodeQuery extends Market_R {
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-episode
 */
export type GetEpisodeResponse = EpisodeObject;