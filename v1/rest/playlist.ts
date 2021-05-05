import type { PlaylistObject, SimplifiedPlaylistObject, PlaylistTrackObject } from '../payloads/playlist';
import type { PagingObject, ImageObject } from '../payloads/misc';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlist
 */
export interface GetPlaylistQuery {
  /**
   * An `ISO 3166-1 alpha-2` country code or the string `from_token`. Provide this parameter if you want to apply `Track Relinking`
   * 
   * For episodes, if a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter
   *  
   * **⚠️Note**: If neither market or user country are provided, the episode is considered unavailable for the client
   */
  market: string;

  /**
   * A comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the playlist's description and URI: `fields=description,uri`
   * 
   * A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder: `fields=tracks.items(added_at,added_by.id)`
   * 
   * Use multiple parentheses to drill down into nested objects. For example: `fields=tracks.items(track(name,href,album(name,href)))`
   * 
   * Fields can be excluded by prefixing them with an exclamation mark. For example: `fields=tracks.items(track(name,href,album(!name,href)))`
   */
  fields?: string;

  /**
   * A comma-separated list of item types that your client supports besides the default track type. Valid types are: `track` and `episode`
   * 
   * **⚠️Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future. In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the type field of each object
   */
  additional_types?: string;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlist
 */
export type GetPlaylistResponse = PlaylistObject;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-list-users-playlists
 */
export interface GetUserPlaylistsQuery {
  /**
   * The maximum number of playlists to return. Default: `20`, Minimum: `1`, Maximum: `50`
   */
  limit?: number;

  /**
   * The index of the first playlist to return. Default: `0` (the first object). Use with `limit` to get the next set of playlists
   */
  offset?: number;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-list-users-playlists
 */
export type GetUserPlaylistsResponse = PagingObject<SimplifiedPlaylistObject>;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlists-tracks
 */
export interface GetPlaylistItemsQuery extends GetPlaylistQuery {
  /**
   * The maximum number of items to return. Default: `100`, Minimum: `1`, Maximum: `50`
   */
  limit?: number

  /**
   * The index of the first item to return. Default: `0` (the first object)
   */
  offset?: number;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlists-tracks
 */
export type GetPlaylistItemsResponse = PagingObject<PlaylistTrackObject>;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlist-cover
 */
export type GetPlaylistCoverImageResponse = ImageObject;