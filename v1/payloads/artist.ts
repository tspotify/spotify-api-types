import type { ExternalUrlObject, FollowersObject, ImageObject } from './misc';

export interface SimplifiedArtistObject {
  /**
   * Known external URLs for this artist
   */
  external_urls: ExternalUrlObject;

  /**
   * A link to the Web API endpoint providing full details of the artist
   */
  href: string;

  /**
   * The Spotify ID for the artist
   */
  id: string;

  /**
   * The name of the artist
   */
  name: string;

  /**
   * The object type: `artist`
   */
  type: string;

  /**
   * The Spotify URI for the artist
   */
  uri: string;
}

export interface ArtistObject extends SimplifiedArtistObject {
  /**
   * Information about the followers of the artist
   */
  followers: FollowersObject;

  /**
   * A list of the genres the artist is associated with. For example: `Prog Rock` , `Post-Grunge`. (If not yet classified, the array is empty)
   */
  genres: Array<string>;

  /**
   * Images of the artist in various sizes, widest first.
   */
  images: Array<ImageObject>;

  /**
   * The popularity of the artist. The value will be between `0` and `100`, with `100` being the most popular. The artist’s popularity is calculated from the popularity of all the artist’s tracks
   */
  popularity: number;
}