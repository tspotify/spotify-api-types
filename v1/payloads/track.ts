import type { SimplifiedArtistObject } from './artist';
import type { SimplifiedAlbumObject } from './album';
import type { ExternalUrlObject, ExternalIdObject, BaseRestrictionObject, BaseSavedObject } from './misc';

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

export type TrackRestrictionObject = BaseRestrictionObject;

export interface SavedTrackObject extends BaseSavedObject {
  /**
   * Information about the `track`
   */
  track: TrackObject;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-tuneabletrackobject
 */
export interface TuneableTrackObject {
  /**
   * A confidence measure from `0.0` to `1.0` of whether the track is acoustic. `1.0` represents high confidence the track is acoustic
   */
  acousticness: number;

  /**
   * Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of `0.0` is least danceable and `1.0` is most danceable
   */
  danceability: number;

  /**
   * The duration of the track in milliseconds
   */
  duration_ms: number;

  /**
   * Energy is a measure from `0.0` to `1.0` and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy
   */
  energy: number;

  /**
   * Predicts whether a track contains no vocals. `Ooh` and `aah` sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly `vocal`. The closer the instrumentalness value is to `1.0`, the greater likelihood the track contains no vocal content. Values above `0.5` are intended to represent instrumental tracks, but confidence is higher as the value approaches `1.0`
   */
  instrumentalness: number;

  /**
   * The key the track is in. Integers map to pitches using standard Pitch Class notation
   * 
   * E.g: `0 = C`, `1 = C♯/D♭`, `2 = D` and so on
   */
  key: number;

  /**
   * Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above `0.8` provides strong likelihood that the track is live
   */
  liveness: number;

  /**
   * The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typical range between `-60` and `0` dB
   */
  loudness: number;

  /**
   * Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by `1` and minor is `0`
   */
  mode: number;

  /**
   * The popularity of the track. The value will be between `0` and `100`, with `100` being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are
   * 
   * **⚠️Note**: When applying `track relinking` via the market parameter, it is expected to find relinked tracks with popularities that do not match `min_*`, `max_*` and `target_*` popularities. These relinked tracks are accurate replacements for unplayable tracks with the expected popularity scores. Original, non-relinked tracks are available via the `linked_from` attribute of the relinked track response
   */
  popularity: number;

  /**
   * Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to `1.0` the attribute value. Values above `0.66` describe tracks that are probably made entirely of spoken words. Values between `0.33` and `0.66` describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below `0.33` most likely represent music and other non-speech-like tracks
   */
  speechiness: number;

  /**
   * The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration
   */
  tempo: number;

  /**
   * An estimated overall time signature of a track. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure)
   */
  time_signature: number;

  /**
   * A measure from `0.0` to `1.0` describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
   */
  valence: number;
}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-audiofeaturesobject
 */
export interface AudioFeaturesObject extends Omit<TuneableTrackObject, 'popularity'> {
  /**
   * An HTTP URL to access the full audio analysis of this track. An access token is required to access this data
   */
  analysis_url: string;

  /**
   * The Spotify ID for the track
   */
  id: string;

  /**
   * A link to the Web API endpoint providing full details of the track
   */
  track_href: string;

  /**
   * The object type: `audio_features`
   */
  type: string;

  /**
   * The Spotify URI for the track
   */
  uri: string;
}