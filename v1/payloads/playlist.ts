import type { TrackObject } from './track';
import type { EpisodeObject } from './episode';
import type { PublicUserObject } from './user';
import type { ExternalUrlObject, ImageObject, FollowersObject } from './misc';

/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-playlistobject
 */
export interface PlaylistObject extends SimplifiedPlaylistObject {
  /**
   * Information about the followers of the playlist
   */
  followers: FollowersObject;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-playlisttrackobject
 */
export interface PlaylistTrackObject {
  /**
   * The date and time the track or episode was added.
   * 
   * **⚠️Note**: Some very old playlists may return `null` in this field
   */
  added_at: Date | null;

  /**
   * The Spotify user who added the track or episode.
   * 
   * **⚠️Note**: Some very old playlists may return `null` in this field
   */
  added_by: PublicUserObject | null;

  /**
   * Whether this track or episode is a local file or not
   */
  is_local: boolean;

  /**
   * Information about the track or episode
   */
  track: TrackObject | EpisodeObject;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-playlisttracksrefobject
 */
export interface PlaylistTracksRefObject {
  /**
   * A link to the Web API endpoint where full details of the playlist’s tracks can be retrieved
   */
  href: string;

  /**
   * Number of tracks in the playlist
   */
  total: number;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedplaylistobject
 */
export interface SimplifiedPlaylistObject {
  /**
   * `true` if the owner allows other users to modify the playlist
   */
  collaborative: boolean;

  /**
   * The playlist description. Only returned for modified, verified playlists, otherwise `null`
   */
  description: string | null;

  /**
   * Known external URLs for this playlist
   */
  external_urls: ExternalUrlObject;

  /**
   * A link to the Web API endpoint providing full details of the playlist
   */
  href: string;

  /**
   * The Spotify ID for the playlist
   */
  id: string;

  /**
   * Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. 
   * 
   * **⚠️Note**: If returned, the source URL for the image (url) is temporary and will expire in less than a day
   */
  images: Array<ImageObject>;

  /**
   * The name of the playlist
   */
  name: string;

  /**
   * The user who owns the playlist
   */
  owner: PublicUserObject;

  /**
   * The playlist’s public/private status:`true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant
   */
  public: boolean;

  /**
   * The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
   */
  snapshot_id: string;

  /**
   * A collection containing a link (href) to the Web API endpoint where full details of the playlist’s tracks can be retrieved, along with the total number of tracks in the playlist.
   * 
   * **⚠️Note**: A track object may be `null`. This can happen if a track is no longer available
   */
  tracks: PlaylistTracksRefObject;

  /**
   * The object type: `playlist`
   */
  type: string;

  /**
   * The Spotify URI for the playlist
   */
  uri: string;
}