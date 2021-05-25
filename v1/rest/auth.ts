/**
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
 */
export interface PostClientCredentialsFlowBody {
  grant_type: 'client_credentials';
}

/**
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
 */
export interface PostClientCredentialsFlowResponse {
  access_token: string;
  token_type: 'bearer';
  expires_in: number;
}