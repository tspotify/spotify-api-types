import type { AudioFeaturesObject, TrackObject } from '../payloads/track';
import type { Market_O } from './util';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-tracks
 */
export interface GetMultipleTracksQuery extends Market_O {
  /**
   * A comma-separated list of the Spotify IDs for the tracks. Maximum: `50` IDs
   */
  ids: Array<string>;
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
export interface GetTrackQuery extends Market_O {
}

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