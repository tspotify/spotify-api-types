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

export interface BaseRestrictionObject {
  /**
   * The reason for the restriction. Supported values:
   * 
   * `market` - The content item is not available in the given market
   * 
   * `product` - The content item is not available for the user’s subscription type
   * 
   * `explicit` - The content item is explicit and the user’s account is set to not play explicit content
   * 
   * **⚠️Note**: Additional reasons may be added in the future. If you use this field, make sure that your application safely handles unknown values
   */
  reason: string;
}

export interface BaseSavedObject {
  /**
   * The date and time the `track` was saved. Timestamps are returned in `ISO 8601` format as Coordinated Universal Time (UTC) with a zero offset: `YYYY-MM-DDTHH:MM:SSZ`. If the time is imprecise (for example, the date/time of an `album` release), an additional field indicates the precision. See for example, `release_date` in an `album` object
   */
  added_at: Date;
}