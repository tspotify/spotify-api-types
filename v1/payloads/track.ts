import type { SimplifiedArtistObject } from './artist';
import type { SimplifiedAlbumObject } from './album';
import type { ExternalUrlObject, ExternalIdObject } from './misc';

export interface LinkedTrackObject {
  /**
   * Known external URLs for this track
   */
  external_urls: ExternalUrlObject;

  /**
   * A link to the Web API endpoint providing full details of the track
   */
  href: string;

  /**
   * The Spotify ID for the track
   */
  id: string;

  /**
   * The object type: `track`
   */
  type: string;

  /**
   * The Spotify URI for the track
   */
  uri: string;
}

export interface SimplifiedTrackObject extends LinkedTrackObject {
  /**
   * The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist
   */
  artists: Array<SimplifiedArtistObject>;

  /**
   * A list of the countries in which the track can be played, identified by their `ISO 3166-1 alpha-2` code
   */
  available_markets: Array<string>;

  /**
   * The disc number (usually `1` unless the album consists of more than one disc)
   */
  disc_number: number;

  /**
   * The track length in milliseconds
   */
  duration_ms: number;

  /**
   * Whether or not the track has explicit lyrics (`true`=yes it does, `false`=no it does not or unknown)
   */
  explicit: boolean;

  /**
   * Whether or not the track is from a local file
   */
  is_local: boolean;

  /**
   * Part of the response when `Track Relinking` is applied. If `true`, the track is playable in the given market. Otherwise `false`
   */
  is_playable?: boolean;

  /**
   * Part of the response when `Track Relinking` is applied and is only part of the response if the track linking, in fact, exists. The requested track has been replaced with a different track. The track in the `linked_from` object contains information about the originally requested track
   */
  linked_from?: LinkedTrackObject;

  /**
   * The name of the track
   */
  name: string;

  /**
   * A URL to a `30` second preview (MP3 format) of the track.
   */
  preview_url?: string;

  /**
   * Included in the response when a content restriction is applied. See `TrackRestrictionObject` for more details
   */
  restrictions?: TrackRestrictionObject;

  /**
   * The number of the track. If an album has several discs, the track number is the number on the specified disc
   */
  track_number: number;
}

export interface TrackObject extends SimplifiedTrackObject {
  /**
   * The album on which the track appears. The album object includes a link in `href` to full information about the album
   */
  album: SimplifiedAlbumObject;

  /**
   * Known external IDs for the track
   */
  external_ids: ExternalIdObject;

  /**
   * The popularity of the track. The value will be between `0` and `100`, with `100` being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are. Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a `single` and an `album`) are rated independently. `Artist` and `album` popularity is derived mathematically from track popularity. Note that the popularity value may lag actual popularity by a few days: the value is not updated in real time.
   */
  popularity: number;
}

export interface TrackRestrictionObject {
  /**
   * The reason for the restriction. Supported values:
   * 
   * `market` - The content item is not available in the given market
   * 
   * `product` - The content item is not available for the user’s subscription type
   * 
   * `explicit` - The content item is explicit and the user’s account is set to not play explicit content
   * 
   * **⚠️Note**: Additional reasons may be added in the future. If you use this field, make sure that your application safely handles unknown values
   */
  reason: string;
}

export interface SavedTrackObject {
  /**
   * The date and time the `track` was saved. Timestamps are returned in `ISO 8601` format as Coordinated Universal Time (UTC) with a zero offset: `YYYY-MM-DDTHH:MM:SSZ`. If the time is imprecise (for example, the date/time of an `album` release), an additional field indicates the precision. See for example, `release_date` in an `album` object.
   */
  added_at: Date;

  /**
   * Information about the `track`
   */
  track: TrackObject;
}