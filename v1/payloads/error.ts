/**
 * https://developer.spotify.com/documentation/web-api/#authentication-error-object
 */
export interface AuthenticationErrorObject {
  /**
   * A high level description of the error as specified in `RFC 6749 Section 5.2`
   */
  error: string;

  /**
   * A more detailed description of the error as specified in `RFC 6749 Section 4.1.2.1`
   */
  error_description: string;
}

/**
 * https://developer.spotify.com/documentation/web-api/#regular-error-object
 */
export interface RegularErrorObject {
  error: RegularErrorObjectBody;
}

export interface RegularErrorObjectBody {
  /**
   * The HTTP status code that is also returned in the response header
   */
  status: number;

  /**
   * A short description of the cause of the error
   */
  message: string;
}
