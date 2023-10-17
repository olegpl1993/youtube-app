import { SearchItem } from './search-item.model';

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
