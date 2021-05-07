import type { AudioFeaturesObject, TrackObject } from '../payloads/track';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-tracks
 */
export interface GetMultipleTracksQuery {
  /**
   * A comma-separated list of the Spotify IDs for the tracks. Maximum: `50` IDs
   */
  ids: Array<string>;

  /**
   * An `ISO 3166-1 alpha-2` country code or the string `from_token`. Provide this parameter if you want to apply Track Relinking
   */
  market?: string;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-tracks
 */
export interface GetMultipleTracksResponse {
  tracks: Array<TrackObject | null>;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-track
 */
export type GetTrackQuery = Omit<GetMultipleTracksQuery, 'ids'>;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-track
 */
export type GetTrackResponse = TrackObject;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-audio-features
 */
export interface GetMultipleTracksAudioFeaturesQuery {
  /**
   * A comma-separated list of the Spotify IDs for the tracks. Maximum: `100` IDs
   */
  ids: Array<string>;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-audio-features
 */
export interface GetMultipleTracksAudioFeaturesResponse {
  audio_features: Array<AudioFeaturesObject | null>;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-audio-features
 */
export type GetTrackAudioFeaturesResponse = AudioFeaturesObject;