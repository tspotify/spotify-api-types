import type { SimplifiedShowObject } from './show';
import type { ExternalUrlObject, BaseRestrictionObject, BaseSavedObject, ImageObject } from './misc';

export interface SimplifiedEpisodeObject {
  /**
   * A URL to a 30 second preview (MP3 format) of the episode. `null` if not available
   */
  audio_preview_url: string | null;

  /**
   * A description of the episode
   */
  description: string;

  /**
   * The episode length in milliseconds
   */
  duration_ms: number;

  /**
   * Whether or not the episode has explicit content (`true` = yes it does; `false` = no it does not OR unknown).
   */
  explicit: boolean;

  /**
   * External URLs for this episode
   */
  external_urls: ExternalUrlObject;

  /**
   * A link to the Web API endpoint providing full details of the episode
   */
  href: string;

  /**
   * A description of the episode. This field may contain HTML tags
   */
  html_description: string;

  /**
   * The Spotify ID for the episode
   */
  id: string;

  /**
   * The cover art for the episode in various sizes, widest first
   */
  images: Array<ImageObject>;

  /**
   * True if the episode is hosted outside of Spotify’s CDN
   */
  is_externally_hosted: boolean;

  /**
   * True if the episode is playable in the given market. Otherwise false
   */
  is_playable: boolean;

  /**
   * The language used in the episode, identified by a `ISO 639` code
   * 
   * **⚠️Note**: This field is deprecated and might be removed in the future. Please use the languages field instead
   */
  language: string;

  /**
   * A list of the languages used in the episode, identified by their `ISO 639` code
   */
  languages: Array<string>;

  /**
   * The name of the episode
   */
  name: string;

  /**
   * The date the episode was first released, for example `1981-12-15`. Depending on the precision, it might be shown as `1981` or `1981-12`
   */
  release_date: string;

  /**
   * The precision with which `release_date` value is known: `year`, `month`, or `day`
   */
  release_date_precision: string;

  /**
   * Included in the response when a content restriction is applied. See Restriction Object for more details
   */
  restrictions?: EpisodeRestrictionObject;

  /**
   * The user’s most recent position in the episode. Set if the supplied access token is a user token and has the scope `user-read-playback-position`
   */
  resume_point: ResumePointObject;

  /**
   * The object type: `episode`
   */
  type: string;

  /**
   * The Spotify URI for the episode
   */
  uri: string;
}

export interface EpisodeObject extends SimplifiedEpisodeObject {
  /**
   * The show on which the episode belongs
   */
  show: SimplifiedShowObject;
}

export type EpisodeRestrictionObject = BaseRestrictionObject;

export interface SavedEpisodeObject extends BaseSavedObject {
  /**
   * Information about the episode
   */
  episode: EpisodeObject;
}

export interface ResumePointObject {
  /**
   * Whether or not the episode has been fully played by the user
   */
  fully_played: boolean;

  /**
   * The user’s most recent position in the episode in milliseconds
   */
  resume_position_ms: number;
}