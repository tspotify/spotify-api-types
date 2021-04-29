import type { SimplifiedArtistObject } from './artist';
import type { SimplifiedTrackObject } from './track';
import type { PagingObject, ExternalUrlObject, ExternalIdObject, CopyrightObject, BaseRestrictionObject, BaseSavedObject, ImageObject } from './misc';

export type AlbumGroupType = 'album' | 'single' | 'compilation' | 'appears_on';

export interface SimplifiedAlbumObject {
  /**
   * The field is present when getting an artist’s albums. Possible values are `album`, `single`, `compilation`, or `appears_on`. Compare to `album_type` this field represents relationship between the artist and the album
   */
  album_group?: AlbumGroupType;

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
  external_urls: ExternalUrlObject;

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
  images: Array<ImageObject>;

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
  copyrights: Array<CopyrightObject>;

  /**
   * Known external IDs for the album
   */
  external_ids: ExternalIdObject;

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
  tracks: PagingObject<SimplifiedTrackObject>;
}

export type AlbumRestrictionObject = BaseRestrictionObject;

export interface SavedAlbumObject extends BaseSavedObject {
  /**
   * Information about the album
   */
  album: AlbumObject;
}