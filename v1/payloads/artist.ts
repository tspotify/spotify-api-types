export interface ArtistObject {
  /**
   * Known external URLs for this artist
   */
  external_urls: object;
  /**
   * Information about the followers of the artist
   */
  followers: object;
  /**
   * A list of the genres the artist is associated with. For example: "Prog Rock" , "Post-Grunge". (If not yet classified, the array is empty)
   */
  genres: Array<string>;
  /**
   * A link to the Web API endpoint providing full details of the artist
   */
  href: string;
  /**
   * The Spotify ID for the artist
   */
  id: string;
  /**
   * Images of the artist in various sizes, widest first.
   */
  images: Array<object>;
  /**
   * The name of the artist
   */
  name: string;
  /**
   * The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist’s popularity is calculated from the popularity of all the artist’s tracks
   */
  popularity: number;
  /**
   * The object type: "artist"
   */
  type: string;
  /**
   * The Spotify URI for the artist
   */
  uri: string;
}

export interface SimplifiedArtistObject {
  /**
   * Known external URLs for this artist
   */
  external_urls: object;
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
   * The object type: "artist"
   */
  type: string;
  /**
   * The Spotify URI for the artist
   */
  uri: string;
}