export interface DataList {
  TODO: string;
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItemData[];
}

export interface SearchItemData {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
}

export interface Id {
  kind: string;
  videoId: string;
}

export interface SearchResultList {
  TODO: string;
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItem[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
  defaultLanguage?: string;
}

export interface Thumbnails {
  default: ThumbnailsSize;
  medium: ThumbnailsSize;
  high: ThumbnailsSize;
  standard: ThumbnailsSize;
  maxres: ThumbnailsSize;
}

export interface ThumbnailsSize {
  url: string;
  width: number;
  height: number;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
