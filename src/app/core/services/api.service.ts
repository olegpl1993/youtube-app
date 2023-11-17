import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataList, SearchResultList } from 'src/shared/models/search-result.model';

@Injectable({
  providedIn: 'root',
})
export default class ApiService {
  // private apiKey = 'AIzaSyBoa9dWd02Nvz0RPSHYKXAHgd2nKAEAHu8';
  private apiKey = 'AIzaSyB9rWiwNDGbsAKgwcnQOTIwp87QGmaiU7Y';

  constructor(private http: HttpClient) {}

  getData(query: string): Observable<DataList> {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${this.apiKey}&maxResults=2`;
    return this.http.get<DataList>(url);
  }

  getMovieData(videoIds: string): Observable<SearchResultList> {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${this.apiKey}`;
    return this.http.get<SearchResultList>(url);
  }
}
