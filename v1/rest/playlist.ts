import type { PlaylistObject, SimplifiedPlaylistObject, PlaylistTrackObject } from '../payloads/playlist';
import type { PagingObject, ImageObject } from '../payloads/misc';
import type { Country_O, Limit_O, Locale_O, Market_R, Offset_O } from './util';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlist
 */
export interface GetPlaylistQuery extends Market_R {
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
export interface GetUserPlaylistsQuery extends Limit_O, Offset_O {
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-list-users-playlists
 */
export type GetUserPlaylistsResponse = PagingObject<SimplifiedPlaylistObject>;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlists-tracks
 */
export interface GetPlaylistItemsQuery extends GetPlaylistQuery, Offset_O {
  /**
   * The maximum number of items to return. Default: `100`, Minimum: `1`, Maximum: `50`
   */
  limit?: number
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlists-tracks
 */
export type GetPlaylistItemsResponse = PagingObject<PlaylistTrackObject>;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-playlist-cover
 */
export type GetPlaylistCoverImageResponse = Array<ImageObject>;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-featured-playlists
 */
export interface GetFeaturedPlaylistsQuery extends Country_O, Limit_O, Locale_O, Offset_O {
  /**
   * A timestamp in `ISO 8601` format: `yyyy-MM-ddTHH:mm:ss`. Use this parameter to specify the user’s local time to get results tailored for that specific date and time in the day. If not provided, the response defaults to the current UTC time. Example: `2014-10-23T09:00:00` for a user whose local time is `9AM`. If there were no featured playlists (or there is no data) at the specified time, the response will revert to the current UTC time
   */
  timestamp?: string;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-featured-playlists
 */
export interface GetFeaturedPlaylistsResponse {
  message: string;

  playlists: PagingObject<SimplifiedPlaylistObject>;
}