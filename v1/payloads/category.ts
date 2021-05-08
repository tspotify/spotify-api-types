import type { ImageObject } from './misc';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-categoryobject
 */
export interface CategoryObject {
  /**
   * A link to the Web API endpoint returning full details of the category
   */
  href: string;

  /**
   * The category icons, in various sizes
   */
  icons: Array<ImageObject>;

  /**
   * The Spotify category ID of the category
   */
  id: string;

  /**
   * The name of the category
   */
  name: string;
}