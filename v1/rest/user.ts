import type { PrivateUserObject, PublicUserObject } from '../payloads/user';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-current-users-profile
 */
export type GetCurrentUserResponse = PrivateUserObject;

/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-profile
 */
export type GetUserResponse = PublicUserObject;