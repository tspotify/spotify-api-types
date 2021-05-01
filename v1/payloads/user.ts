import type { ExternalUrlObject, FollowersObject, ImageObject, ExplicitContentSettingsObject } from './misc';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-privateuserobject
 */
export interface PrivateUserObject extends PublicUserObject {
  /**
   * The country of the user, as set in the user’s account profile. An `ISO 3166-1 alpha-2` country code. This field is only available when the current user has granted access to the `user-read-private` scope
   */
  country?: string;

  /**
   * The user’s email address, as entered by the user when creating their account. This field is only available when the current user has granted access to the `user-read-email` scope.
   * 
   * **⚠️Important**: This email address is unverified, there is no proof that it actually belongs to the user
   */
  email?: string;

  /**
   * The user’s explicit content settings. This field is only available when the current user has granted access to the `user-read-private` scope.
   */
  explicit_content?: ExplicitContentSettingsObject;

  /**
   * The user’s Spotify subscription level: `premium`, `free`, etc. This field is only available when the current user has granted access to the `user-read-private` scope.
   * 
   * **⚠️Note**: The subscription level `open` can be considered the same as `free`
   */
  product: string;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-publicuserobject
 */
export interface PublicUserObject {
  /**
   * The name displayed on the user’s profile
   */
  display_name?: string | null;

  /**
   * Known public external URLs for this user
   */
  external_urls: ExternalUrlObject;

  /**
   * Information about the followers of this user
   */
  followers?: FollowersObject;

  /**
   * A link to the Web API endpoint for this user
   */
  href: string;

  /**
   * The Spotify user ID for this user
   */
  id: string;

  /**
   * The user’s profile image
   */
  images?: Array<ImageObject>;

  /**
   * The object type: `user`
   */
  type: string;

  /**
   * The Spotify URI for this user
   */
  uri: string;
}