/**
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
 */
export interface ClientCredentialsFlowAccessTokenObject {
  access_token: string;
  token_type: 'bearer';
  expires_in: number;
}