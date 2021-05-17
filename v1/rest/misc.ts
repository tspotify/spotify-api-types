import type { Limit_O, Market_O } from './util';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-available-markets
 */
export interface GetAvailableMarketsResponse {
  /**
   * List of the countries in which Spotify is available, identified by their `ISO 3166-1 alpha-2`
   * country code with additional country codes for special territories
   */
  markets: Array<string>;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recommendation-genres
 */
export interface GetRecommendationGenresResponse {
  /**
   * A list of available genres
   */
  genres: Array<string>;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recommendations
 */
export interface GetRecommendationsQuery extends Limit_O, Market_O {
  /**
   * A comma separated list of Spotify IDs for seed artists. Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`
   */
  seed_artists: Array<string>;

  /**
   * A comma separated list of any genres in the set of available genre seeds. Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`
   */
  seed_genres: Array<string>;

  /**
   * A comma separated list of Spotify IDs for a seed track. Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`
   */
  seed_tracks: Array<string>;

  min_acousticness?: number;

  max_acousticness?: number;

  target_acousticness?: number;

  min_danceability?: number;

  max_danceability?: number;

  target_danceability?: number;

  min_duration_ms?: number;

  max_duration_ms?: number;

  target_duration_ms?: number;

  min_energy?: number;

  max_energy?: number;

  target_energy?: number;

  min_instrumentalness?: number;

  max_instrumentalness?: number;

  target_instrumentalness?: number;

  min_key?: number;

  max_key?: number;

  target_key?: number;

  min_liveness?: number;

  max_liveness?: number;

  target_liveness?: number;

  min_loudness?: number;

  max_loudness?: number;

  target_loudnes?: number;

  min_mode?: number;

  max_mode?: number;

  target_mode?: number;

  min_popularity?: number;

  max_popularity?: number;

  target_popularity?: number;

  min_speechiness?: number;

  max_speechiness?: number;

  target_speechiness?: number;

  min_tempo?: number;

  max_tempo?: number;

  target_tempo?: number;

  min_time_signature?: number;

  max_time_signature?: number;

  target_time_signature?: number;

  min_valence?: number;

  max_valence?: number;

  target_valence?: number;
}