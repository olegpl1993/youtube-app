import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResultList } from 'src/models/search-result.model';

@Injectable({
  providedIn: 'root',
})
export default class ApiService {
  private apiUrl =
    'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/angular/response.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<SearchResultList> {
    return this.http.get<SearchResultList>(this.apiUrl);
  }
}
