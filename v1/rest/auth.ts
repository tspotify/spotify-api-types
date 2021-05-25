import type { ClientCredentialsFlowAccessTokenObject } from '../payloads/auth';

/**
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
 */
export interface PostClientCredentialsFlowBody {
  grant_type: 'client_credentials';
}

/**
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
 */
export type PostClientCredentialsFlowResponse = ClientCredentialsFlowAccessTokenObject;