import type { PagingObject } from '../payloads/misc';
import type { CategoryObject } from '../payloads/category';
import type { SimplifiedPlaylistObject } from '../payloads/playlist';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-categories
 */
export interface GetMultipleCategoriesQuery {
  /**
   * A country: an `ISO 3166-1 alpha-2` country code. Provide this parameter if you want to narrow the list of returned categories to those relevant to a particular country. If omitted, the returned items will be globally relevant
   */
  country?: string;

  /**
   * The desired language, consisting of an `ISO 639-1` language code and an `ISO 3166-1 alpha-2` country code, joined by an underscore. For example: `es_MX`, meaning `Spanish (Mexico)`. Provide this parameter if you want the category metadata returned in a particular language
   * 
   * **Note:** If `locale` is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The locale parameter, combined with the country parameter, may give odd results if not carefully matched. For example `country=SE&locale=de_DE` will return a list of categories relevant to Sweden but as German language strings
   */
  locale?: string;

  /**
   * The maximum number of categories to return. Default: `20`, Minimum: `1`, Maximum: `50`
   */
  limit?: number;

  /**
   * The index of the first item to return. Default: `0` (the first object). Use with `limit` to get the next set of categories
   */
  offset?: number;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-categories
 */
export interface GetMultipleCategoriesResponse {
  categories: PagingObject<CategoryObject>;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-category
 */
export interface GetCategoryQuery {
  /**
   * A country: an `ISO 3166-1 alpha-2` country code. Provide this parameter to ensure that the category exists for a particular country
   */
  country?: string;

  /**
   * The desired language, consisting of an `ISO 639-1` language code and an `ISO 3166-1 alpha-2` country code, joined by an underscore. For example: `es_MX`, meaning `Spanish (Mexico)`. Provide this parameter if you want the category strings returned in a particular language
   * 
   * **Note:** If `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English).
   */
  locale?: string;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-category
 */
export type GetCategoryResponse = CategoryObject;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-categories-playlists
 */
export interface GetCategoryPlaylistQuery {
  /**
   * A country: an `ISO 3166-1 alpha-2` country code. Provide this parameter to ensure that the category exists for a particular country
   */
  country?: string;

  /**
   * The maximum number of categories to return. Default: `20`, Minimum: `1`, Maximum: `50`
   */
  limit?: number;

  /**
   * The index of the first item to return. Default: `0` (the first object). Use with `limit` to get the next set of items
   */
  offset?: number;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-categories-playlists
 */
export interface GetCategoryPlaylistResponse {
  playlists: PagingObject<SimplifiedPlaylistObject>;
}