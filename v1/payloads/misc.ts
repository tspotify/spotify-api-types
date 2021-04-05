export interface PagingObject<T> {
  /**
   * A link to the Web API endpoint returning the full result of the request
   */
  href: string;

  /**
   * The requested data
   */
  items: Array<T>;

  /**
   * The maximum number of items in the response (as set in the query or by default)
   */
  limit: number;

  /**
   * URL to the next page of items (null if none)
   */
  next: string | null;

  /**
   * The offset of the items returned (as set in the query or by default)
   */
  offset: number;

  /**
   * URL to the previous page of items (null if none)
   */
  previous: string;

  /**
   * The total number of items available to return
   */
  total: number;
}

export interface CopyrightObject {
  /**
   * The copyright text for this content
   */
  text: string;

  /**
   * The type of copyright: `C` = the copyright, `P` = the sound recording (performance) copyright
   */
  type: string;
}

export interface ExternalIdObject {
  /**
   * International Article Number
   */
  ean: string;

  /**
   * International Standard Recording Code
   */
  isrc: string;

  /**
   * Universal Product Code
   */
  upc: string;
}

export interface ExternalUrlObject {
  /**
   * The Spotify URL for the object
   */
  spotify: string;
}