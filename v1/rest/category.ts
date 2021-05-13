import type { PagingObject } from '../payloads/misc';
import type { CategoryObject } from '../payloads/category';
import type { SimplifiedPlaylistObject } from '../payloads/playlist';
import type { Country_O, Limit_O, Locale_O, Offset_O } from './util';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-categories
 */
export interface GetMultipleCategoriesQuery extends Country_O, Limit_O, Locale_O, Offset_O {
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
export interface GetCategoryQuery extends Country_O, Locale_O {
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-category
 */
export type GetCategoryResponse = CategoryObject;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-categories-playlists
 */
export interface GetCategoryPlaylistQuery extends Country_O, Limit_O, Offset_O {
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-categories-playlists
 */
export interface GetCategoryPlaylistResponse {
  playlists: PagingObject<SimplifiedPlaylistObject>;
}