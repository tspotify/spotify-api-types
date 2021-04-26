/**
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-available-markets
 */
export interface GetAvailableMarketsResponse {
  /**
   * List of the countries in which Spotify is available, identified by their `ISO 3166-1 alpha-2`
   * country code with additional country codes for special territories
   */
  markets: Array<string>;
}