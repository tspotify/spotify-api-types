// 1. Interfaces declared here are meant for internal use to reduce code duplication
// 2. An interface that starts with `R_` states that all of its properties are required
// 3. An interface that starts with `O_` states that all of its properties are optional
// 4. It is done to differentiate between two interfaces that have same properties but differ in them being optional or not

export interface Country_O {
  /**
   * An `ISO 3166-1 alpha-2` country code
   */
  country?: string;
}

export interface Limit_O {
  /**
   * The maximum number of items to return
   *  
   * Default: `20`, Minimum: `1`, Maximum: `50`
   */
  limit?: number;
}

export interface Locale_O {
  /**
  * The desired language, consisting of an `ISO 639-1` language code and an `ISO 3166-1 alpha-2` country code, joined by an underscore. For example: `es_MX`, meaning `Spanish (Mexico)`. Provide this parameter if you want the results returned in a particular language (where available)
  * 
  * **Note:** If `locale` is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The locale parameter, combined with the country parameter, may give odd results if not carefully matched. For example `country=SE&locale=de_DE` will return a list of items relevant to Sweden but as German language strings
  */
  locale?: string;
}

export interface Market_O {
  /**
   * An `ISO 3166-1 alpha-2` country code. If a country code is specified, only items that are available in that market will be returned
   * 
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter
   * 
   * **⚠️Note**: If neither market nor user country is provided, the content is considered unavailable for the client
   */
  market?: string;
}

export interface Market_R {
  /**
   * An `ISO 3166-1 alpha-2` country code. If a country code is specified, only items that are available in that market will be returned
   * 
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter
   * 
   * **⚠️Note**: If neither market nor user country is provided, the content is considered unavailable for the client
   */
  market: string;
}

export interface Offset_O {
  /**
   * The index of the first item to return
   * 
   * Default: `0` (the first object)
   * 
   * Use with `limit` to get the next set of items
   */
  offset?: number
}
