import type { CopyrightObject, ExternalUrlObject, BaseSavedObject, PagingObject } from './misc';
import type { SimplifiedEpisodeObject } from './episode';

export interface SimplifiedShowObject {
  /**
   * A list of the countries in which the show can be played, identified by their `ISO 3166-1 alpha-2` code
   */
  available_markets: Array<string>;

  /**
   * The copyright statements of the show
   */
  copyrights: Array<CopyrightObject>;

  /**
   * A description of the show
   */
  description: string;

  /**
   * Whether or not the show has explicit content (`true` = yes it does; `false` = no it does not OR unknown)
   */
  explicit: boolean;

  /**
   * External URLs for this show
   */
  external_urls: ExternalUrlObject;

  /**
   * A link to the Web API endpoint providing full details of the show
   */
  href: string;

  /**
   * The Spotify ID for the show
   */
  id: string;

  /**
   * The cover art for the show in various sizes, widest first
   */
  images: Array<any>;

  /**
   * True if all of the show’s episodes are hosted outside of Spotify’s CDN. This field might be null in some cases
   */
  is_externally_hosted: boolean | null;

  /**
   * A list of the languages used in the show, identified by their `ISO 639` code
   */
  languages: Array<string>;

  /**
   * The media type of the show
   */
  media_type: string;

  /**
   * The name of the show
   */
  name: string;

  /**
   * The publisher of the show
   */
  publisher: string;

  /**
   * The object type: `show`
   */
  type: string;

  /**
   * The Spotify URI for the show
   */
  uri: string;
}

export interface ShowObject extends SimplifiedShowObject {
  /**
   * A list of the show’s episodes
   */
  episodes: PagingObject<SimplifiedEpisodeObject>;
}

export interface SavedShowObject extends BaseSavedObject {
  /**
   * Information about the show
   */
  show: SimplifiedShowObject;
}