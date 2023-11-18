import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataList, SearchResultList } from 'src/shared/models/search-result.model';

@Injectable({
  providedIn: 'root',
})
export default class ApiService {
  constructor(private http: HttpClient) {}

  getData(query: string): Observable<DataList> {
    const url = `search?part=snippet&q=${query}&type=video&maxResults=8`;
    return this.http.get<DataList>(url);
  }

  getMovieData(videoIds: string): Observable<SearchResultList> {
    const url = `videos?part=snippet,statistics&id=${videoIds}`;
    return this.http.get<SearchResultList>(url);
  }
}
