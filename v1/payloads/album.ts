import type { SimplifiedArtistObject } from './artist';
import type { SimplifiedTrackObject } from './track';

export interface SimplifiedAlbumObject {
  /**
   * The field is present when getting an artist’s albums. Possible values are `album`, `single`, `compilation`, or `appears_on`. Compare to `album_type` this field represents relationship between the artist and the album
   */
  album_group: string;

  /**
   * The type of the album: `album`, `single`, or `compilation`
   */
  album_type: string;

  /**
   * The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist
   */
  artists: Array<SimplifiedArtistObject>;

  /**
   * The markets in which the album is available: `ISO 3166-1 alpha-2` country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market
   */
  available_markets: Array<string>;

  /**
   * Known external URLs for this album
   */
  external_urls: object;

  /**
   * A link to the Web API endpoint providing full details of the album
   */
  href: string;

  /**
   * The Spotify ID for the album
   */
  id: string;

  /**
   * The cover art for the album in various sizes, widest first
   */
  images: Array<object>;

  /**
   * The name of the album. In case of an album takedown, the value may be an empty string
   */
  name: string;

  /**
   * The date the album was first released, for example `1981-12-15`. Depending on the precision, it might be shown as `1981` or `1981-12`
   */
  release_date: string;

  /**
   * The precision with which `release_date` value is known: `year`, `month`, or `day`
   */
  release_date_precision: string;

  /**
   * Included in the response when a content restriction is applied
   */
  restrictions?: AlbumRestrictionObject;

  /**
   * The object type: `album`
   */
  type: string;

  /**
   * The Spotify URI for the album
   */
  uri: string;
}

export interface AlbumObject extends Omit<SimplifiedAlbumObject, 'album_group'> {
  /**
   * The copyright statements of the album
   */
  copyrights: Array<object>;

  /**
   * Known external IDs for the album
   */
  external_ids: object;

  /**
   * A list of the genres used to classify the album. For example: `Prog Rock` , `Post-Grunge`. (If not yet classified, the array is empty)
   */
  genres: Array<string>;

  /**
   * The label for the album
   */
  label: string;

  /**
   * The popularity of the album. The value will be between `0` and `100`, with `100` being the most popular. The popularity is calculated from the popularity of the album’s individual tracks
   */
  popularity: number;

  /**
   * The tracks of the album
   */
  tracks: Array<SimplifiedTrackObject>;
}

export interface AlbumRestrictionObject {
  /**
   * The reason for the restriction
   */
  reason: string;
}

export interface SavedAlbumObject {
  /**
   * The date and time the album was saved. Timestamps are returned in `ISO 8601` format as Coordinated Universal Time (UTC) with a zero offset: `YYYY-MM-DDTHH:MM:SSZ`. If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, `release_date` in an album object
   */
  added_at: Date;

  /**
   * Information about the album
   */
  album: AlbumObject;
}